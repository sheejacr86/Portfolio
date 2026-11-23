import { spawn } from 'child_process';
import fs from 'fs';

async function main() {
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--window-size=1440,900',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  try {
    const listResp = await fetch('http://127.0.0.1:9222/json');
    const pages = await listResp.json();
    const page = pages.find(p => p.type === 'page') || pages[0];
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && callbacks.has(data.id)) {
        const { resolve, reject } = callbacks.get(data.id);
        callbacks.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    };

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    const send = (method, params = {}) => {
      const reqId = id++;
      return new Promise((resolve, reject) => {
        callbacks.set(reqId, { resolve, reject });
        ws.send(JSON.stringify({ id: reqId, method, params }));
      });
    };

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Page.navigate', { url: 'http://127.0.0.1:3000/' });

    // Wait for preloader
    await new Promise(r => setTimeout(r, 3200));

    const targets = [
      { id: 'about', file: 'view_about.png' },
      { id: 'works', file: 'view_works.png' },
      { id: 'videos', file: 'view_videos.png' },
      { id: 'journey', file: 'view_journey.png' },
      { id: 'gallery', file: 'view_gallery.png' },
      { id: 'classes', file: 'view_classes.png' },
      { id: 'contact', file: 'view_contact.png' },
    ];

    for (const t of targets) {
      console.log(`Scrolling into view: #${t.id}...`);
      await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.getElementById('${t.id}');
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        })()`
      });
      // Wait for framer-motion whileInView animations to trigger and settle
      await new Promise(r => setTimeout(r, 1200));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(t.file, Buffer.from(shot.data, 'base64'));
      console.log(`Saved ${t.file}`);
    }

    ws.close();
  } finally {
    chrome.kill();
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

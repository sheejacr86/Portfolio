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

    // Wait for preloader to finish
    await new Promise(r => setTimeout(r, 3200));

    const sections = [
      { id: 'journey', file: 'clone_sec_journey.png' },
      { id: 'gallery', file: 'clone_sec_gallery.png' },
      { id: 'classes', file: 'clone_sec_classes.png' },
      { id: 'contact', file: 'clone_sec_contact.png' },
    ];

    for (const sec of sections) {
      console.log(`Navigating to ${sec.id}...`);
      await send('Runtime.evaluate', {
        expression: `
          const link = document.querySelector('[data-testid="nav-link-${sec.id}"]');
          if (link) link.click();
        `
      });
      // Wait for smooth scroll to complete
      await new Promise(r => setTimeout(r, 2200));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(sec.file, Buffer.from(shot.data, 'base64'));
      console.log(`Saved ${sec.file}`);
    }

    // Also let's capture the Marquee section by scrolling down slightly from top
    console.log('Capturing Marquee...');
    await send('Runtime.evaluate', {
      expression: `
        const el = document.querySelector('[data-testid="marquee"]');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      `
    });
    await new Promise(r => setTimeout(r, 1000));
    const marqueeShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_sec_marquee.png', Buffer.from(marqueeShot.data, 'base64'));

    console.log('Done capturing all sections!');
    ws.close();
  } finally {
    chrome.kill();
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

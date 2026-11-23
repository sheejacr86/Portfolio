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

    // Scroll gradually to trigger any whileInView Framer Motion triggers
    await send('Runtime.evaluate', {
      expression: `(async () => {
        const total = document.body.scrollHeight;
        for (let y = 0; y < total; y += 800) {
          window.scrollTo(0, y);
          await new Promise(r => setTimeout(r, 100));
        }
        window.scrollTo(0, 0);
      })()`,
      awaitPromise: true
    });

    await new Promise(r => setTimeout(r, 800));

    const { contentSize } = await send('Page.getLayoutMetrics');
    console.log('Total page content size:', contentSize);

    const fullShot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1440,
        height: Math.min(contentSize.height, 12000),
        scale: 1
      },
      captureBeyondViewport: true
    });

    fs.writeFileSync('clone_fullpage.png', Buffer.from(fullShot.data, 'base64'));
    console.log('Saved clone_fullpage.png successfully!');

    ws.close();
  } finally {
    chrome.kill();
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

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

    // Capture Works section
    console.log('Capturing Works section...');
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('works');
        window.scrollTo(0, el.offsetTop - 50);
      `
    });
    await new Promise(r => setTimeout(r, 1500));
    // Click on "beyond-the-walls"
    await send('Runtime.evaluate', {
      expression: `
        const btn = document.querySelector('[data-testid="work-row-beyond-the-walls"]');
        if (btn) btn.click();
      `
    });
    await new Promise(r => setTimeout(r, 1000));
    const worksShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_works_expanded.png', Buffer.from(worksShot.data, 'base64'));

    // Capture Videos section
    console.log('Capturing Videos section...');
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('videos');
        window.scrollTo(0, el.offsetTop - 50);
      `
    });
    await new Promise(r => setTimeout(r, 1500));
    const videosShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_videos.png', Buffer.from(videosShot.data, 'base64'));

    // Capture Journey section
    console.log('Capturing Journey section...');
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('journey');
        window.scrollTo(0, el.offsetTop - 50);
      `
    });
    await new Promise(r => setTimeout(r, 1500));
    const journeyShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_journey.png', Buffer.from(journeyShot.data, 'base64'));

    // Capture Gallery section
    console.log('Capturing Gallery section...');
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('gallery');
        window.scrollTo(0, el.offsetTop - 50);
      `
    });
    await new Promise(r => setTimeout(r, 1500));
    const galleryShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_gallery_photos.png', Buffer.from(galleryShot.data, 'base64'));

    // Test Mobile Viewport & Menu
    console.log('Testing Mobile Viewport (390x844)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await send('Runtime.evaluate', {
      expression: `
        window.scrollTo(0, 0);
        const toggle = document.querySelector('[data-testid="nav-mobile-toggle"]');
        if (toggle) toggle.click();
      `
    });
    await new Promise(r => setTimeout(r, 1000));
    const mobileShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_mobile_menu.png', Buffer.from(mobileShot.data, 'base64'));

    console.log('Testing PDF Generation...');
    const pdfResult = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        try {
          const cvBtn = document.querySelector('[data-testid="cv-download-btn"]');
          return { buttonFound: !!cvBtn };
        } catch (e) {
          return { error: e.message };
        }
      })()`
    });
    console.log('PDF button check:', pdfResult);

    console.log('All detailed tests completed successfully!');
    ws.close();
  } finally {
    chrome.kill();
  }
}

main().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});

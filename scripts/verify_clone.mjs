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

    console.log('Enabling Page & Runtime...');
    await send('Page.enable');
    await send('Runtime.enable');

    console.log('Navigating to http://127.0.0.1:3000/...');
    await send('Page.navigate', { url: 'http://127.0.0.1:3000/' });

    // Wait 3 seconds for preloader to finish and hero animation to settle
    console.log('Waiting for preloader to complete...');
    await new Promise(r => setTimeout(r, 3200));

    // Capture Hero screenshot
    console.log('Capturing Hero screenshot...');
    const heroShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_hero_clean.png', Buffer.from(heroShot.data, 'base64'));

    // Scroll to About
    console.log('Scrolling to About...');
    await send('Runtime.evaluate', {
      expression: `document.getElementById('about').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 800));
    const aboutShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_about.png', Buffer.from(aboutShot.data, 'base64'));

    // Scroll to Works & click first item
    console.log('Scrolling to Works and expanding first item...');
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('works').scrollIntoView();
        const row = document.querySelector('[data-testid^="work-row-"]');
        if (row) row.click();
      `
    });
    await new Promise(r => setTimeout(r, 800));
    const worksShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_works.png', Buffer.from(worksShot.data, 'base64'));

    // Scroll to Gallery
    console.log('Scrolling to Gallery...');
    await send('Runtime.evaluate', {
      expression: `document.getElementById('gallery').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 800));
    const galleryShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_gallery.png', Buffer.from(galleryShot.data, 'base64'));

    // Scroll to Classes
    console.log('Scrolling to Classes...');
    await send('Runtime.evaluate', {
      expression: `document.getElementById('classes').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 800));
    const classesShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_classes.png', Buffer.from(classesShot.data, 'base64'));

    // Scroll to Contact, fill form and submit
    console.log('Scrolling to Contact, submitting form...');
    const submitResult = await send('Runtime.evaluate', {
      awaitPromise: true,
      returnByValue: true,
      expression: `(async () => {
        document.getElementById('contact').scrollIntoView();
        const nameInput = document.querySelector('[data-testid="contact-input-name"]');
        const contactInput = document.querySelector('[data-testid="contact-input-contact"]');
        const messageInput = document.querySelector('[data-testid="contact-input-message"]');
        const submitBtn = document.querySelector('[data-testid="contact-submit-btn"]');
        
        nameInput.value = 'John Doe';
        nameInput.dispatchEvent(new Event('input', { bubbles: true }));
        contactInput.value = '+91 9876543210';
        contactInput.dispatchEvent(new Event('input', { bubbles: true }));
        messageInput.value = 'Looking for corporate workshop for 25 people.';
        messageInput.dispatchEvent(new Event('input', { bubbles: true }));

        submitBtn.click();
        return { submitted: true };
      })()`
    });
    console.log('Form submission evaluation:', submitResult);
    await new Promise(r => setTimeout(r, 1000));
    const contactShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('clone_contact.png', Buffer.from(contactShot.data, 'base64'));

    console.log('All screenshots captured successfully!');
    ws.close();
  } finally {
    chrome.kill();
  }
}

main().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});

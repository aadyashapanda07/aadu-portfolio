import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, '../public/projects');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureRamayana() {
  console.log('Launching Chrome for Ramayana 3D...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });

  try {
    console.log('Navigating to Ramayana 3D with load...');
    await page.goto('https://ramayana-3d.vercel.app/', { waitUntil: 'load', timeout: 60000 });
    
    // Wait 3 seconds for Three.js scene to render
    console.log('Waiting for initial Three.js render...');
    await new Promise(r => setTimeout(r, 3000));

    // Hide gate, veil, hud to get the pure 3D scene without any overlapping text or veil
    console.log('Dismissing gate/veil and isolating 3D view...');
    await page.evaluate(() => {
      // Click enter button to trigger internal state transitions
      const enterBtn = document.querySelector('.enter');
      if (enterBtn) enterBtn.click();

      // Force remove or hide any overlay elements
      const veil = document.querySelector('.veil');
      if (veil) veil.remove();

      const gate = document.querySelector('.gate');
      if (gate) gate.remove();

      const hud = document.querySelector('.hud');
      if (hud) hud.style.display = 'none';

      const chapters = document.querySelectorAll('.chapter');
      chapters.forEach(c => c.style.display = 'none');

      const hints = document.querySelectorAll('.hint');
      hints.forEach(h => h.style.display = 'none');

      // Scroll slightly to engage the 3D flight path nicely into Chapter 1 landscape
      window.scrollTo(0, 500);
    });

    // Wait 3 seconds for the 3D scene to animate and render frames cleanly
    await new Promise(r => setTimeout(r, 3000));

    const outputPath = path.join(outputDir, 'ramayana-real.png');
    await page.screenshot({ path: outputPath });
    console.log('Ramayana 3D clean screenshot saved to:', outputPath);
  } catch (e) {
    console.error('Error capturing Ramayana 3D:', e);
  } finally {
    await browser.close();
  }
}

captureRamayana();

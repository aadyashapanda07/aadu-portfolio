import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ramayanaDir = 'C:\\Users\\Aadyasha panda\\.gemini\\antigravity\\scratch\\ramayana-3d';
const outputDir = path.resolve(__dirname, '../public/projects');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const server = http.createServer((req, res) => {
  let filePath = path.join(ramayanaDir, req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ramayanaDir, 'index.html');
  }

  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.js') contentType = 'application/javascript';
  if (ext === '.css') contentType = 'text/css';
  if (ext === '.png') contentType = 'image/png';

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(8899, async () => {
  console.log('Local Ramayana 3D server running on port 8899...');

  try {
    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });

    console.log('Opening local Ramayana 3D...');
    await page.goto('http://localhost:8899/', { waitUntil: 'load', timeout: 30000 });

    // Wait 3 seconds for Three.js initialization and CDN fonts/scripts
    await new Promise(r => setTimeout(r, 3000));

    console.log('Entering journey and removing overlays...');
    await page.evaluate(() => {
      // Click enter button
      const enterBtn = document.querySelector('.enter');
      if (enterBtn) enterBtn.click();

      // Completely remove the veil and gate
      const veil = document.querySelector('.veil');
      if (veil) veil.remove();

      const gate = document.querySelector('.gate');
      if (gate) gate.remove();

      // Hide all UI overlays, headers, and chapter text for clean 3D scene
      const hud = document.querySelector('.hud');
      if (hud) hud.style.display = 'none';

      const chapters = document.querySelectorAll('.chapter');
      chapters.forEach(c => c.style.display = 'none');

      const hints = document.querySelectorAll('.hint');
      hints.forEach(h => h.style.display = 'none');

      const brand = document.querySelector('.brand');
      if (brand) brand.style.display = 'none';

      const toolbar = document.querySelector('.toolbar');
      if (toolbar) toolbar.style.display = 'none';

      const dots = document.querySelector('.dots');
      if (dots) dots.style.display = 'none';

      // Scroll slightly to get the rich 3D composition with lighting, ground, and scenery
      window.scrollTo(0, 600);
    });

    // Wait 3 seconds for Three.js render loop to render the scene
    await new Promise(r => setTimeout(r, 3000));

    const outputPath = path.join(outputDir, 'ramayana-real.png');
    await page.screenshot({ path: outputPath });
    console.log('Ramayana 3D screenshot saved successfully to:', outputPath);

    await browser.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    server.close();
    console.log('Server closed.');
  }
});

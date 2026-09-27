import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, '../public/projects');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function capture() {
  console.log('Launching Chrome from:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });

  // 1. Campus2Corporate
  try {
    console.log('Capturing Campus2Corporate...');
    await page.goto('https://campus2corporate-pearl.vercel.app/', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(outputDir, 'campus2corporate-real.png') });
    console.log('Campus2Corporate captured!');
  } catch (e) {
    console.error('Error on Campus2Corporate:', e.message);
  }

  // 2. Nexus AI
  try {
    console.log('Capturing Nexus AI...');
    await page.goto('https://nexus-ai-bice-one.vercel.app/', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(outputDir, 'nexus-real.png') });
    console.log('Nexus AI captured!');
  } catch (e) {
    console.error('Error on Nexus AI:', e.message);
  }

  // 3. FinAI Platform
  try {
    console.log('Capturing FinAI Platform...');
    await page.goto('https://finai-platform-kappa.vercel.app/', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(outputDir, 'finai-real.png') });
    console.log('FinAI captured!');
  } catch (e) {
    console.error('Error on FinAI:', e.message);
  }

  // 4. Currency Converter
  try {
    console.log('Capturing Currency Converter...');
    await page.goto('https://currency-converter-five-eta.vercel.app/', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(outputDir, 'currency-real.png') });
    console.log('Currency Converter captured!');
  } catch (e) {
    console.error('Error on Currency Converter:', e.message);
  }

  // 5. Ramayana 3D (scene after Om, no overlap)
  try {
    console.log('Capturing Ramayana 3D...');
    await page.goto('https://ramayana-3d.vercel.app/', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for initial load and Three.js initialization
    await new Promise(r => setTimeout(r, 2000));

    // Hide the veil, gate, and HUD so the 3D scene is completely clear without text overlap
    await page.evaluate(() => {
      // Click enter button if present
      const enterBtn = document.querySelector('.enter');
      if (enterBtn) enterBtn.click();

      // Ensure veil is hidden
      const veil = document.querySelector('.veil');
      if (veil) veil.style.display = 'none';

      // Ensure gate is hidden
      const gate = document.querySelector('.gate');
      if (gate) gate.style.display = 'none';

      // Hide HUD text elements that overlap
      const hud = document.querySelector('.hud');
      if (hud) hud.style.opacity = '0';

      const chapters = document.querySelectorAll('.chapter');
      chapters.forEach(c => c.style.opacity = '0');

      // Scroll slightly to engage the camera on the journey
      window.scrollTo(0, 400);
    });

    // Wait for render loop to paint the 3D scene
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join(outputDir, 'ramayana-real.png') });
    console.log('Ramayana 3D captured!');
  } catch (e) {
    console.error('Error on Ramayana 3D:', e.message);
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture();

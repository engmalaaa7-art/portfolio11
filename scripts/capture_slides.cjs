const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.join(__dirname, '..', 'exports');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function capturePortfolio(lang = 'ar', format = 'landscape') {
  const isLandscape = format === 'landscape';
  const width = isLandscape ? 1920 : 1080;
  const height = isLandscape ? 1080 : 1350; // 4:5 portrait for social media
  const subfolder = `${lang}_${format}`;
  const outDir = path.join(OUTPUT_DIR, subfolder);
  await ensureDir(outDir);

  console.log(`\n========================================`);
  console.log(`Starting capture for lang=${lang}, format=${format} (${width}x${height})...`);
  console.log(`========================================`);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    defaultViewport: {
      width,
      height,
      deviceScaleFactor: 2, // 2x Retina quality for ultra-sharp text and graphics
    },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--font-render-hinting=none',
    ],
  });

  const page = await browser.newPage();

  // Go to page
  const url = `http://localhost:5173/${lang === 'ar' ? 'ar' : ''}`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Dismiss intro overlay
  try {
    const skipBtn = await page.$('#cinematic-intro-skip');
    if (skipBtn) {
      await skipBtn.click();
    } else {
      await page.keyboard.press('Escape');
    }
  } catch (e) {}

  // Wait for fonts and layout to settle
  await new Promise(r => setTimeout(r, 1500));

  // 1. Slide 01: Hero Mask (Cover)
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(outDir, '01_hero_mask_cover.png'),
    clip: { x: 0, y: 0, width, height },
  });
  console.log('✓ Slide 01: Hero Mask Cover captured');

  // 2. Slide 02: Hero Unmasked (Scroll midway through hero stage)
  const heroHeight = await page.evaluate(() => {
    const el = document.getElementById('hero-stage');
    return el ? el.parentElement.offsetHeight : window.innerHeight * 2.8;
  });
  await page.evaluate((hh) => window.scrollTo(0, hh * 0.75), heroHeight);
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({
    path: path.join(outDir, '02_hero_unmasked.png'),
    clip: { x: 0, y: 0, width, height },
  });
  console.log('✓ Slide 02: Hero Unmasked Reveal captured');

  // Helper to scroll to element and capture viewport
  async function captureElement(selector, filename, padTop = 0, extraScroll = 0) {
    const found = await page.evaluate((sel, pt, es) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - pt + es;
      window.scrollTo({ top: targetY, behavior: 'instant' });
      return { width: el.offsetWidth, height: el.offsetHeight };
    }, selector, padTop, extraScroll);

    if (found) {
      await new Promise(r => setTimeout(r, 1100));
      await page.screenshot({
        path: path.join(outDir, filename),
        clip: { x: 0, y: 0, width, height },
      });
      console.log(`✓ ${filename} captured`);
    } else {
      console.log(`⚠ Warning: ${selector} not found`);
    }
  }

  // 3. Slide 03: About Me (World 02)
  await captureElement('#unmasked-intro', '03_about_me.png', 30);

  // 4. Slide 04: OSS Flagship Product (World 03)
  await captureElement('#oss-product', '04_flagship_product_oss.png', 40);

  // 5. Slide 05: Experience Journey (World 04)
  await captureElement('#experience', '05_experience_journey.png', 30);

  // 6. Slide 06: Skills & Disciplines (World 05 Top)
  await captureElement('#capabilities', '06_skills_and_disciplines.png', 0, 100);

  // 7. Slide 07: Scale & By The Numbers (World 05 Bottom)
  const capHeight = await page.evaluate(() => {
    const el = document.getElementById('capabilities');
    return el ? el.offsetHeight : 0;
  });
  if (capHeight > 0) {
    await captureElement('#capabilities', '07_by_the_numbers_scale.png', 0, capHeight * 0.88);
  }

  // 8. Slide 08: Impact Moment (World 06)
  await captureElement('#impact-moment', '08_impact_moment.png', 20);

  // 9. Slide 09: Approach & Academic Foundation (World 07)
  await captureElement('#origin-education', '09_approach_and_education.png', 30);

  // 10. Slide 10: Final Contact Scene & Closing (World 08)
  await captureElement('#contact-final', '10_contact_closing.png', 30);

  await browser.close();
  console.log(`✓ Successfully completed capture for ${lang}_${format}!\n`);
}

async function main() {
  await ensureDir(OUTPUT_DIR);
  
  // 1. Capture 16:9 Presentation Slides (AR and EN)
  await capturePortfolio('ar', 'landscape');
  await capturePortfolio('en', 'landscape');

  // 2. Capture 4:5 Social Media Carousel Slides (AR and EN)
  await capturePortfolio('ar', 'portrait');
  await capturePortfolio('en', 'portrait');
}

main().catch(console.error);

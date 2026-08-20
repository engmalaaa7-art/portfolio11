const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const EXPORTS_DIR = path.join(__dirname, '..', 'exports');
const PDF_DIR = path.join(EXPORTS_DIR, 'pdf');

if (!fs.existsSync(PDF_DIR)) {
  fs.mkdirSync(PDF_DIR, { recursive: true });
}

async function buildPdfFromFolder(folderName, outputPdfName) {
  const folderPath = path.join(EXPORTS_DIR, folderName);
  if (!fs.existsSync(folderPath)) {
    console.log(`Folder not found: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath)
    .filter(f => f.endsWith('.png'))
    .sort();

  if (files.length === 0) {
    console.log(`No PNG files in ${folderPath}`);
    return;
  }

  console.log(`Creating PDF from ${folderName} (${files.length} slides)...`);

  const pdfDoc = await PDFDocument.create();

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const imgBytes = fs.readFileSync(filePath);
    const pngImage = await pdfDoc.embedPng(imgBytes);

    const { width, height } = pngImage;
    // Scale down Retina 2x to standard 72 DPI points for PDF
    const page = pdfDoc.addPage([width / 2, height / 2]);
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: width / 2,
      height: height / 2,
    });
  }

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(PDF_DIR, outputPdfName);
  fs.writeFileSync(outputPath, pdfBytes);

  const sizeMb = (pdfBytes.length / (1024 * 1024)).toFixed(2);
  console.log(`✓ Generated: ${outputPdfName} (${files.length} slides, ${sizeMb} MB)`);
}

async function main() {
  console.log('\n========================================');
  console.log('Building High-Resolution PDF Presentations & Social Carousels');
  console.log('========================================\n');

  // 1. Arabic Presentation PDF (16:9 Landscape)
  await buildPdfFromFolder('ar_landscape', 'Ahmed_Al_Malah_Portfolio_AR_16x9.pdf');

  // 2. English Presentation PDF (16:9 Landscape)
  await buildPdfFromFolder('en_landscape', 'Ahmed_Al_Malah_Portfolio_EN_16x9.pdf');

  // 3. Arabic Social Carousel PDF (4:5 Portrait for LinkedIn/Instagram)
  await buildPdfFromFolder('ar_portrait', 'Ahmed_Al_Malah_Social_Carousel_AR_4x5.pdf');

  // 4. English Social Carousel PDF (4:5 Portrait for LinkedIn/Instagram)
  await buildPdfFromFolder('en_portrait', 'Ahmed_Al_Malah_Social_Carousel_EN_4x5.pdf');

  console.log('\n🎉 All PDF documents created successfully in exports/pdf/');
}

main().catch(console.error);

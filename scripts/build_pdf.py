import os
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXPORTS_DIR = os.path.join(BASE_DIR, "exports")
PDF_DIR = os.path.join(EXPORTS_DIR, "pdf")

os.makedirs(PDF_DIR, exist_ok=True)

def create_pdf_from_folder(folder_name, output_pdf_name):
    folder_path = os.path.join(EXPORTS_DIR, folder_name)
    if not os.path.exists(folder_path):
        print(f"Folder not found: {folder_path}")
        return

    # Get sorted png files
    files = sorted([f for f in os.listdir(folder_path) if f.endswith(".png")])
    if not files:
        print(f"No PNG files found in: {folder_path}")
        return

    images = []
    for f in files:
        img_path = os.path.join(folder_path, f)
        img = Image.open(img_path)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        images.append(img)

    output_path = os.path.join(PDF_DIR, output_pdf_name)
    if images:
        images[0].save(
            output_path,
            save_all=True,
            append_images=images[1:],
            quality=95,
            resolution=150.0
        )
        print(f"✓ Successfully generated PDF: {output_path} ({len(images)} slides)")

def main():
    # 1. Arabic Presentation PDF (16:9 Landscape)
    create_pdf_from_folder("ar_landscape", "Ahmed_Al_Malah_Portfolio_AR_16x9.pdf")
    
    # 2. English Presentation PDF (16:9 Landscape)
    create_pdf_from_folder("en_landscape", "Ahmed_Al_Malah_Portfolio_EN_16x9.pdf")

    # 3. Arabic Social Carousel PDF (4:5 Portrait for LinkedIn/Instagram)
    create_pdf_from_folder("ar_portrait", "Ahmed_Al_Malah_Social_Carousel_AR_4x5.pdf")

    # 4. English Social Carousel PDF (4:5 Portrait for LinkedIn/Instagram)
    create_pdf_from_folder("en_portrait", "Ahmed_Al_Malah_Social_Carousel_EN_4x5.pdf")

if __name__ == "__main__":
    main()

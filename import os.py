import os 
from PIL import Image

folder_path = "C:\Users\Daniel\Desktop\New folder (2)"

for filename in os.listdir(folder_path):
    if filename.endswith(".jfif"):
        img_path = os.path.join(folder_path, filename)
        with Image.open(img_path) as img:
            img = img.convert

            new_filename = os.path.splitext(filename)[0] + ".jpg"
            new_path = os.path.join(folder_path, new_filename)
            
            img.save(new_path, "JPEG")

        
        print(f"Successfully converted {filename} to {new_filename}")

    
# import the Python Image processing Library

from PIL import Image
import sys
 


# Create an Image object from an Image

imageObject  = Image.open("./img.jpeg")

 

# Crop the iceberg portion

cropped1     = imageObject.crop((round(int(float(sys.argv[1]))),round(int(float(sys.argv[2]))),round(int(float(sys.argv[3]))),round(int(float(sys.argv[4])))))
cropped2     = imageObject.crop((round(int(float(sys.argv[5]))),round(int(float(sys.argv[6]))),round(int(float(sys.argv[7]))),round(int(float(sys.argv[8])))))
 

# Display the cropped portion

cropped1.save("./1.jpeg", "jpeg")
cropped2.save("./2.jpeg", "jpeg")
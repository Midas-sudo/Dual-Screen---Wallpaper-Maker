# import the Python Image processing Library

from PIL import Image

 

# Create an Image object from an Image

imageObject  = Image.open("./img.jpeg")

 

# Crop the iceberg portion

cropped     = imageObject.crop((0,0,3839,2160))

 

# Display the cropped portion

cropped.show()
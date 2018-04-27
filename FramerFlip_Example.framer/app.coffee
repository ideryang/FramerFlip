FramerFlip = require 'FramerFlip'

# Set the screen background colour
Screen.backgroundColor = "#EBEBEB"

# Add frontLayer
frontLayer=new Layer
	borderRadius: 20
	width: 340
	height: 214
	backgroundColor: "#4CD964"

# Add backLayer
backLayer=new Layer
	width: 340
	height: 214
	borderRadius: 20
	backgroundColor: "#006DE2"

FramerFlip.FramerFlip(frontLayer, backLayer, "Spring(damping: 0.6)")



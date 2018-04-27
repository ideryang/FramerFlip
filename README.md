# FramerFlip Module
[![license](https://img.shields.io/github/license/bpxl-labs/RemoteLayer.svg)](https://opensource.org/licenses/MIT)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)

A module to create card flip effect in Framer
![FramerFlip gif](/FramerFlip.gif?raw=true)

### Installation
<a href='https://open.framermodules.com/Symbols'>
    <img alt='Install with Framer Modules'
    src='https://www.framermodules.com/assets/badge@2x.png' width='160' height='40' />
</a>

### Manual

1. Copy `FramerFlip.coffee` file on modules folder inside your Framer project
2. Add this line on the top 
```coffeescript
FramerFlip = require 'FramerFlip'
```
3. Add a `frontLayer` + `backLayer`  + `animation curve`

```javascript
FramerFlip.flipEffect(frontLayer, backLayer, "Spring(damping: 0.9)")
```

### Customization
* `frontLayer` : The front image layer
* `backLayer` : The back image layer
* `Animation curve` : The curve for animation


### Sample project
```coffeescript
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

FramerFlip.FramerFlip(frontLayer, backLayer, "Spring(damping: 0.9)")

```

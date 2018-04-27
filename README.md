# FramerFlip Module
[![license](https://img.shields.io/github/license/bpxl-labs/RemoteLayer.svg)](https://opensource.org/licenses/MIT)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)

A module to create card flip effect in Framer


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
3. Add a `front image` + `back image` + `the perspective` + `animation curve`

```javascript
FramerFlip.flipEffect(frontLayer, backLayer, 1600, "spring(300,20,0)")
```

### Customization
* `Front image` _image_ : The front image layer
* `Back image` _image_ : The back image layer
* `Perspective` _Integer_ : The smaller the number is, the more perspective you will get
* `Animation curve` _String_ : The curve for animation


### Sample project

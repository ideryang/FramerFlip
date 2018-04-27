exports.FramerFlip = (front, back, flipCurve) ->

  # Create a new container layer
  container = new Layer
    width: front.width
    height: front.height
    backgroundColor: "transparent"
    clip: true

  # Center the container
  container.center()

  # Set superLayer for both front and back layers
  back.superLayer = container
  front.superLayer = container

  # Rotate the back image on intial
  back.rotationY = 180

  # Add States
  front.states.add
    front: {opacity: 1}
    back: {opacity: 0}
  front.states.animationOptions =
    curve: flipCurve
  front.states.switchInstant("front")

  back.states.add
    front: {opacity: 0}
    back: {opacity: 1}
  back.states.animationOptions =
    curve: flipCurve

  container.states.add
    front: {rotationY: 0}
    back: {rotationY: 180}
  container.states.animationOptions =
    curve: flipCurve
  container.states.switchInstant("front")
  container.on Events.Click, ->
    this.states.next(["back","front"])
    front.states.next(["back","front"])

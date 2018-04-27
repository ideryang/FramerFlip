require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"FramerFlip":[function(require,module,exports){
exports.FramerFlip = function(front, back, flipCurve) {
  var container;
  container = new Layer({
    width: front.width,
    height: front.height,
    backgroundColor: "transparent",
    clip: true
  });
  container.center();
  back.superLayer = container;
  front.superLayer = container;
  back.rotationY = 180;
  front.states.add({
    front: {
      opacity: 1
    },
    back: {
      opacity: 0
    }
  });
  front.states.animationOptions = {
    curve: flipCurve
  };
  front.states.switchInstant("front");
  back.states.add({
    front: {
      opacity: 0
    },
    back: {
      opacity: 1
    }
  });
  back.states.animationOptions = {
    curve: flipCurve
  };
  container.states.add({
    front: {
      rotationY: 0
    },
    back: {
      rotationY: 180
    }
  });
  container.states.animationOptions = {
    curve: flipCurve
  };
  container.states.switchInstant("front");
  return container.on(Events.Click, function() {
    this.states.next(["back", "front"]);
    return front.states.next(["back", "front"]);
  });
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvRnJhbWVyRmxpcC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuRnJhbWVyRmxpcCA9IChmcm9udCwgYmFjaywgZmxpcEN1cnZlKSAtPlxuXG4gICMgQ3JlYXRlIGEgbmV3IGNvbnRhaW5lciBsYXllclxuICBjb250YWluZXIgPSBuZXcgTGF5ZXJcbiAgICB3aWR0aDogZnJvbnQud2lkdGhcbiAgICBoZWlnaHQ6IGZyb250LmhlaWdodFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgY2xpcDogdHJ1ZVxuXG4gICMgQ2VudGVyIHRoZSBjb250YWluZXJcbiAgY29udGFpbmVyLmNlbnRlcigpXG5cbiAgIyBTZXQgc3VwZXJMYXllciBmb3IgYm90aCBmcm9udCBhbmQgYmFjayBsYXllcnNcbiAgYmFjay5zdXBlckxheWVyID0gY29udGFpbmVyXG4gIGZyb250LnN1cGVyTGF5ZXIgPSBjb250YWluZXJcblxuICAjIFJvdGF0ZSB0aGUgYmFjayBpbWFnZSBvbiBpbnRpYWxcbiAgYmFjay5yb3RhdGlvblkgPSAxODBcblxuICAjIEFkZCBTdGF0ZXNcbiAgZnJvbnQuc3RhdGVzLmFkZFxuICAgIGZyb250OiB7b3BhY2l0eTogMX1cbiAgICBiYWNrOiB7b3BhY2l0eTogMH1cbiAgZnJvbnQuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICAgIGN1cnZlOiBmbGlwQ3VydmVcbiAgZnJvbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJmcm9udFwiKVxuXG4gIGJhY2suc3RhdGVzLmFkZFxuICAgIGZyb250OiB7b3BhY2l0eTogMH1cbiAgICBiYWNrOiB7b3BhY2l0eTogMX1cbiAgYmFjay5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG4gICAgY3VydmU6IGZsaXBDdXJ2ZVxuXG4gIGNvbnRhaW5lci5zdGF0ZXMuYWRkXG4gICAgZnJvbnQ6IHtyb3RhdGlvblk6IDB9XG4gICAgYmFjazoge3JvdGF0aW9uWTogMTgwfVxuICBjb250YWluZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICAgIGN1cnZlOiBmbGlwQ3VydmVcbiAgY29udGFpbmVyLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwiZnJvbnRcIilcbiAgY29udGFpbmVyLm9uIEV2ZW50cy5DbGljaywgLT5cbiAgICB0aGlzLnN0YXRlcy5uZXh0KFtcImJhY2tcIixcImZyb250XCJdKVxuICAgIGZyb250LnN0YXRlcy5uZXh0KFtcImJhY2tcIixcImZyb250XCJdKVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7QURBQSxPQUFPLENBQUMsVUFBUixHQUFxQixTQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsU0FBZDtBQUduQixNQUFBO0VBQUEsU0FBQSxHQUFnQixJQUFBLEtBQUEsQ0FDZDtJQUFBLEtBQUEsRUFBTyxLQUFLLENBQUMsS0FBYjtJQUNBLE1BQUEsRUFBUSxLQUFLLENBQUMsTUFEZDtJQUVBLGVBQUEsRUFBaUIsYUFGakI7SUFHQSxJQUFBLEVBQU0sSUFITjtHQURjO0VBT2hCLFNBQVMsQ0FBQyxNQUFWLENBQUE7RUFHQSxJQUFJLENBQUMsVUFBTCxHQUFrQjtFQUNsQixLQUFLLENBQUMsVUFBTixHQUFtQjtFQUduQixJQUFJLENBQUMsU0FBTCxHQUFpQjtFQUdqQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQWIsQ0FDRTtJQUFBLEtBQUEsRUFBTztNQUFDLE9BQUEsRUFBUyxDQUFWO0tBQVA7SUFDQSxJQUFBLEVBQU07TUFBQyxPQUFBLEVBQVMsQ0FBVjtLQUROO0dBREY7RUFHQSxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFiLEdBQ0U7SUFBQSxLQUFBLEVBQU8sU0FBUDs7RUFDRixLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWIsQ0FBMkIsT0FBM0I7RUFFQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FDRTtJQUFBLEtBQUEsRUFBTztNQUFDLE9BQUEsRUFBUyxDQUFWO0tBQVA7SUFDQSxJQUFBLEVBQU07TUFBQyxPQUFBLEVBQVMsQ0FBVjtLQUROO0dBREY7RUFHQSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFaLEdBQ0U7SUFBQSxLQUFBLEVBQU8sU0FBUDs7RUFFRixTQUFTLENBQUMsTUFBTSxDQUFDLEdBQWpCLENBQ0U7SUFBQSxLQUFBLEVBQU87TUFBQyxTQUFBLEVBQVcsQ0FBWjtLQUFQO0lBQ0EsSUFBQSxFQUFNO01BQUMsU0FBQSxFQUFXLEdBQVo7S0FETjtHQURGO0VBR0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBakIsR0FDRTtJQUFBLEtBQUEsRUFBTyxTQUFQOztFQUNGLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBakIsQ0FBK0IsT0FBL0I7U0FDQSxTQUFTLENBQUMsRUFBVixDQUFhLE1BQU0sQ0FBQyxLQUFwQixFQUEyQixTQUFBO0lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBWixDQUFpQixDQUFDLE1BQUQsRUFBUSxPQUFSLENBQWpCO1dBQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFiLENBQWtCLENBQUMsTUFBRCxFQUFRLE9BQVIsQ0FBbEI7RUFGeUIsQ0FBM0I7QUF2Q21CIn0=

// loading images and sounds

corsProxy = "https://cors-anywhere.herokuapp.com/"

function loadsound(url) {
  return loadSound(corsProxy + url)
}

function loadimage(url) {
  return loadImage(corsProxy + url)
}


// easier syntax for some p5 functions

function circle(x, y, d) {
  ellipse(x, y, d, d)
}

function square(x, y, a) {
  rect(x, y, a, a)
}

function createGroup() {
  return new Group()
}

function playSound(sound) {
  if (!sound.isPlaying()) {
    sound.play()
  }
}

function stopSound(sound) {
  sound.stop()
}


// general helper functions

function roundTo(num, to) {
    return to * round(num / to)
}

function shift(group) {
    if (group.length < 1) {
        return
    }
    last = group[group.length - 1]
    for (i = group.length - 1; i > 0; i -= 1) {
        group[i] = group[i - 1]
    }
    group[0] = last
}

function repulsionPoint(sprite, magnitude, pointX, pointY) {
    var angle = atan2(pointY - sprite.position.y, pointX - sprite.position.x)
    sprite.velocity.x -= cos(angle) * magnitude
    sprite.velocity.y -= sin(angle) * magnitude
}


// helpers for cyclic movements

function pulse(from, to, speed) {
  if (typeof speed === "undefined") {
    speed = 1
  }
  var middle = (from + to) / 2
  var amplitude = Math.abs(from - to) / 2
  var direction = to > from ? 1 : -1
  return middle + direction * amplitude * sin(frameCount / 50 * speed)
}

function oneway(from, to, speed) {
  if (typeof speed === "undefined") {
    speed = 1
  }
  var distance = Math.abs(from - to)
  var direction = to > from ? 1 : -1
  return from + direction * (frameCount * speed) % distance
}

function twoway(from, to, speed) {
  if (typeof speed === "undefined") {
    speed = 1
  }
  var distance = Math.abs(from - to)
  var full = (frameCount * speed) % (distance * 2)
  if (full > distance) {
    full = 2 * distance - full
  }
  var direction = to > from ? 1 : -1
  return from + direction * full
}


// make sure p5's `print` is not overwritten by the browser

print = console.log

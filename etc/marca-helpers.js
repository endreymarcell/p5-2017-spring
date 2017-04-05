(function(){
  var corsProxy = 'https://cors-anywhere.herokuapp.com/'; // 'https://crossorigin.me/' seems to be down

  window.playSound = function(sound) {
    if (!sound.isPlaying()) {
      sound.play();
    }
  }

  window.stopSound = function(sound) {
    sound.stop();
  }

  window.loadsound = function(url) {
    return loadSound(corsProxy + url);
  }

  window.loadimage = function(url) {
    return loadImage(corsProxy + url);
  }

  window.print = console.log;

  window.circle = function(x, y, d) {
    ellipse(x, y, d, d);
  }

  window.square = function(x, y, a) {
    rect(x, y, a, a);
  }

  window.pulse = function(from, to, speed) {
    if (typeof speed === 'undefined') {
      speed = 1
    }
    var middle = (from + to) / 2
    var amplitude = Math.abs(from - to) / 2
    var direction = to > from ? 1 : -1
    return middle + direction * amplitude * sin(frameCount / 50 * speed)
  }

  window.oneway = function(from, to, speed) {
    if (typeof speed === 'undefined') {
      speed = 1
    }
    var distance = Math.abs(from - to)
    var direction = to > from ? 1 : -1
    return from + direction * (frameCount * speed) % distance
  }

  window.twoway = function(from, to, speed) {
    if (typeof speed === 'undefined') {
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

  window.createGroup = function() {
    return new Group();
  }
})();

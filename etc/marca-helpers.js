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
})();
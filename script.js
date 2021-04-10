window.addEventListener("keydown", playSound);

function playSound(e) {
  //console.log("Hello, World!");
  //console.log(e)
  //console.log(e.keyCode)
  console.log(`audio[data-key="${e.keyCode}"}`)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio)
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  console.log(`.key[data-key="${e.keyCode}"]`)
  console.log(key.classList);
  key.classList.add("glow");
  console.log(key.classList);
  const keys = document.querySelectorAll(".key");
  console.log(keys);
  keys.forEach(key => key.addEventListener("transitionend", removeGlow));
}

function removeGlow(e) {
  if (e.propertyName == "transform") {
    console.log(e);
    console.log(this);
    this.classList.remove("glow");
  } 
}
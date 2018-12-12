keys.addEventListener("click", event => {
playSound(event);
});

function playSound(event){
  const key = event.target.value;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  console.log(audio);
  audio.play();
}

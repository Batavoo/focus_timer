export default function Controls({
  playButtom,
  pauseButtom,
  stopButtom,
  addTimeButtom,
  subTimeButton,
}) {
  function play_pause() {
    playButtom.classList.toggle("hide");
    pauseButtom.classList.toggle("hide");
    stopButtom.disabled = false;
    addTimeButtom.disabled = true;
    subTimeButton.disabled = true;
    return;
  }

  function reset() {
    playButtom.classList.remove("hide");
    pauseButtom.classList.add("hide");
    stopButtom.disabled = true;
    addTimeButtom.disabled = false;
    subTimeButton.disabled = false;
    return;
  }

  return {
    play_pause,
    reset,
  };
}

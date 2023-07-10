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
    return;
  }

  function reset() {
    playButtom.classList.remove("hide");
    pauseButtom.classList.add("hide");
    stopButtom.disabled = true;
    return;
  }

  return {
    play_pause,
    reset,
  };
}

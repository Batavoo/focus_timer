export default function Controls({
  playButtom,
  pauseButtom,
  stopButtom,
  addTimeButtom,
  subTimeButton,
  lightButton,
  darkButton,
}) {
  function play_pause() {
    playButtom.classList.toggle("hide");
    pauseButtom.classList.toggle("hide");
    stopButtom.disabled = false;
    addTimeButtom.disabled = true;
    subTimeButton.disabled = true;
    return;
  }

  function light_dark() {
    lightButton.classList.toggle("hide");
    darkButton.classList.toggle("hide");
    document.body.classList.toggle("dark");
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
    light_dark,
  };
}

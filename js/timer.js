export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);
  let timeSet = 25;

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);

      if (minutes <= 0 && seconds <= 0) {
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateTimerDisplay(minutes, String(seconds - 1));
      countdown();
    }, 1000);
  }

  function reset() {
    updateTimerDisplay(timeSet, 0);
    clearTimeout(timerTimeOut);
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function addTime() {
    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) + 5
    ).padStart(2, "0");
    timeSet += 5;
  }

  function subTime() {
    if (!(Number(minutesDisplay.textContent) - 5 < 0)) {
      minutesDisplay.textContent = String(
        Number(minutesDisplay.textContent) - 5
      ).padStart(2, "0");
      timeSet -= 5;
    } else {
      timeSet = 0;
    }
  }

  return {
    countdown,
    updateTimerDisplay,
    addTime,
    subTime,
    hold,
    reset,
  };
}

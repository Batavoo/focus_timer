export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut;

  function countdown() {
    console.log("entrei");
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
    }, 100);
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
    countdown,
    updateTimerDisplay,
    hold,
  };
}

import Sounds from "./sounds.js";

import soundEvents from "./sound-events.js";

import Controls from "./controls.js";

import Timer from "./timer.js";

import {
  minutesDisplay,
  secondsDisplay,
  playButtom,
  pauseButtom,
  stopButtom,
  addTimeButtom,
  subTimeButton,
  forestButtom,
  rainButtom,
  coffeeShopButtom,
  fireplaceButtom,
  forestSlider,
  rainSlider,
  coffeeSlider,
  fireplaceSlider,
  lightButton,
  darkButton,
} from "./elements.js";

// Objetos factory

const sounds = Sounds();

const controls = Controls({
  playButtom,
  pauseButtom,
  stopButtom,
  addTimeButtom,
  subTimeButton,
  lightButton,
  darkButton,
});

const events = soundEvents({ sounds });

const timer = Timer({ minutesDisplay, secondsDisplay });

forestButtom.addEventListener("click", ({ target }) => {
  if (target === forestSlider) {
    events.setVolume("forestSound", target.value / 100);
  } else {
    events.songButtonEvent("forestSound", forestButtom);
    forestButtom.classList.toggle("selected");
    events.unselectAndRemoveOthers("forestSound", forestButtom);
  }
});

rainButtom.addEventListener("click", ({ target }) => {
  if (target === rainSlider) {
    events.setVolume("rainSound", target.value / 100);
  } else {
    events.songButtonEvent("rainSound", rainButtom);
    rainButtom.classList.toggle("selected");
    events.unselectAndRemoveOthers("rainSound", rainButtom);
  }
});

coffeeShopButtom.addEventListener("click", ({ target }) => {
  if (target === coffeeSlider) {
    events.setVolume("coffeeShopSound", target.value / 100);
  } else {
    events.songButtonEvent("coffeeShopSound", coffeeShopButtom);
    coffeeShopButtom.classList.toggle("selected");
    events.unselectAndRemoveOthers("coffeeShopSound", coffeeShopButtom);
  }
});

fireplaceButtom.addEventListener("click", ({ target }) => {
  if (target === fireplaceSlider) {
    events.setVolume("fireplaceSound", target.value / 100);
  } else {
    events.songButtonEvent("fireplaceSound", fireplaceButtom);
    fireplaceButtom.classList.toggle("selected");
    events.unselectAndRemoveOthers("fireplaceSound", fireplaceButtom);
  }
});

playButtom.addEventListener("click", () => {
  controls.play_pause();
  timer.countdown();
});

pauseButtom.addEventListener("click", () => {
  controls.play_pause();
  timer.hold();
});

stopButtom.addEventListener("click", () => {
  controls.reset();
  timer.reset();
});

addTimeButtom.addEventListener("click", () => {
  timer.addTime();
});

subTimeButton.addEventListener("click", () => {
  timer.subTime();
});

darkButton.addEventListener("click", () => {
  controls.light_dark();
});

lightButton.addEventListener("click", () => {
  controls.light_dark();
});

import Sounds from "./sounds.js";

import soundEvents from "./sound-events.js";

import Controls from "./controls.js";

import Timer from "./timer.js";

import {
  minutesDisplay,
  secondsDisplay,
  playButtom,
  stopButtom,
  addTimeButtom,
  subTimeButton,
  forestButtom,
  rainButtom,
  coffeeShopButtom,
  fireplaceButtom,
  pauseButtom,
} from "./elements.js";

// Objetos factory

const sounds = Sounds();

const controls = Controls({
  playButtom,
  pauseButtom,
  stopButtom,
  addTimeButtom,
  subTimeButton,
});

const events = soundEvents({ sounds });

const timer = Timer({ minutesDisplay, secondsDisplay });

forestButtom.addEventListener("click", () => {
  events.songButtonEvent("forestSound", forestButtom);
  forestButtom.classList.toggle("selected");
  events.unselectAndRemoveOthers("forestSound", forestButtom);
});

rainButtom.addEventListener("click", () => {
  events.songButtonEvent("rainSound", rainButtom);
  rainButtom.classList.toggle("selected");
  events.unselectAndRemoveOthers("rainSound", rainButtom);
});

coffeeShopButtom.addEventListener("click", () => {
  events.songButtonEvent("coffeeShopSound", coffeeShopButtom);
  coffeeShopButtom.classList.toggle("selected");
  events.unselectAndRemoveOthers("coffeeShopSound", coffeeShopButtom);
});

fireplaceButtom.addEventListener("click", () => {
  events.songButtonEvent("fireplaceSound", fireplaceButtom);
  fireplaceButtom.classList.toggle("selected");
  events.unselectAndRemoveOthers("fireplaceSound", fireplaceButtom);
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

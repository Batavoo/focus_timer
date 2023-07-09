import Sounds from "./sounds.js";

import soundEvents from "./sound-events.js";

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
} from "./elements.js";

// Objetos factory

const sounds = Sounds();

const events = soundEvents({ sounds });

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

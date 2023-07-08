import Sounds from "./sounds.js";

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const playButtom = document.querySelector(".play");
const stopButtom = document.querySelector(".stop");
const addTimeButtom = document.querySelector(".add-time");
const subTimeButton = document.querySelector(".sub-time");

const forestButtom = document.querySelector("#forest");
const rainButtom = document.querySelector("#rain");
const coffeeShopButtom = document.querySelector("#coffee-shop");
const fireplaceButtom = document.querySelector("#fireplace");

// Objetos factory

const sounds = Sounds();

// sound Buttons

forestButtom.addEventListener("click", () => {
  sounds.forestSound.currentTime = 0;
  if (forestButtom.classList.contains("selected")) {
    sounds.forestSound.pause();
  } else {
    sounds.forestSound.play();
  }

  forestButtom.classList.toggle("selected");
  rainButtom.classList.remove("selected");
  coffeeShopButtom.classList.remove("selected");
  fireplaceButtom.classList.remove("selected");

  sounds.coffeeShopSound.pause();
  sounds.fireplaceSound.pause();
  sounds.rainSound.pause();
});

rainButtom.addEventListener("click", () => {
  sounds.rainSound.currentTime = 0;
  if (rainButtom.classList.contains("selected")) {
    sounds.rainSound.pause();
  } else {
    sounds.rainSound.play();
  }

  rainButtom.classList.toggle("selected");
  forestButtom.classList.remove("selected");
  coffeeShopButtom.classList.remove("selected");
  fireplaceButtom.classList.remove("selected");

  sounds.coffeeShopSound.pause();
  sounds.fireplaceSound.pause();
  sounds.forestSound.pause();
});

coffeeShopButtom.addEventListener("click", () => {
  sounds.coffeeShopSound.currentTime = 0;
  if (coffeeShopButtom.classList.contains("selected")) {
    sounds.coffeeShopSound.pause();
  } else {
    sounds.coffeeShopSound.play();
  }

  coffeeShopButtom.classList.toggle("selected");
  rainButtom.classList.remove("selected");
  forestButtom.classList.remove("selected");
  fireplaceButtom.classList.remove("selected");

  sounds.fireplaceSound.pause();
  sounds.forestSound.pause();
  sounds.rainSound.pause();
});

fireplaceButtom.addEventListener("click", () => {
  sounds.fireplaceSound.currentTime = 0;
  if (fireplaceButtom.classList.contains("selected")) {
    sounds.fireplaceSound.pause();
  } else {
    sounds.fireplaceSound.play();
  }
  fireplaceButtom.classList.toggle("selected");
  forestButtom.classList.remove("selected");
  rainButtom.classList.remove("selected");
  coffeeShopButtom.classList.remove("selected");

  sounds.coffeeShopSound.pause();
  sounds.forestSound.pause();
  sounds.rainSound.pause();
});

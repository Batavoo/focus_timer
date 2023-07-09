import {
  forestButtom,
  rainButtom,
  coffeeShopButtom,
  fireplaceButtom,
} from "./elements.js";

const buttons = [forestButtom, rainButtom, coffeeShopButtom, fireplaceButtom];

export default function soundEvents({ sounds }) {
  function songButtonEvent(soundName, button) {
    const currentAudio = sounds[soundName];
    currentAudio.currentTime = 0;
    if (button.classList.contains("selected")) {
      currentAudio.pause();
    } else {
      currentAudio.play();
    }
  }

  function unselectAndRemoveOthers(soundName, button) {
    buttons.forEach((element) => {
      if (element !== button) {
        console.log("entrei");
        element.classList.remove("selected");
      }
    });

    Object.values(sounds).forEach((element) => {
      if (element !== sounds[soundName]) {
        element.pause();
      }
    });
  }

  return {
    songButtonEvent,
    unselectAndRemoveOthers,
  };
}

export default function Sounds() {
  const rainSound = new Audio("assets/Chuva.wav");
  const fireplaceSound = new Audio("assets/Lareira.wav");
  const coffeeShopSound = new Audio("assets/Cafeteria.wav");
  const forestSound = new Audio("assets/Floresta.wav");

  rainSound.loop = true;
  fireplaceSound.loop = true;
  coffeeShopSound.loop = true;
  forestSound.loop = true;

  return {
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound,
  };
}

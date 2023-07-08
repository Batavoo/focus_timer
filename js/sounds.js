export default function Sounds() {
  const rainSound = new Audio("assets/Chuva.wav");
  const fireplaceSound = new Audio("assets/Lareira.wav");
  const coffeeShopSound = new Audio("assets/Cafeteria.wav");
  const forestSound = new Audio("assets/Floresta.wav");

  return {
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound,
  };
}

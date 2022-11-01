const clients = ["Mango", "Ajax", "Kiwi"];

if (!clients.includes("Monkong")) {
  console.log("Monkong не найден");
}

const cars = ["bmw", "audi", "toyota", "lanos"];
console.log(cars);
const niceCars = ["bmw", "toyota"];

for (const car of cars) {
  if (niceCars.includes(car)) {
    console.log(`Отличная машина: ${car}`);
    continue;
  }
  console.log(`Выбраная машина ничего так: ${car}`);
}

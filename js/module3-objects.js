// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// // Перезаписываем ключи

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// // Добавляем в обьект ключи

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };

// console.log(apartment);
// console.log(ownerName);

// Вычесляемые свойства (подставление свойст которые заранее не известны)
// {
//   const password = 123;
//   const name = "Henry";
//   const imputName = "email";
//   const passwordInputName = "password";

//   const userName = {
//     [imputName]: name,
//     [passwordInputName]: password,
//   };
//   console.log("Это вычесляемые свойства", userName);
// }

// {
//   // Переберем обьект при помощи цикла for...in и запишем в переменную key его КЛЮЧИ, в переменную values его ЗНАЧЕНИЯ
//   const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];

//   for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   console.log(keys);
//   console.log(values);
// }

// {
//   // Цикл for...in переберает и собственные значения обьекта и унаследованные от другого. Метод .hasOwnProperty(key) делает проверку на собственность ключа
//   const keys = [];
//   const values = [];
//   const advert = {
//     service: "apt",
//   };
//   const apartment = Object.create(advert);
//   apartment.descr = "Spacious apartment in the city center";
//   apartment.rating = 4;
//   apartment.price = 2153;

//   for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//       keys.push(key);
//       values.push(apartment[key]);
//     }
//   }

//   console.log(keys);
//   console.log(values);
// }

// {
//   /** Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
//   Используй переменную propCount для хранения количества свойств объекта. */
//   const dog = {
//     properName: "Mango",
//     age: 2,
//     score: 500,
//   };

//   function countProps(object) {
//     let propCount = 0;
//     const dogKeys = Object.keys(dog);
//     propCount = dogKeys.length;
//     return propCount;
//   }

//   console.log(countProps(dog));
// }

// {
//   /** Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных
//    * свойств объекта apartment, и добавь в массив values все значения его свойств. */
//   const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(apartment[key]);
//   }
//   console.log(values);
// }

// {
//   /** Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств.
//    * Используй методы Object.keys() и Object.values(). */
//   const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);

//   console.log(keys);
//   console.log(values);
// }

// {
//   /** Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата.
//    * Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты. */
//   const countTotal = {
//     kiwi: 200,
//     poly: 50,
//     ajax: 150,
//     alex: 200,
//   };

//   function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const countValues = Object.values(countTotal);
//     for (const key of countValues) {
//       totalSalary += key;
//     }
//     return totalSalary;
//   }

//   console.log(countTotalSalary(countTotal));
// }

// {
//   /** Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения
//    * свойств rgb из всех объектов массива colors. */
//   const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   // console.table(colors);
//   const hexColors = [];
//   const rgbColors = [];

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);
// }

{
  /** Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
   * Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price).
   * Если продукт с таким названием не найден, функция должна возвращать null. */
  //   const products = [
  //     { name: "Radar", price: 1300, quantity: 4 },
  //     { name: "Scanner", price: 2700, quantity: 3 },
  //     { name: "Droid", price: 400, quantity: 7 },
  //     { name: "Grip", price: 1200, quantity: 9 },
  //   ];
  //   function getProductPrice(productName) {
  //     for (const product of products) {
  //       if (product.name === productName) {
  //         return product.price;
  //       }
  //     }
  //     return null;
  //   }
  //   console.log(getProductPrice("Scanner"));
  // }
  // {
  //   /** Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
  //    * Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
  //    * Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив. */
  //   const products = [
  //     { name: "Radar", price: 1300, quantity: 4 },
  //     { name: "Scanner", price: 2700, quantity: 3 },
  //     { name: "Droid", price: 400, quantity: 7 },
  //     { name: "Grip", price: 1200, quantity: 9 },
  //   ];
  //   function getAllPropValues(propName) {
  //     const valueArray = [];
  //     for (const product of products) {
  //       const key = Object.keys(product);
  //       if (key.includes(propName)) {
  //         valueArray.push(product[propName]);
  //       }
  //     }
  //     return valueArray;
  //   }
  //   console.log(getAllPropValues("price"));
  // }
  // {
  //   /** Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
  //    * Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products. */
  //   const products = [
  //     { name: "Radar", price: 1300, quantity: 4 },
  //     { name: "Scanner", price: 2700, quantity: 3 },
  //     { name: "Droid", price: 400, quantity: 7 },
  //     { name: "Grip", price: 1200, quantity: 9 },
  //   ];
  //   function calculateTotalPrice(productName) {
  //     let totallPrice = 0;
  //     for (const product of products) {
  //       if (product.name === productName) {
  //         totallPrice = product.price * product.quantity;
  //       }
  //     }
  //     return totallPrice;
  //   }
  //   console.log(calculateTotalPrice("Grip"));
  // }
  // {
  //   /** Глубокая деструктуризация объекта ПРИМЕР */
  //   const forecast = {
  //     today: {
  //       low: 28,
  //       high: 32,
  //       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  //     },
  //     tomorrow: {
  //       low: 27,
  //       high: 31,
  //     },
  //   };
  //   //Строка ниже это тоже самое в записи что и
  //   const {
  //     today: {
  //       low: lowToday,
  //       high: highToday,
  //       icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  //     },
  //     tomorrow: {
  //       low: lowTomorrow,
  //       high: highTomorrow,
  //       icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  //     },
  //   } = forecast;
  // Что и вот эта запись
  // const highToday = highToday;
  // const lowToday = lowToday;
  // const todayIcon = icon;
  // const highTomorrow = high;
  // const lowTomorrow = low;
  // const tomorrowIcon = icon;
}

{
  /** Паттерн «Объект параметров» ТОЕСТЬ деструктуризация объекта сразу при вызове функции */
  // Так было до деструктуризации
  // const forecast = {
  //   today: { low: 10, high: 20 },
  //   tomorrow: { low: 20, high: 30 },
  // };
  // function calculateMeanTemperature(forecast) {
  //   const todayLow = forecast.today.low;
  //   const todayHigh = forecast.today.high;
  //   const tomorrowLow = forecast.tomorrow.low;
  //   const tomorrowHigh = forecast.tomorrow.high;
  //   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  // }
  // // Так стало после деструктуризации
  // function calculateMeanTemperature({
  //   today: { low: todayLow, high: todayHigh },
  //   tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  // }) {
  //   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  // }
  // // Или такой вариант
  // function calculateMeanTemperature(forecast) {
  //   const {
  //     today: { low: todayLow, high: todayHigh },
  //     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  //   } = forecast;
  //   // Change code above this line
  //   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  // }
}

{
  /** Оператором спред (...spread) можно соединять два массива в один с заменой эллементов, но последовательность распыления имеет ЗНАЧЕНИЕ*/
  // Пример ниже
  /** В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings.
   * Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings. Для того чтобы получить
   * финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы
   * в переменной finalSettings получился объект финальных настроек теста. */
  // const defaultSettings = {
  //   theme: "light",
  //   public: true,
  //   withPassword: false,
  //   minNumberOfQuestions: 10,
  //   timePerQuestion: 60,
  // };
  // const overrideSettings = {
  //   public: false,
  //   withPassword: true,
  //   timePerQuestion: 30,
  // };
  // const finalSettings = { ...defaultSettings, ...overrideSettings };
}
// {
//   /** Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
//    * text - текст задачи.
//    * category - категория задачи.
//    * priority - приоритет задачи.
//    * Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed,
//    * значение которого хранится в одноимённой локальной переменной. В параметре data гарантированно будет только свойство text, а остальные два,
//    * category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию,
//    * хранящиеся в одноимённых локальных переменных. */
//   function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//     let res = {
//       category,
//       priority,
//       ...data,
//       completed,
//     };
//     console.log(res);
//     return res;
//   }
//   // Change code above this line
//   // makeTask({ category: "General", priority: "Normal", completed: false });
//   makeTask({ text: "Buy bread" });
// }

// {
//   /** Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму. */
//   function add(...numbers) {
//     let nambersSum = 0;

//     for (const number of numbers) {
//       nambersSum += number;
//     }
//     console.log(nambersSum);
//     return nambersSum;
//   }
//   add(74, 11, 62, 46, 12, 36);
// }

// {
//   /** Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов,
//    * которые больше чем заданное число. Это число должно быть первым параметром функции. */
//   function add(firstNumber, ...numbers) {
//     let nambersSum = 0;

//     for (const number of numbers) {
//       if (number > firstNumber) {
//         nambersSum += number;
//       }
//     }
//     console.log(nambersSum);
//     return nambersSum;
//   }
//   add(20, 74, 11, 62, 46, 12, 36);
// }

// {
//   /** Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут
//    * просто числами. Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго,
//    * которые есть в массиве первого аргумента. Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только
//    * они есть в массиве первого аргумента. */
//   function findMatches(firstValues, ...secondValues) {
//     const matches = [];
//     // for (const valueFirst of firstValues) {
//     //   for (const valueSecond of secondValues) {
//     //     if (valueFirst === valueSecond) {
//     //       matches.push(valueSecond);
//     //     }
//     //   }
//     // }
//     //Или так как сверху, или так как снизу
//     for (const value of firstValues) {
//       if (secondValues.includes(value)) {
//         matches.push(value);
//       }
//     }
//     console.log(matches);
//     return matches;
//   }

//   findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// }

// {
//   /* Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того,
//   чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент */
//   const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],

//     updateBook(oldName, newName) {
//       const index = this.books.indexOf(oldName);
//       this.books.splice(index, 1, newName);
//     },
//   };

//   bookShelf.updateBook("The last kingdom", "Dune");
// }
{
  /** Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
        getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
        addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре.
        В противном случае возвращается строка.
        removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
        updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions. */

  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],

    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      for (const item of this.potions) {
        if (item.name === newPotion.name) {
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
      }
      // const newProduct = {
      //   ...newPotion,
      // };

      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
        const potion = this.potions[i];
        if (potionName === potion.name) {
          this.potions.splice(i, 1);
        }
      }
    },
    updatePotionName(oldName, newName) {
      let resalt = `Potion ${oldName} is not in inventory`;
      for (let i = 0; i < this.potions.length; i += 1) {
        const potion = this.potions[i];

        if (oldName === potion.name) {
          potion.name = newName;
          resalt = `Found ${oldName} change to ${newName} `;
        }
      }
      return console.log(resalt);
    },
  };

  atTheOldToad.getPotions();
}

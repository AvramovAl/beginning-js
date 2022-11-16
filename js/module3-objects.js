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
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function getProductPrice(productName) {
    for (const product of products) {
      if (product.name === productName) {
        return product.price;
      }
    }
    return null;
  }
  console.log(getProductPrice("Scanner"));
}

{
  /** Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
   * Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
   * Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив. */
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function getAllPropValues(propName) {
    const valueArray = [];

    for (const product of products) {
      const key = Object.keys(product);
      if (key.includes(propName)) {
        valueArray.push(product[propName]);
      }
    }

    return valueArray;
  }
  console.log(getAllPropValues("price"));
}

{
  /** Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
   * Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products. */

  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function calculateTotalPrice(productName) {
    let totallPrice = 0;

    for (const product of products) {
      if (product.name === productName) {
        totallPrice = product.price * product.quantity;
      }
    }
    return totallPrice;
  }
  console.log(calculateTotalPrice("Grip"));
}

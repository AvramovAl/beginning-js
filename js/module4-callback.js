{
  /*Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка
  onSuccess и onError.
Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, 
передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая 
ему аргументом имя заказанной пиццы.
После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй. */
  const pizzaPalace = {
    pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
      const isRub = this.pizzas.includes(pizzaName);
      if (isRub) {
        return onSuccess(pizzaName);
      }
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    },
  };
  // Change code above this line

  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }

  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }

  // Method calls with callbacks
  pizzaPalace.order("Smoked", makePizza, onOrderError);
  pizzaPalace.order("Four meats", makePizza, onOrderError);
  pizzaPalace.order("Big Mike", makePizza, onOrderError);
  pizzaPalace.order("Vienna", makePizza, onOrderError);
}

{
  /** Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray,
   * и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
   * Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach. */
  /** Было
   function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }

  return commonElements;
  // Change code above this line
}  */
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];

    firstArray.forEach(function (element) {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });

    return commonElements;
  }
}

{
  /** Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.
   * Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
   * Было
   * function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
    } */
  const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach((item) => {
      totalPrice += item;
    });

    return totalPrice;
  };
}

{
  /** Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции. */
  /** Было
  function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
    }
   */
  const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });

    return filteredNumbers;
  };
}

{
  /** Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users. */
  const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ];

  const getUserNames = (users) => {
    const name = users.map((user) => user.name);
    return name;
  };
  console.log(getUserNames(users));
}

{
  /** Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных.
   * Обязательно используй метод filter(). */
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);
  console.log(evenNumbers);
  console.log(oddNumbers);
}

{
  /** Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books,
   * а в переменной uniqueGenres массив уникальных жанров - без повторений. */
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];

  const allGenres = books.flatMap((book) => book.genres);
  const uniqueGenres = allGenres.filter(
    (genres, id) => allGenres.indexOf(genres) === id
  );
  console.log(allGenres);
  console.log(uniqueGenres);
}

{
  /** Используя метод filter() дополни код так, чтобы:
В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR. */
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];

  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";

  const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
  const booksByAuthor = books.filter((book) => book.author === AUTHOR);

  console.log(topRatedBooks);
  console.log(booksByAuthor);
}

{
  /** Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor)
   * совпадает со значением параметра color. */
  const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];

  const getUsersWithEyeColor = (users, color) => {
    const userEyeColor = users.filter((user) => user.eyeColor === color);

    return userEyeColor;
  };
  console.log(getUsersWithEyeColor(users, "blue"));
}

{
  /** Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age)
   * попадает в промежуток от minAge до maxAge. */
  const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39,
    },
  ];

  const getUsersWithAge = (users, minAge, maxAge) => {
    const userAgeFilter = users.filter(
      (user) => user.age >= minAge && user.age <= maxAge
    );
    return userAgeFilter;
  };

  console.log(getUsersWithAge(users, 20, 30));
}

{
  /** Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг
   * с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends. */
  const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39,
    },
  ];

  const getUsersWithFriend = (users, friendName) => {
    return users.filter((user) => user.friends.includes(friendName));
  };

  console.log(getUsersWithFriend(users, "Briana Decker"));
}

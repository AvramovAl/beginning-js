{
  /**Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
   *  Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array. */

  const array = ["Rodel", "Mike", "Ronnie", "Betus"];

  function myArray(array) {
    let items = [];

    for (const item of array) {
      items.push(item);
    }
    console.log(items);
    const firstItem = [items[0], items[items.length - 1]];

    return firstItem;
  }

  console.log(myArray(array));
}

{
  /**Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения
   *  строки message по разделителю delimeter - массив строк.
   * splitMessage("Mango hurries to the train", " ") */

  const message = "Mango hurries to the train";
  const delimeter = " ";

  function splitString(message, delimeter) {
    let words = message.split(delimeter);

    return words;
  }

  console.log(splitString(message, delimeter));
}

{
  /**Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке. */
  const message = "JavaScript is in my blood";
  const pricePerWord = 10;

  function calculateEngravingPrice(message, pricePerWord) {
    let emountMessage = [];

    for (const item of message.split(" ")) {
      emountMessage.push(item);
    }
    console.log(emountMessage);
    const totallPrice = emountMessage.length * pricePerWord;

    return totallPrice;
  }
  console.log(calculateEngravingPrice(message, pricePerWord));
}

{
  /**Напишите функцию так, чтобы она возвращала результат соединения элементов массива c разделителем delimeter - строку. */

  const array = ["Mango", "hurries", "to", "the", "train"];
  const delimeter = " ";

  function makeStringFromArray(array, delimeter) {
    let string = array.join(delimeter);
    return string;
  }

  console.log(makeStringFromArray(array, delimeter));
}

{
  /** Напиши функцию которая принимает заголовок статьи, и возвращает slug, созданный из этой строки. */

  const title = "Arrays for begginers";

  function slugify(title) {
    let intervalTitleToLowerCase = title.toLowerCase();
    let intervalTitle = [];
    for (const itemTitle of intervalTitleToLowerCase.split(" ")) {
      intervalTitle.push(itemTitle);
    }

    return intervalTitle.join("-");
  }
  console.log(slugify(title));
}

{
  /** Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits. */
  const fruits = ["apple", "plum", "pear", "orange", "banana"];

  const firstTwoEls = fruits.slice(0, 2);
  const nonExtremeEls = fruits.slice(1, 4);
  const lastThreeEls = fruits.slice(2);

  console.log(firstTwoEls);
  console.log(nonExtremeEls);
  console.log(lastThreeEls);
}

{
  /**Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients. */
  const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
  const newClients = ["Peach", "Houston"];

  const allClients = oldClients.concat(newClients);

  console.log(allClients);
}

{
  /**Напиши функцию для создания нового массива со всеми элементами двух исходных. Параметр maxLength содержит максимально допустимую длину
   * нового массива. Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
   * В противном случае функция должна вернуть новый массив целиком. */

  const firstArray = ["Mango", "Poly"];
  const secondArray = ["Ajax", "Chelsea"];
  const maxLength = 3;

  function makeArray(firstArray, secondArray, maxLength) {
    const newArray = [].concat(firstArray, secondArray);

    const finishArray = newArray.slice(0, maxLength);

    return finishArray;
  }
  console.log(makeArray(firstArray, secondArray, maxLength));
}

{
  /** Цикл for пример */

  const start = 3;
  const end = 7;

  for (let i = start; i <= end; i += 1) {
    console.log(i);
  }
}

{
  /** Напиши функцию, которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. */

  const foo = 18;

  function calculateTotal(number) {
    let sum = 0;
    for (let i = 0; i <= foo; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(calculateTotal(foo));
}

{
  /** Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits. */

  const fruits = ["apple", "plum", "pear", "orange"];

  for (let i = 0; i < fruits.length; i += 1) {
    const fruit = fruits[i];
    console.log(fruit);
  }
}

{
  /** Напиши функцию, которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
   * Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции. */

  const number = [12, 85, 37, 4];

  function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
      total += order[i];
    }

    return total;
  }
  console.log(calculateTotalPrice(number));
}

{
  /** Напиши функцию которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает
   * самое длинное слово в этой строке. */

  const message = "The quick brown fox jumped over the lazy dog";

  function findLongestWord(string) {
    const stringSplit = string.split(" ");
    let longestWord = "";
    for (const word of stringSplit) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  console.log(findLongestWord(message));
}

{
  /** Дополни код функции так, чтобы она возвращала массив всех целых чисел от значения min до max. */

  const min = 14;
  const max = 17;

  function createArrayOfNumbers(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  console.log(createArrayOfNumbers(min, max));
}

{
  /** Напиши функцию, которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут
   * только те элементы массива numbers, которые больше чем значение параметра value (число). */
  const numbers = [12, 24, 8, 41, 76];
  const value = 38;

  function filterArray(numbers, value) {
    let newArray = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > value) {
        newArray.push(numbers[i]);
      }
    }
    return newArray;
  }
  console.log(filterArray(numbers, value));
}

// {
//   /** Функция принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits. */

//   function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit);

//   }

// }

//доступ к эллементу по его индексу
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(`Первый эллемент массива - ${firstElement}`);
// console.log(`Второй эллемент массива - ${secondElement}`);
// console.log(`Последний эллемент массива - ${lastElement}`);

//переопределение эллемента массива по доступу к нему через индекс
const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = "peach";
fruits[3] = "banana";
console.log(`Второй эллемент массива "plum" заменен на - ${fruits[1]}`);
console.log(`Последний эллемент массива "orange" заменен на - ${fruits[3]}`);

//узнаем длинну масива fruits
const fruitsArrayLength = fruits.length;
console.log(`Длинна массива состовляет - ${fruitsArrayLength} эллемента`);

//выводим последний эллемент массива
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
console.log(`Последний эллемент массива - ${lastElement}`);

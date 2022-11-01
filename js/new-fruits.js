{
  const fruits = ["Kiwi", "Banana", "Ananas", "Apple", "Cucumber"];

  // Метод slice(-1) возвращает последний элемент
  const fruitsWithoutEdgeElements = fruits.slice(-1);
  console.log(fruitsWithoutEdgeElements);
}
// Объеденяем два массива в один
{
  const fruits = ["Kiwi", "Banana", "Ananas", "Apple"];
  const vegetables = ["Cabbage", "Tomato", "Cucumber"];

  // Старая запись
  const meals = fruits.concat(vegetables);
  // Новая запись использование spread (...) оператора
  const mealsi = [...fruits, ...vegetables];
  console.log(`Все товары: ${meals}`);
  console.log(`Все товары: ${mealsi}`);
}

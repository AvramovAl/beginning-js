/** Работаем с коллекцией товаров в корзите */
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product, // Распыляем массив который добавляем при помощи метода объекта .add
      quantity: 1, // При добавлении массива при помощи метода обьекта .add еще добавляем ключ quantity
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this; //Деструктуризация, в переменной items теперь лежит ссылка на масив cart.items

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      /** const { name } Деструктуризация свойства this.items[i] */
      if (productName === name) {
        items.splice(i, 1);
        // console.log("Нашли такой продукт:", productName);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;

    let total = 0;
    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

cart.add({ name: "apple", price: 50 });
cart.add({ name: "tomato", price: 60 });
cart.add({ name: "corn", price: 60 });
cart.add({ name: "pear", price: 100 });
cart.add({ name: "pear", price: 100 });
cart.add({ name: "pear", price: 100 });
cart.add({ name: "tomato", price: 60 });
cart.add({ name: "tomato", price: 60 });

console.log(
  "Консоль выводит таблицу с элем которые добавлены в корзину методом .add"
);
console.table(cart.getItems());
console.log("----------------------------------------------");

console.log(
  "Консоль выводит общую сумму в ключе price через метод .countTotalPrice"
);
console.log("Total:", cart.countTotalPrice());
console.log("----------------------------------------------");

cart.remove("tomato"); //Вызываем метод .remove и передаем значение
console.log("Таблица после удаления элем методом .remove (Удаляем томат)");
console.table(cart.getItems());
console.log("----------------------------------------------");

console.log(
  "Консоль выводит общую сумму в ключе price через метод .countTotalPrice ПОСЛЕ УДАЛЕНИЯ ЭЛЕМ tomato"
);
console.log("Total:", cart.countTotalPrice());
console.log("----------------------------------------------");

cart.clear(); //Вызываем метод .clear и передаем значение
console.log("Метод объекта очищает массив cart.items");
console.table("Пустой массив []", cart.getItems());
console.log("----------------------------------------------");

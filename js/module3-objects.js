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
{
  const password = 123;
  const name = "Henry";
  const imputName = "email";
  const passwordInputName = "password";

  const userName = {
    [imputName]: name,
    [passwordInputName]: password,
  };
  console.log("Это вычесляемые свойства", userName);
}

{
  // Переберем обьект при помощи цикла for...in и запишем в переменную key его КЛЮЧИ, в переменную values его ЗНАЧЕНИЯ
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];

  for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
  }

  console.log(keys);
  console.log(values);
}

{
  // Цикл for...in переберает и собственные значения обьекта и унаследованные от другого. Метод .hasOwnProperty(key) делает проверку на собственность ключа
  const keys = [];
  const values = [];
  const advert = {
    service: "apt",
  };
  const apartment = Object.create(advert);
  apartment.descr = "Spacious apartment in the city center";
  apartment.rating = 4;
  apartment.price = 2153;

  for (const key in apartment) {
    if (Object.hasOwnProperty()) {
      keys.push(key);
      values.push(apartment[key]);
    }
  }

  console.log(keys);
  console.log(values);
}

// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// const obj = {}
// function getPrototypeChain(obj){
//   const prototypeChain = []
//   let current = obj
//   while(current !== null){
//     prototypeChain.push(current)
//     current = Object.getPrototypeOf(current)
//   }
//   return prototypeChain
// }
// const prototype = getPrototypeChain(obj)
// console.log(prototype);

// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   introduce(){
//     console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
//   }
// }

// const person1 = new Person('Nik', 25)
// person1.introduce()

// Задание 3 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   speak(){
//     console.log(`${this.name} издает звук`);
//   }
// }

// class Dog  extends Animal{
//   constructor(name, breed) {
//     super(name)
//     this.breed = breed
//   }
//   fetch() {
//     console.log(`Собака ${this.name} принесла мяч`);
//   }
// }

// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// Задание 3(40 минут)
// Создайте класс Product, который будет представлять товар в магазине.
// У товара должны быть следующие свойства:
// - name (строка) - имя товара
// - price (число) - цена товара за одну единицу
// Создайте класс ShoppingCart, представляющий корзину интернет магазина.
// Конструктор класса ShoppingCart должен принимать два параметра:
// - customerName (строка) - имя покупателя.
// - initialTotalCost (число) - начальная общая стоимость заказа (может быть равна 0, если корзина пуста)
// У класса ShoppingCart должен быть метод addItem(product, quantity), который позволяет добавить товар в корзину.
// Метод должен принимать два параметра:
// product (объект класса Product) - товар, который добавляется в корзину.
// quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину.
// Если quantity не указано, считается, что добавляется одна единица товара.
// У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа.
// У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение с общей
// стоимостью заказа и благодарностью за покупку. Формат вывода сообщения: "Заказ оформлен для {имя покупателя}.
// Общая стоимость заказа: {общая стоимость} рублей. Спасибо за покупку!".

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(customerName, initialTotalCost) {
    this.customerName = customerName;
    this.initialTotalCost = initialTotalCost;
    this.items = []
  }
  addItem(product, quantity = 1) {
    this.initialTotalCost += product.price * quantity
    this.items.push({product, quantity})
  }
  getCurrentTotalCost() {
    console.log(this.initialTotalCost);
  }
  checkout(){
    console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.initialTotalCost} рублей. Спасибо за покупку!`);
  }
}

const product1 = new Product('iPhone 15 Pro Max', 150_000)
const product2 = new Product('iPhone 14 Pro Max', 100_000)
const product3 = new Product('iPhone XR', 30_000)
console.log(product1);

const cart = new ShoppingCart('Nik', 0)

cart.addItem(product1, 3)
cart.addItem(product2, 5)

cart.getCurrentTotalCost();
cart.checkout()
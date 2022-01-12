// let salary = 1300.16472;
// console.log(Number(salary.toFixed(2)));

// console.log(Math.PI);

// const base = 2;
// const power = 5;
// const result = Math.pow(2, 5);
// console.log(result);

// let base = prompt('Введите число');
// base = Number(base);
// console.log(base);
// let power = prompt('Введите степень числа');
// power = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);

// console.log(Math.random());

// const min = 0;
// const max = 100;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// const message = 'В этой строке 26 символов.';
// console.log(message.length);

// const brand = 'Samsung';
// const normalizeBrand = brand.toLowerCase();
// console.log(normalizeBrand);

// console.log(5 && 6 && 7 && 'Hello' && 9);

// console.log(5 || 7 || 8 || 10);

// const salary = 15000;
// if (salary <= 500) {
//     console.log('Уровень1');
//     }    else if (salary > 500 && salary <= 1500) {
//         console.log('Уровень2');
//     }    else if (salary > 1500 && salary < 3000) {
//         console.log('Уровень3');
//     }   else {
//         console.log('Уровень4');
//     }
//     console.log('Говно');


// const balance = 1000;
// const message = balance >= 0 ? 'Поз.баланс' : 'Нег.баланс';
// console.log(message);

// let balance = 10000;
// const payment = 20000;
// console.log(`Общая стоимость заказа ${payment} кредитов.Проверяем колличество доступных средств на счету.`);
// if (payment<=balance) {
//     console.log('OK');
//     balance-=payment;
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }
//     console.log('Операция завершена!');

// const totalSpent=15500;
// let payment=500;
// let discount=0;
//  if (totalSpent>=100 && totalSpent<1000) {
//     console.log('Бронзовый партнер,скидка 2%');
//     discount=0.02;
// } else if (totalSpent>=1000 && totalSpent<5000) {
//     console.log('Серебрянный партнер,скидка 5%');
//     discount=0.05;
// } else if (totalSpent>=5000) {
//     console.log('Золотой партнер,скидка 10%');
//     discount=0.1;
// } else {
// console.log('Не партнер,скидка 0%');
// }
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount*100}`);

// const stars = 6;
// let price;
// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;

//     case 3:
//         price = 50;
//         break;

//     case 4:
//         price = 70;
//         break;

//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Стольких звезд нет');
// }
//     console.log(price);

// for (let i=0; i<5;i+=1) {
//     console.log(i);
// }
//     console.log('Привет');

// const minSalary=500;
// const maxSalary=5000;
// const employees=10;
// let totalSalary=0;
// for (let i=1;i<=employees;i+=1) {
//     const salary=Math.round(Math.random()*(maxSalary-minSalary)+minSalary);
//     console.log(`Зарплата работника номер ${i}- ${salary}`);
//     totalSalary+=salary;
//     }
// console.log('totalSalary:',totalSalary);

// const min=0;
// const max=10;
// let total=0;
// for (let i=min;i<=max;i+=1) {
//     if (i%2===0) {
//         console.log('Четное',i);
//         total+=i;
//     }
// }
//     console.log('total:',total);
// Или

//  const min=0;
//  const max=5;
//  let total=0;
//  for (let i=min;i<=max;i+=1) {
//      if (i%2!==0) {
//          console.log('Не четное',i);
//          continue;
//      }
//         console.log('Четное',i);
//       total+=i;
//  }
//      console.log('total:',total);

// const a=['Mango','Kiwi','Poly','Ajax',2,3,4,5];
// console.table(a);
// const lastIndex=a.length-1;
// console.log(lastIndex);

// const a=['Mango','Kiwi','Poly','Ajax',2,3,4,5];
// const lastIndex=a.length-1;
// for (let i=0;i<=lastIndex;i+=1) {
//   a[i]+='-1';
// }
// console.table(a);

// const a=['Mango','Kiwi','Poly','Ajax',2,3,4,5];
// for (const b of a) {
// console.table(b);
// }

// const cart=[54,28,105,70,92,17,120,35];
// let total=0;
// for (let i=0;i<cart.length;i+=1) {
//     total+=cart[i];
// }
// console.log('Total',total);

// ИЛИ

// const cart=[54,28,105,70,92,17,120,35];
// let total=0;
// for (const value of cart) {
//     total+=value;
// }
// console.log('Total',total);

// Сумма всех четных элементов в массиве
// const numbers=[1,5,8,9,12,4,15,27,30,18,14];
// let total=0;
// for (const number of numbers) {
//     if (number%2===0) {
//     console.log(`${number}-четное!`);
//     total+=number;
//      }
// }
// console.log('Total',total);

// Поиск логина
// const logins=['a','b','c','d','e'];
// const loginTofind='z';
// let message=`Пользователь ${loginTofind} не найден`;
// for (const login of logins) {
//         if (login===loginTofind) {
//         message=`Пользователь ${loginTofind} найден`;
//         break;
//     }
//    }
// console.log(message);
// С помощью includes
// const logins=['a','b','c','d','e'];
// const loginTofind='b';
// const message=logins.includes(loginTofind)
//     ?`Пользователь ${loginTofind} найден.`
//     :`Пользователь ${loginTofind} не найден.`;
//     console.log(message);

// Поиск самого маленького числа,которое не повторяется
// const numbers=[51,18,13,24,7,85,19,3];
// let smallestNumber=numbers[0];
// for (const number of numbers) {
//     if (number<smallestNumber) {
//         smallestNumber=number;
// }
// }
// console.log('smallestNumber',smallestNumber);

// Поиск самого большого числа,которое не повторяется
// const numbers=[51,18,13,24,7,85,19,3,100];
// let biggestNumber=numbers[0];
// for (const number of numbers) {
//     if (number>biggestNumber) {
//         biggestNumber=number;
// }
// }
// console.log('biggestNumber',biggestNumber);

// Обьединяет все элементы массива в одно строковое значение
// const friends=['Mango','Poly','Kiwi','Ajax'];
// let string='';
// for (const friend of friends) {
//     string+=friend+',';
// }
// string=string.slice(0,string.length-1);
// console.log(string);
// То же самое через join
// const friends=['Mango','Poly','Kiwi','Ajax'];
// const string=friends.join(',');
// console.log(string);

// Замена регистра каждого символа в строке на противоположный
// const string='JavaScript';
// const letters=string.split('');
// let invertedString='';
// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
//     if (letter===letter.toLowerCase()) {
//         console.log('Эта буква в нижнем регистре!-',letter);
//         invertedString+=letter.toUpperCase();
//     } else {
//         console.log('Эта буква в верхнем регистре!-',letter);
//         invertedString+=letter.toLowerCase();
//     }
// }
// console.log(invertedString);
// То же самое
//  const string='JavaScriptfggKJHKn';
//  const letters=string.split('');
//  let invertedString='';
//  console.log(letters);
//  for (const letter of letters) {
//          console.log(letter);
//         invertedString += letter === letter.toLowerCase()
//         ? letter.toLocaleUpperCase()
//         : letter.toLocaleLowerCase();
//         }
//         console.log(invertedString);

// Сделать из  строки слак
// const title='Top 10 benefits of React framework';
// const normalizedTitle=title.toLowerCase();
// console.log(normalizedTitle);
// const words=normalizedTitle.split(' ');
// console.log(words);
// const slug=words.join('-');
// console.log(slug);
// То же самое
// const title='Top 10 benefits of React framework';
// const slug=title.toLocaleLowerCase().split(' ').join('-');
// console.log(slug);

// Сумма элементов 2-х массивов
// const array1=[5,10,15,20];
// const array2=[10,20,30];
// let total=0;
// const numbers=array1.concat(array2);
// for (const number of numbers) {
// total+=number;
// }
// console.log(total);

// Работа с trello,метод splice
// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];
// console.table(cards);
// const cardToRemove='Карточка-3';
// const index=cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index,1);
// console.table(cards);

// Добавление по индексу
// const cardToInsert='Карточка-6';
// const index=1;
// cards.splice(index,0,cardToInsert);
// console.table(cards);

// Обновление по индексу
// const cardToUpdate='Карточка-4';
// cards.splice(3,1,cardToUpdate);
// console.table(cards);

// ФУНКЦИИ
 
// const fn = function (value) {
//   console.log(1);
//   console.log(2);
//   if (value < 50) {
//     return 'Меньше чем 50';
//   }
//   return 'Больше чем 50';
// }
// console.log('Результат функции:', fn(10));
// console.log('Результат функции:',fn(1000));

// К задаче на 186 стороке
// const calculateTotalPrice = function (items) {
//   console.log('items внутри функции:', items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//    }
//   return total;
// }
// const r1 = calculateTotalPrice([1, 2, 3]);
// console.log(`Общая сумма покупок ${ r1 }`);
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// Функция для перебора и логирования массива без ретерна
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }
// logItems(['Mongo', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура','наушники','часы']);

// К задаче на 215 стороке
// const logins = ['m4ngoDoge','k1widab3t','poly1scute','aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
//   return  allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;
  
// }
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3t'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins,'poly1scute'));

// К задаче на 223 стороке
// const findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// }
// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));

// К задаче на 257,272 стороке
// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//     invertedString += isInLowerCase ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// }

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));

// К задаче на 286,294 стороке
// const slugify = function (string) {
//   return string.toLowerCase().split(' ').join('-');
// }
// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writting tips for non-native English speakers'));

// Полноценный массив (старый метод)
// const fn = function () {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// Полноценный массив (новый метод)
// const fn = function (...args) {
//   console.log(args);
// }
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// Функция для сложения произвольного колличества элементов
// const add = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(1, 2, 3));
// console.log(add(1,2,3,4,5));

// Функция,которая первым аргументом принимает массив чисел,после первого аргумента может быть произвольное колличество других аргументов,которые будут числами. Функция должна вернуть новый массив,в котором будут только те аргументы,начиная со второго,для которых есть аналог в оригинальном массиве
const filterNumbers = function (array,...args) { 
  console.log('array', array);
  console.log('args:', args);
  const uniqueElements = [];
  // Ищем в любом из массивов
  for (const element of array) { 
    if (args.includes(element)) { 
      uniqueElements.push(element);
      console.log(`${element} есть везде`);
    }
  }
  return uniqueElements;
}
console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100,200,300,400,500],7,12,200,64));
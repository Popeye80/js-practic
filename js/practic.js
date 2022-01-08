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
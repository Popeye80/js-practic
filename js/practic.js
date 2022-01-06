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

const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;
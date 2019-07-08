console.log("1. Создать две функции и дать им осмысленные названия:");
console.log("-первая функция принимает массив и колбэк(одна для всех вызовов)");
console.log("-вторая функция(колбэк) обрабатывает каждый элемент массива(для каждого вызова свой callback)");

const arr1 = ['my', 'name', 'is', 'Trinity'];
const arr2 = [10, 20, 30];
const arr3 = [{
    age: 45,
    name: "John"
  },
  {
    age: 20,
    name: "Aaron"
  }
];
const arr4 = ["abc", "123"];

function workWithArrray(arr, handler) {
  let newStr = `New value: `;

  for (let i = 0; i < arr.length; i++) newStr += handler(arr[i]);
  // i !== arr.length - 1 ? newStr += handler(arr[i]) + ", " : newStr += handler(arr[i]);

  return newStr;
}

function handler1(el) {
  let newStr = "";

  for (let i = 0; i < el.length; i++) {
    i !== 0 ? newStr += el[i] : newStr += el[i].toUpperCase();
  };

  return newStr
};


/* function handler2(el) {
//   el *= 10;
//   let str = "" + el;
//   return str;
} */
//переделал на arrow function
const handler2 = el => `${el *= 10}, `;

const handler3 = el => `${el.name} is ${el.age}, `;

const handler4 = el => {
  let str = "";

  for (let i = el.length; i--;) str += el[i];
  str += ", ";

  return str;
};


let res1 = workWithArrray(arr1, handler1);
let res2 = workWithArrray(arr2, handler2).slice(0, -2);
let res3 = workWithArrray(arr3, handler3).slice(0, -2);
let res4 = workWithArrray(arr4, handler4).slice(0, -2);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

console.log(`
 `);

console.log("2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция) функция должна возвращать true или false в зависимости от результата вызова callback(проверить число больше 5).Callback должен принимать один элемент массива, его индекс в массиве и весь массив.");

const array = [12, 5, 8, 130, 44];

function every(arr, handler) {
  if (!Array.isArray(arr)) return console.log(`First argument should be array`);
  if (typeof handler !== 'function') return console.log(`Second argument should be function`);

  for (let i = 0; i < arr.length; i++) {
    if (!handler(arr[i])) return false;
  }

  return true;
};

function compareNum(el, index, arr) {
  return el > 5;
};

let result = every(array, compareNum);
console.log(result);

console.log(`
 `);

console.log("3. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function)");

const arrowReduce = (...args) => {
  let sum = 0;

  if (!args.length) return 0;

  for (let value of args) sum += value;

  return sum;
};

let reduce = arrowReduce(1, 2, 3, 4);

console.log(reduce);


console.log(`
 `);

console.log("4. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка");

function destruct(el, ...arr) {
  const obg = {
    first: el,
    other: arr
  };
  return obg;
};

result = destruct("a", "b", "c", "d");
console.log(result);

console.log(`
 `);



console.log("5. Организовать функцию getInfo, которая принимает объект вида и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners");

const organisation = {
  name: 'Google',
  info: {
    employees: ['Vlad', 'Olga'],
    partners: ['Microsoft', 'Facebook', 'Xing']
  }
};

function getInfo(obj) {
  const {
    name = 'unknown', info: {
      partners: [partner1, partner2]
    }
  } = obj;
  console.log(`Name: ${name}`);
  console.log(`Partners: ${partner1}, ${partner2}`);
  return
};

getInfo(organisation);
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
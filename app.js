 console.log(
   "1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3). Если нет ни одного аргумента, вернуть ноль: multiply() // 0"
 );

 function multiply() {
   if (arguments.length > 0) {
     let a = 1;
     for (let i = 0, len = arguments.length; i < len; i++) {
       a *= arguments[i];
     }
   } else {
     a = 0;
   }
   return a;
 }

 let res1 = multiply(2, 3, 5);
 console.log(`1. multiply(2, 3, 5) = ${res1}`);
 console.log(`
 `); //пустая строка в консоле между задачами

 console.log(
   "2. Создать функцию, которая принимает строку и возвращает строку - перевертыш: reverseString(‘test’) // “tset”."
 );

 function revStr(str) {
   let newStr = "";
   for (let i = str.length; i--;) {
     newStr += str[i];
   }
   return newStr;
 }

 let res2 = revStr("test");
 console.log(`2. ${res2}`);
 console.log(`
 `); //пустая строка в консоле между задачами

 console.log(
   "3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа"
 );

 function getCodeStringFromText(str) {
   let newStr = "";
   for (let i = 0, len = str.length; i < len; i++) {
     i != str.length ?
       (newStr += str.charCodeAt(i) + " ") :
       (newStr = str.charCodeAt(i));
   }
   return newStr;
 }

 let res3 = getCodeStringFromText("hello");
 console.log(`3. ${res3}`);
 console.log(`
`); //пустая строка в консоле между задачами

 console.log(
   "4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа."
 );

 function guessNumber(num) {
   let random = Math.round(1 - 0.5 + Math.random() * 10);
   if (num >= 1 && num <= 10) {
     if (random === num) {
       return console.log(`Вы выиграли!`);
     } else {
       return console.log(
         `Вы не угадали. Ваше число ${num}, а выпало ${random}`
       );
     }
   } else {
     return console.log(`Число должно быть в пределе от 1 до 10!`);
   }
 }
 guessNumber(6);

 console.log(`
`); //пустая строка в консоле между задачами

 console.log(
   "5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]"
 );

 let n = 10;

 function getArray(n) {
   let arr = [];
   for (let i = 1; i <= n; i++) {
     arr.push(i);
   }
   return arr;
 }

 let res5 = getArray(n);
 console.log(`5. ${res5}`);
 console.log(`
`); //пустая строка в консоле между задачами

 console.log(
   "6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива"
 );

 function doubleArray(array) {
   let arr = array;
   for (let i in array) {
     arr.push(array[i]);
   }
   return arr;
 }

 let res6 = doubleArray([1, 2, 3]);
 console.log(`6. ${res6}`);
 console.log(`
`); //пустая строка в консоле между задачами

 console.log(
   "7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений"
 );

 function changeCollection() {
   let arr = [];
   for (let i = 0, len = arguments.length; i < len; i++) {
     arguments[i].shift();
     arr.push(arguments[i]);
   }
   return arr;
 }
 let res7 = changeCollection([1, 2, 3], ["a", "b", "c"]);
 console.log(`7. ${JSON.stringify(res7)}`);

 console.log(`
`); //пустая строка в консоле между задачами

 console.log(
   "8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам."
 );

 const users = [{
     name: "Denis",
     age: 29,
     gender: "male"
   },
   {
     name: "Alex",
     age: 32,
     gender: "male"
   },
   {
     name: "Anna",
     age: 28,
     gender: "female"
   },
   {
     name: "Ivan",
     age: 12,
     gender: "male"
   },
   {
     name: "Oksana",
     age: 27,
     gender: "female"
   },
   {
     name: "Inna",
     age: 50,
     gender: "female"
   }
 ];

 function filter(arr, key, value) {
   let filterRes = [];
   if (!Array.isArray(arr)) {
     console.log(`Не массив`);
   } else if (!key || !value) {
     console.log(`Передайте ключ и значение`);
   } else {
     for (let i = 0; i < arr.length; i++) {
       if (arr[i][key] === value) {
         filterRes.push(arr[i]);
       }
     }
   }
   return filterRes;
 }

 let filteredUsers = filter(users, "gender", "male");
 console.log(filteredUsers);
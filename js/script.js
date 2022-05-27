"use strict";

// // Варіанти написання назв перемінних і т.д.

// // snake_case
// // UPPER_SNAKE_CASE
// // Kebab-case
// // PascalCase
// // camelCase 


// // Об'єкти

// // const obj = {
// // 	name: 'John',
// // 	age: 25,
// // 	isMarried: false
// // };

// // // console.log(obj.name);
// // console.log(obj['name']);

// // // Масив
// // let arr = ['plum.png', 'orrange.jpg', 'apple.bmp', 6, {}, []];
// // console.log(arr[1]);

// const arr = ['a', 'b', 'c'];
// const arrObj ={
// 	a: 'a',
// 	1: 'b',
// 	2: 'c'
// };

// const b = 'b';

// // arrObj.b = '1234';
// arrObj['b'] = '1234';

// console.log(arrObj['b']);
// console.log(arrObj.b);

// // const obj = {a: 1, b: 2};

// const obj = {
// 	Anna: 500, // те саме що і з кавичками
// 	'Alice': 400
// };

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Як вас звати?', '');
// answers[1] = prompt('Як ваша фамілія?', '');
// answers[2] = prompt('Скільки вам років?', '');

// console.log(typeof(answers));

// Інтерполяція 14 урок      ПОВЕРНУТИСЬ ДО ЦЬОГО  !!!!   ${}   !!!!!! Шаблонні рядки


// const category = 'toys';

// console.log(`https://sameurl.com/${category}/5`);

// const user = 'Dima';

// alert(`Привет, ${user}`);



// Оператори в JS 15 Урок

// '===' - оператор строга рівність

// '==' - оператор рівність

// '=' - оператор присвоєння

// '!' - оператор заперечення


let incr = 10,
		decr = 10;

// console.log(incr++); - постфіксний інкримент
// console.log(decr--); - постфіксний декримент

// console.log(++incr); - префіксний інкримент
// console.log(--decr); - префіксний декримент

console.log(5 % 2);

console.log(2 * 4 === 8);

const isChacked = true,
			isClose = true;
			
console.log(isChacked && isClose); 

// '&&'- оператор " і "

console.log(isChacked || isClose); 

// '||'- оператор " або "
// 1.створити масив з:
// -  з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let numbers = [1, 2, 0, 1000, 54687];
// let text = ["dog", "car", "door", "pen", "table"];
// let booleans = ["if", 2, true, "one", 7007"];

// console.log(numbers);
// console.log(text);
// console.log(booleans);


//2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

 // let array = [];
 // array [0] = 'one';
 // array [1] = true;
 // array [2] =102523;
 // console.log(array)


//3. - За допомогою циклу for і document.write() вивести 10 блоків div з довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div з довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

 // for (let i = 0; i < 10; i++) {
 //     document.write(`<div>цикл з текстом</div>`);
 // }
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>цикл з текстом - ${i}  </div>`)
// }
//
// let a = 0;
//  while (a < 20) {
//     document.write(`<h1>довільний текст</h1>`)
//     a++;
// }
// document.write(`</h1>`)
//
// let n = 0;
// while (n < 20) {
//     document.write(`<h1>довільний текст - ${n} </h1>`)
//     n++;
// }
// document.write(`</h1>`)


// 4.- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arnumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i< arnumbers2.length; i++) {
//     console.log(arnumbers2[i])
// }

// let artext2 = ['green', 'apple', 'table', 'face', 'car', 'phone', 'potato', 'house', 'hand', 'ball'];
// for (i = 0; i<artext2.length; i++) {
//     console.log(artext2[i]);
// }

// let arall2 = [100, 'sky', 'if', 2022, 77, 'child', 'work', 'else', true, false];
// for (i=0; i<arall2.length; i++) {
//     console.log(arall2[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrayAll3 = [11, 12, 13, 14, 'eleven', 'twelve', 'thirteen', 'fourteen', true, false];
// for (i = 0; i < arrayAll3.length; i++) {
// if (typeof  arrayAll3 [i] === 'boolean') {
//     console.log(arrayAll3[i])
//    }
// if (typeof arrayAll3 [i] === 'number') {
//     console.log(arrayAll3 [i])
//     }
// if (typeof arrayAll3 [i] === 'string') {
//     console.log(arrayAll3[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//let array4 = [];
// array4 [0] = 21;
// array4 [1] = 22;
// array4 [2] = 23;
// array4 [3] = 24;
// array4 [4] = 'twenty one';
// array4 [5] = 'twenty two';
// array4 [6] = 'twenty three';
// array4 [7] = 'twenty four';
// array4 [8] = true;
// array4 [9] = false
//
// console.log(array4)
//
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (j=0; j < array4.length; j++) {
// console.log(array4[j])
// }
//
// for (let i = 0; i < 10; i++) {
//     console.log('поточний крок циклу : ' + i +  ' ');
//     document.write('поточний крок циклу : ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//  for (let i = 0; i < 100; i++) {
//      console.log(i)
//      document.write(i)
// }



// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//  for (let i = 0; i < 100; i+=2) {
//     console.log(i)
//      document.write(i)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//         document.write(i)
//     }
//   }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// +for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i)
//     }
// }
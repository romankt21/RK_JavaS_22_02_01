// 1.створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function threenumbers (a, b, c) {
//     if (a<b && a<c) {
//         document.write(a);
//     }
//     else if(b<a && b<c ){
//         document.write(b);
//     }
//     else if (c<a && c<b){
//         document.write(c)
//     }
// }
// threenumbers( 4, 5, 3)

//2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxnumbers (d, e, f) {
//     if (d > e && d > f) {
//         document.write(d);
//     }
//     else if (e > d && e > f) {
//         document.write(e);
//     }
//     else if (f > d && f > e) {
//         document.write(f);
//     }
// }
//maxnumbers( 10, 20, 3)

//3.- створити функцію яка повертає найбільше число з масиву
//   let arraynumbers = [20, 50, 135, 2020 ];
//   function arraymaximum (arraynumbers) {
//       let max = arraynumbers[0];
//       for (let element of arraynumbers) {
//           if(element > max) {
//               max = element;
//           }
//       }
//  return max;
//   }
//   document.write(arraymaximum(arraynumbers))

//4. створити функцію яка повертає найменьше число з масиву.
// let arraymin = [10, 124, 375, 500];
//   function arrayminimum (arraymin) {
//       let min = (arraymin[0]);
//       for (const element of arraymin) {
//           if (element <min) {
//               min =element;
//    }
//  }
//  return min;
// }
// document.write(arrayminimum(arraymin))



//5. - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//  let summArray = [1, 12, 100,];
//  function sumArrayElement  (array){
//     let sum = 0;
//  for (const arrayElement of array) {
//      sum = arrayElement + sum;
// }
// return sum
// }
// document.write(sumArrayElement(summArray))

//6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [5, 10, 15];
//  function elementArray (array) {
//      let middle =(array) ;
//          let sum = 0;
//          for (const arrayElement of array) {
//              sum = arrayElement + sum;
//          }
//          return sum/array.length;
//
//  }
// document.write(elementArray(array))

//7.- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function numbers(num){
//     let min = arguments[0];
//     let max = arguments [0]
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//              }
//         if (element < min ) {
//             min = element;
//         }
//     }
// console.log(max);
//     return min;
// }
//  document.write('Мінімальне число з введених: ' + numbers(1, 0, -25, 2022))


//8.- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randoms(hundred) {
// let array = [];
// for (let i = 0; i < hundred; i++){
// array.push(Math.floor(Math.random()*100));
// }
// return array
// };
// document.write(randoms(1))

//9.- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randoms (length, limit) {
//     let array = [];
//     for (let i = 0;  i < length; i++) {
//         array.push(Math.round(Math.random() * limit));
//     }
//     return array
// };
// document.write( randoms(5, 20))


//10.  Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse (number) {
    let number = [];
    for (let i = 1; i < length; i++) {

    }
}



//3.- створити функцію яка повертає найбільше число з масиву
//   let arraynumbers = [20, 50, 135, 2020 ];
//   function arraymaximum (arraynumbers) {
//       let max = arraynumbers[0];
//       for (let element of arraynumbers) {
//           if(element > max) {
//               max = element;
//           }
//       }
//  return max;
//   }
//   document.write(arraymaximum(arraynumbers))

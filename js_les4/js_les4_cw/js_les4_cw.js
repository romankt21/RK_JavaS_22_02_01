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
// function arrayminimum (arraymin) {
//     let min = (arraymin[0]);
//     for (const element of arraymin) {
//         if (element <min) {
//             min =element;
//         }
//     }
//     return min;
// }
// document.write(arrayminimum(arraymin))



//5. - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let summArray = [1,2,3,4]; // 10
// function sumElement (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         // sum += arrayElement; // // 1 спосіб скорочений
//         sum = arrayElement + sum;
//     }
//     return sum;
// }
// document.write(sumElement(summArray))


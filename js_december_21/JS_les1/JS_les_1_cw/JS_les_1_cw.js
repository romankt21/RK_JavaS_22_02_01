
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let res = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
//console.log(res)

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
//let book = {
//    name: 'Kolobok',
//    pages: 15,
//   genre: 'tale'
//}
//console.log(book);

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
//let book2 = {
 //   name: 'Ivasyk Telesyk',
 //   pages: 20,
 //   genre: 'tale',
//    author: 'people'
//}
//console.log(book2);


//4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
//let books = [book , book2]
//console.log(books)
//let books = [book , book2]
// console.log(books)

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.
//let height = 23;
//let widht = 10;
//let square = height * widht
//console.log(square)



//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//результат помістіть у змінну v.
//let h = 10;
//let d = 4;
//const P = 3.14;
//let cyl =( P * (Math.pow(d/2, 2))*h);
//console.log(cyl)


//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
//к=3*3+4*4
let q1 =(Math.pow (n, 2))+(Math.pow(m, 2));
let q = (Math.pow (q1, 0.5));
console.log(q);



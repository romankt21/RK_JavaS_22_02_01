//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let numbers = [1, 2, 3];
let res = numbers[0] + numbers[1] + numbers[2];
console.log(res);

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'Kolobok',
    pages: 15,
    genre: 'tale'
}
console.log(book);
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'Ivasyk Telesyk',
    pages: 20,
    genre: 'tale',
    author: 'people'
}
console.log(book2);

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [book , book2]
console.log(books)

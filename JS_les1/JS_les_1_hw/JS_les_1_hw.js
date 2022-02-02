//1. - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let h = 123;
// let i = 3.14;
// let j = 2.7;
// let k = 16;
// let l = true;
// let m = false;
//
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log(l);
// console.log(m);
//
// alert (a)
//if ( b === 'owu') (alert ('owu'))


// document.write(a + '<br>');
// document.write(b +';  ');
// document.write(c +';  ')
// document.write(d +';  ');
// document.write(e +';  ');
// document.write(f +';  ');
// document.write(g +';  ');
// document.write(h +';  ');
// document.write(i +';  ');
// document.write(j +';  ');
// document.write(k +';  ');
// document.write(l +';  ');
// document.write(m +';  ');

// 3. Переприсвоїти кожній змінній з завдання значення на довільне.
//Вивести кожну змінну за допомогою: console.log , alert, document.write
// a = 'hi';
// b = 'ok';
// c = 'in';
// d = 'viev';
// e = -1;
// f = -10;
// g = 999;
// h = -123;
// i = -3.14;
// j = -2.7;
// k = -16;
// l = 'plus';
// m = 'minus';
//
//
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log(l);
// console.log(m);
//
// document.write(a +';  ');
// document.write(b +';  ');
// document.write(c +';  ')
// document.write(d +';  ');
// document.write(e +';  ');
// document.write(f +';  ');
// document.write(g +';  ');
// document.write(h +';  ');
// document.write(i +';  ');
// document.write(j +';  ');
// document.write(k +';  ');
// document.write(l +';  ');
// document.write(m +';  ');

//3.Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Роман';
// let middleName = 'Ігорович';
// let lastName = 'Кутний'
//
// let person = (firstName + ' ' +  middleName  + ' ' +  lastName)
// console.log(person);




//4. - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".


// let firstnames = prompt('имя');
// let midlenames = prompt('по-батькові')
// let age = prompt('років')
// console.log( 'Вітаю '+firstnames + ' ' + midlenames +'.' + 'Тобі' + ' '+ age + ' '+ "років");
// console.log(`Вітаю ${firstnames}          ${midlenames}.Тобі ${age} років`);


//  let a = 100; let b = '100'; let c = true;
// let aa = 100;
// let bb = '100';
// let cc = true;
// console.log (typeof aa);
// console.log (typeof bb);
// console.log (typeof cc);

//6.	Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//    В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true


// console.log(5<6);
// console.log(5>6);
// console.log(5===6);
// console.log(5>=6);
// console.log(10===10);
// console.log(10>=10);
// console.log(10>10);
// console.log(10!==10);
// console.log(123==='123');
// console.log(123=='123');

//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//let str = "20";
//let a = 5;
//document.write(str + a + "<br/>");
//document.write(str - a + "<br/>");
//document.write(str * "2" + "<br/>");
//document.write(str / 2 + "<br/>");

let str = "20";
let a = 5;
document.write(str + a + "<br/>"); // '205'
document.write(str - a + "<br/>"); //15
document.write(str * "2" + "<br/>");//40
document.write(str / 2 + "<br/>"); //10


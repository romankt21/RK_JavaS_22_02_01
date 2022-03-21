//1. - створити довільний елеменет з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let click = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function () {
    click.style.display = 'none';
}


// let clik = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//      clik.style.display = 'none';
// }
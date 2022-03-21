//console.log(window.location);
// let user =  {name : 'vasya', age : 31, status : true}
// let users = JSON.stringify(user);
// console.log(user);
// console.log(users);
// let pars = JSON.parse(users);
// console.log(pars);

// localStorage.setItem('key1', 'value1');
// localStorage.setItem('key2', 'value2');
// localStorage.setItem('key3', 'value3');
// localStorage.setItem('key4', 'value4');
//
//
// let item1 = localStorage.getItem('key1');
// console.log(item1)
//
// localStorage.clear()
// console.log(localStorage.length)
//
// console.log(localStorage.key(0))
//
//localStorage.setItem('user', JSON.stringify({name: 'vasyl'}));

// console.log(localStorage.getItem('user'))

  // let users = [
  //   {id: 1, name: 'vasyl', age: 31 , status: false},
  //   {id: 2, name: 'roman', age: 41 , status: true},
  //   {id: 3, name: 'ivan', age: 40 , status: false},
  //   {id: 4, name: 'zorana', age: 35 , status: true}
  // ];
// for (const user of users) {
//   localStorage.setItem(user.id,JSON.stringify(user))
//   localStorage.setItem('user-$(user.id)',JSON.stringify(user));
//}
// localStorage.clear()

// +console.log(localStorage.length);
// for(let i = 0; i < localStorage.length; i++){
//   let key = localStorage.key(i);
//   let userJSON = localStorage.getItem(key);
//   localStorage.getItem(key);
//   console.log(JSON.parse(userJSON))
// }



// localStorage.setItem('users',JSON.stringify(users));
// let usersJSON = localStorage.getItem('users');
// console.log(usersJSON);
// let parseUsers = JSON.parse(usersJSON);
// console.log(parseUsers);
// let filter = parseUsers.filter(value => value.status);
// localStorage.setItem('users',JSON.stringify(filter))

// let products = [
//   {id:1, title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'},
//   {id:2, title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'},
//   {id:3, title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'},
//   {id:4, title: 'tea', price: 15, image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'}
// ]

// for (const product of products) {
//
// let divProduct = document.createElement('div');
// divProduct.innerText = product.title;
// let addToCartButton = document.createElement('button');
// addToCartButton.innerText = 'add to cart';
// divProduct.append(addToCartButton);
// addToCartButton.onclick = function () {
//   let products = localStorage.getItem('products');
//   if (!products) {
//     products = [];
//     products.push(product);
//     let stringify = JSON.stringify(products);
//     localStorage.setItem('products', stringify);
//   } else {
//     let realArrayOfProductsObject = JSON.parse(products);
//     realArrayOfProductsObject.push(product);
//     localStorage.setItem('products',JSON.stringify(realArrayOfProductsObject));
//
//   }
//}
//  document.body.append(divProduct)
//}

//document.cookie = 'name=kokos';
//document.cookie = 'surname=abrykos';
//console.log((document.cookie));
//let cookies = document.cookie.split(';');
//console.log(cookies);
//let firstCookie = cookies [0]
//console.log(firstCookie);

document.cookie = 'name=kokos';
document.cookie = 'surname=abrykos';
document.cookie = 'age=31';
document.cookie ='statustrue';
document.cookie = 'max-age=233';

let cookies = document.cookie.split(';');
  let obj = {};
for ( let i = 0; i < cookies.length; i++) {
  let cookie = cookies[i].split('0');
  obj[cookie[0]]=cookie[1];
}
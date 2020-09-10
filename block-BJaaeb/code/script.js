/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/
let labelElement = document.createElement('label');
let inputElement = document.createElement('input');
function createInputElm(label, type = "text"){
  labelElement.innerText = label; 
  inputElement.type = type;
  labelElement.append(inputElement)
  return labelElement;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
// for each element create a new li
// append the element(create text node)
//apend li to ul
let ul = document.createElement('ul');
// let createList =  array.forEach(element => {
//  let li = document.createElement('li');
//  let text = document.createTextNode(element);
//  li.append(element);
//  ul.append(li);
// });

function createList(arr){
  arr.forEach(element => {
    let li = document.createElement('li');
    let text = document.createTextNode(element);
    li.append(element);
    ul.append(li);
   });
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
// function createTodoList(arr){
//   arr.forEach(element => {
//     let para = document.createElement('p');
//     let name = document.createTextNode(element[0]);
//     para.append(name);
//   })

// }


// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);

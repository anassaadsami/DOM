// get element by class name
let k = document.getElementsByClassName("x");
console.log(k); // get all items in array
console.log(k[0]); // get first item but the element not the content
console.log(k[1]);

// get element by id name
let y = document.getElementById("y");
console.log(y); // whole the element
console.log(y.innerHTML); // the content

// get the element by tag name
let h1 = document.getElementsByTagName("h1");
// document.onload(function() {
        

console.log(h1);

// querySelector get the first element
let x = document.querySelector("h1"); // just the first element with tag name h1
console.log(x);

let obj1 = document.querySelector;

// querySelectorAll get all elements but by index we can get any element we want
let x1 = document.querySelectorAll("h1");
console.log(x1);
console.log(x1[2]); // use index to get specific element

let anas = `<div><h1> hello world </h1></div>`;
document.write(anas);
// console.log(anas.innerHTML); // undefine

console.log(document.getElementsByTagName('div')[3].innerHTML);
console.log(document.getElementsByTagName('div')[3].textContent);

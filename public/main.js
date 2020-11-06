const count = 42;

const main = () => {
  // write all our code here inside the main

  // Find the p tag
const ptag = document.querySelector('p');
console.log(ptag);

  // Change the p tag text into whatever is inside of the variable count
  ptag.textContent = count;

  // document.querySelector('h1').textContent += '?'
}


// function main() {
//   if (document.querySelector('h1.hello-world')) {
//     document.querySelector('h1.hello-world').textContent = 'Hello, World!'
//   }
// }

document.addEventListener('DOMContentLoaded', main)

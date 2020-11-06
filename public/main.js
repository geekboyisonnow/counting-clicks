let count = 0;

const counter = () => {
// The function does this:
// increment the value of count
count = count + 1

// change the p tag to show what is inside the variable count
const ptag = document.querySelector('p')
ptag.textContent = count;

}

const reset = event => {
  // const reset = (tacoTuesday) => {
  // tacoTuesday.preventDefault()
  
  // Don't do default functionality that this even would have done in this case the right click
  event.preventDefault()

  // Set the count to 0
  count = 0

  // Change the p tag to show what is inside the variable count
  const ptag = document.querySelector('p')
  ptag.textContent = count
}

const main = () => {
  // write all our code here inside the main

  // Find the p tag
  const ptag = document.querySelector('p')
  console.log(ptag)

  // Change the p tag text into whatever is inside of the variable count
  ptag.textContent = count

  // Anytime the user clicks on the button
  // - find the button
  const button = document.querySelector('button')
  console.log(button)

  // counter()
  // - tell the button any time you are clicked, call a function
  // ...
  button.addEventListener('click', counter)
  // MDN Right Click Event 'contextmenu'
  button.addEventListener('contextmenu', reset)

  // tell the p tag, any time you are clicked, call the reset function
  ptag.addEventListener('click', reset)
}


// function main() {
//   if (document.querySelector('h1.hello-world')) {
//     document.querySelector('h1.hello-world').textContent = 'Hello, World!'
//   }
// }

document.addEventListener('DOMContentLoaded', main)

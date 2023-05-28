// Import stylesheets
import './style.css';

// Write TypeScript code!


// interface myObject {
//   length : any,
//   push: Function,

// };

let myArray = {};
Object.defineProperty(myArray,'length', {
  get () {
    return Object.keys(this).length;
  },
  enumerable : false,

});


Object.defineProperty(myArray,'push', {
  value (data) {
    return this[this.length] = data;
  },
  enumerable : false,

});

myArray['0'] = 'Ravi';
myArray['1'] = 'Aman';
console.log(myArray);
console.log(myArray.length);

myArray.push('Pankaj');
console.log(myArray);
console.log(myArray.length);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
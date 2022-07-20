//declare variables
const message = 'I am running';
let isApproved = true;
let selectedColors = ['red', 'blue']; //array
selectedColors[2] = 'green';

function greet(name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName + '!')
}

function square(number) {
    return number * number;
}

console.log(square(2))

let person = { //creates a person object
    age: 30,
    name: 'Alex'
};

//bracket notation
// person['name'] = 'Alex'

greet('Alex', 'Diaz');
console.log(person.age)
console.log(selectedColors)
console.log(selectedColors.indexOf('green'))
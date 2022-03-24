let firstName: string = "Bob";
var container = document.getElementById("container");

/**String literal template */
var todo = {
    id: 123,
    name: "Pick up groceries",
    completed: true
}

var displayName =  `Todo #${todo.name}` //String literal template; use ${obj} to inject  value of obj (any js expression)
container.innerHTML = `class="${todo.completed? "": "hidden"}"` //use injected expression for ternary expression to hide a class if ternary expression evaluates to false

/**Optional parameters */

function countdown(initial, final = 0, interval = 1) { //final and interval are now optional parameters so that, when using function without indicating value for final and interval, their default value will be 0 and 1 accordingly;
    var current = initial;

    while(current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

countdown(10); // final = 0 and interval = 1

/**Variables */

//let - scope variable
//const - scope variable, constant

/**for... of loop */

var array = [
    "Buy bread",
    "Cook dinner",
    "Read a book"
];

for (var value of array) { //to loop through values of an array
    console.log(`${value}`);
}

/**Arrow function */

function counter (el) {
    this.count = 0;
    el.innerHTML = this.count;
    el.addEvantListener("click", () => { //arrow (lambda) function when "function" word is removed, and => is placed after parenthesis of the function. Helps this.count on the next line to refer initial this.count = 0;
        this.count += 1;
        el.innerHTML = this.count;
    } )
}

new counter(container);

/**Array distructuring */

var arr = [123, "Pick up groceries", false];
var [id, title, completed] = array; //destructuring an array arr to assign variable to values in array arr;

var a = 1;
var b = 5;
[a, b] = [b, a]; //another example of destructuring to flip values of 2 variables.

/**Spread operator */

function calculate(action, ...values) { //spread operator (...) is used to handle arrays with undefined number of values. Spread operator is always last parameter in ()
    let total = 0;

    for(let value of values) {
        switch(action) {
            case "add":
                total += value;
                break;
            case "substruct":
                total -= value;
                break;
        }
    }
    return total;
}

calculate("substruct", 1, 2, 3, 4, 5);

let arr1 = [0, 1, 2];
let arr2 = [...arr1, 3, 4, 5]; //using spread operator to insert an arr1 inside of arr2
let arr3 = [6, 7, 8];

arr2.push(...arr3); //using spread operator to concatinate arr2 and arr3

//to create and instantiate an object with defining function
var animal = {
    name: "Fred",
    species: "Dog",
    age:3,
    speak: function() {console.log("Woof");}
}

//passing variable "animal" to a function
//function doesn't check types - example of ducktyping
function theAnimalSpeaks(animal) {
    animal.speak();
}

theAnimalSpeaks(animal)

//type inference by typescript
//w/out specifying types, TS inferes what type is each of the parameters
var animal = {
    name: "Fred",
    species: "Dog",
    age: calculateAge(2019),
    speak: function() {
        console.log("Woof");
    }
}

function calculateAge(birthYear) {
    return Date.now() - birthYear;
}

//specifying types explicitly
function totalLength(x: any[], y: string): number {
    var total: number = x.length + y.length;
    return total;
}
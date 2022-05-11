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

//functions overload
function ttlLength(x: string, y: string): number
function ttlLength(x: any[], y: any[]): number
//union types using | - pipe operator
function ttlLength(x: (string | any[]), y: (string| any[])): number {
    var total: number = x.length + y.length;
    x.slice(0);

    if(x instanceof Array) {
        x.push("abc");
    }

    if(typeof x === "string") { //can also use x instanceof String
        x.substr(1)
    }
    
    return total;
}

//interfaces
interface toDo {
    name: string;
    completed?: boolean; //? - makes the property being optional
}

interface toDoService {
    add(todo: toDo): toDo;
    getAll(): toDo[];
    getById(toDoId: number): toDo;
    delete(toDoId:number): void;
}

var toDo: toDo = {
    name: "Laundry"
};

interface jQuery {
    (selector:string): HTMLElement;
    version: number;
}

//assigning function to a variable
var $ = <jQuery>function(selector) { //casting function to jQuery type
    //Find DOM element
}
$.version = 1.12;
var element = $("#container");

//extending interface:
//To extend interface to implement custom method, all we need is
//to create another interface with the same name, and add custom method there.
//Works well when we work with preexisting interfaces and need to add
//something specific to it

//enums
interface toDoList {
    name: string;
    state: number;
}

enum ToDoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

var list: toDoList = {
    name: "Shopping",
    state: ToDoState.New
}

function toDelete(todo: toDoList) {
    if(todo.state != ToDoState.Complete) {
        throw "Can't delete incomplete task"
    }
}

//anonymous types
function calcLength(x: {length: number}, y: {length: number}): number { //turn on ability to pass any data type that has length property, but still enable to add length of a string to a length of an array (no good)
    var total: number = x.length + y.length;
    return total;
}


//Classes
// function TodoServ() { //prototypical inheritance: Object.prototype; Array.prototype; Function.prototype
//     this.todos = [];
// }

// TodoServ.prototype.getAll = function() {
//     return this.todos;
// }

class TodoService {

    // todos: toDo[] = [];

    constructor( private todos: toDo[]) { //alternative way to initialize var and call it (instead of line 225 and line 228)
        // this.todos = [];
    }

    getAll() {
        return this.todos;
    }
}

//static variables
// var lastId = 0; //global variable that is now we have to avoid
//static variable are better to be avoid. Use them only if a variable has to be unique across all application
class TobeDone {
    static lastId: number = 0;

    constructor( private todos: toDo[]) { 

    }

    static getNextId() {
        return TobeDone.lastId +=1;
    }

    var(todo: toDo) {
        var NewId = TobeDone.getNextId();
    }
}
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
var firstName = "Bob";
var container = document.getElementById("container");
/**String literal template */
var todo = {
    id: 123,
    name: "Pick up groceries",
    completed: true
};
var displayName = "Todo #".concat(todo.name); //String literal template; use ${obj} to inject  value of obj (any js expression)
container.innerHTML = "class=\"".concat(todo.completed ? "" : "hidden", "\""); //use injected expression for ternary expression to hide a class if ternary expression evaluates to false
/**Optional parameters */
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current > final) {
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
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) { //to loop through values of an array
    var value = array_1[_i];
    console.log("".concat(value));
}
/**Arrow function */
function counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEvantListener("click", function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new counter(container);
/**Array distructuring */
var arr = [123, "Pick up groceries", false];
var id = array[0], title = array[1], completed = array[2]; //destructuring an array arr to assign variable to values in array arr;
var a = 1;
var b = 5;
_a = [b, a], a = _a[0], b = _a[1]; //another example of destructuring to flip values of 2 variables.
/**Spread operator */
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value_1 = values_1[_a];
        switch (action) {
            case "add":
                total += value_1;
                break;
            case "substruct":
                total -= value_1;
                break;
        }
    }
    return total;
}
calculate("substruct", 1, 2, 3, 4, 5);
var arr1 = [0, 1, 2];
var arr2 = __spreadArray(__spreadArray([], arr1, true), [3, 4, 5], false); //using spread operator to insert an arr1 inside of arr2
var arr3 = [6, 7, 8];
arr2.push.apply(arr2, arr3); //using spread operator to concatinate arr2 and arr3
//to create and instantiate an object with defining function
var animal = {
    name: "Fred",
    species: "Dog",
    age: 3,
    speak: function () { console.log("Woof"); }
};
//passing variable "animal" to a function
//function doesn't check types - example of ducktyping
function theAnimalSpeaks(animal) {
    animal.speak();
}
theAnimalSpeaks(animal);
//type inference by typescript
//w/out specifying types, TS inferes what type is each of the parameters
var animal = {
    name: "Fred",
    species: "Dog",
    age: calculateAge(2019),
    speak: function () {
        console.log("Woof");
    }
};
function calculateAge(birthYear) {
    return Date.now() - birthYear;
}
//specifying types explicitly
function totalLength(x, y) {
    var total = x.length + y.length;
    return total;
}

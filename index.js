// Import stylesheets
import './style.css';

//JavaScript closures
function greeting() {
  var message = 'Hi';
  function sayHi() {
    console.log(message);
  }
  return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable
//More JavaScript Closure example
function greeting(message) {
  return function (name) {
    return message + ' ' + name;
  };
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');
console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John
//JavaScript closures in a loop
for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log('after ' + index + ' second(s):' + index);
  }, index * 1000);
}
//1) Using the IIFE solution
for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      //console.log('AAAfter ' + index + ' second(s):' + index);
    }, index * 1000);
  })(index);
}
//2) Using let keyword in ES6
for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log('After ' + index + ' second(s):' + index);
  }, index * 1000);
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var person = {
  firstName: 'Yasar',
  lastName: 'Doe',
};
function greet(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`;
}
let result = greet.apply(person, ['Hello', 'How are you?']);
//console.log(result);
let result1 = greet.call(person, 'Hello', 'How are you?');
//console.log(result1);
const computer = {
  name: 'MacBook',
  isOn: false,
  turnOn() {
    //console.log(this);
    this.isOn = true;
    return `The ${this.name} is On`;
  },
  turnOff() {
    ///console.log(this);
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};
const server = {
  name: 'Dell PowerEdge T30',
  isOn: false,
};
let resul = computer.turnOn.apply(server);
//console.log(resul);
let res = computer.turnOff.call(server);
//console.log(res);

function myFunction() {
  alert('I am an alert box!');
}
var person1 = {
  name: 'John Doe',
  getName: function () {
    console.log(this.name);
  },
};
let f = person1.getName;
setTimeout(f, 1000);
let ff = person1.getName();
setTimeout(ff, 1000);
let fff = person1.getName();
setTimeout(fff, 1000);

var btn = document.getElementById('but');
var button = document.getElementById('butt');
var list = document.getElementById('test');

button.addEventListener('click', (event) => {
  button.textContent = `Click count: ${event.detail}`;
});

btn.onclick = function () {
  btn.style.color = 'red';
};

document.querySelector('#test').addEventListener('click', function (event) {
  alert('test');
});

document.querySelectorAll('.list').forEach((element) => {
  element.addEventListener(
    'mouseover',
    function (event) {
      event.target.style.color = 'orange';
    },
    false
  );
  element.addEventListener(
    'mouseleave',
    function (event) {
      event.target.style.color = 'black';
    },
    false
  );
});

btn.addEventListener('click', (event) => {
  btn.textContent = `Click count: ${event.detail}`;
});

var Arr = ['Sathick', 'Basha', 'BSc', '25'];
Arr.forEach((val, index, arr) => {
  //console.log(index, val);
});

// Operator
// Assign =
// Assign == true | false
// const resign
// === Data |
// == checking Value
// 01
// 'Yasar'
// Number == Only
// String == Anthing with quotes
// false || True == Boolean
// null || undefined
// Object = Json | Array | function |

var value1 = 10,
  value2 = false;
//console.log(typeof value1, typeof value2);

if (value1 == value2) {
  //console.log(true);
  //console.log(typeof value1, typeof value2);
} else {
  //console.log(false);
}

let email = null;
['Yasar', 'Siva', 'Durai', 'Srini'].forEach((val, index, arr) => {
  if (index == 0) {
    email = val;
  }
  let entry = document.createElement('li');
  entry.textContent = val;
  list.append(entry);
});
//console.log(email);

var num1 = 10,
  num2 = 10;
//console.log(num1 >= num2);

var COUNT = 0;
var print = function () {
  console.log(COUNT);
  COUNT++;
};
function TIME_OUT_MODULE() {
  var Obj = [setTimeout, setInterval];
  //var SET = Obj[0](print, 1500);
  var INERT = Obj[1](print, 100);
  if (COUNT == 50) {
    clearInterval(INERT);
  }
}

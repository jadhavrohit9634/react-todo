// function add (a,b) {
//   return a + b;
// }
//
// console.log(add(3, 5));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Rohit'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final)

var person = ['Rohit', 25];
var personTwo = ['Logan', 45];

function spreadTut (name, age) {
  console.log('Hello ' + name + '.You are ' + age);
}

spreadTut(...person);
spreadTut(...personTwo);

var names = ['Logan', 'Wolverine'];
var final = [...names, 'Andrew'];

final.forEach(function(name){
  console.log('Hi ' + name);
});

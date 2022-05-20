"use strict";

//We will learn scope of a variable.
//1. var keyword is function scope variable.
//2. let & const is block level scope.

/*---------------------------------------------------------*/
//We have all the Arrays Method.
var names = ['Afreen', 'Nayla', 'Sheeba', 'Zuber', 'Huma', 'Uzema', 'Maria', 'Naushin', 'Shirin']; //1. We will use ES6- for..of loop.

console.log("-------------------Using for..of loop------------------------");

for (var _i = 0, _names = names; _i < _names.length; _i++) {
  var n = _names[_i];
  console.log("Names are ".concat(n));
} //2. We will use ES6 forEach- it does not change the original array.


console.log("-------------------Using forEach loop------------------------");
names.forEach(function (n, i) {
  console.log("Names at ".concat(i, " are ").concat(n));
}); //3. We will use arraow operator

console.log("-------------------Using forEach loop Arrow Operator------------------------");
names.forEach(function (n, i) {
  console.log("Names at ".concat(i, " are ").concat(n));
}); //4. We will use ES6 Filter to filter records based on condition. It will return

console.log("-------------------Using filter()------------------------");
var data = names.filter(function (n, i) {
  return n.startsWith('N');
});
console.log("Names starts with 'N' = ".concat(data)); //5. We will use find() to return first match

console.log("-------------------Using find()------------------------");
var data2 = names.find(function (n) {
  return n.startsWith('N');
});
console.log("Names starts with 'N' using find() = ".concat(data2)); //6. We will use map() to modify an array.

console.log("-------------------Using map()------------------------");
var data3 = names.map(function (n, i) {
  if (n.length > 4) {
    n = n.toUpperCase(); //we are modifying the array

    return n;
  }
});
console.log("Names after modifying ".concat(data3)); //7.We will learn reduce() method 

console.log("-------------------Using reduce()------------------------");
var employees = [{
  empNo: '101',
  empName: 'Huma',
  empSalary: 4000,
  age: 20
}, {
  empNo: '102',
  empName: 'Sheeba',
  empSalary: 5000,
  age: 20
}, {
  empNo: '103',
  empName: 'Nayla',
  empSalary: 6000,
  age: 10
}, {
  empNo: '104',
  empName: 'Uzema',
  empSalary: 7000,
  age: 90
}]; // let sum = 0;
// employees.forEach((emp)=>{
//     sum +=emp.empSalary;
// });
// console.log(`Total Salary is using forEach() ${sum}`);

var totalSal = employees.reduce(function (sum, emp) {
  return sum + emp.empSalary;
}, 0);
console.log("Total salary using reduce() ".concat(totalSal));
var result = employees.reduce(function (groupedEmployee, emp) {
  var age = emp.age;
  if (emp[age] == null) groupedEmployee[age] = [];
  groupedEmployee[age].push(emp);
  return groupedEmployee.length;
}, {});
console.log("Group by age ".concat(JSON.stringify(result)));

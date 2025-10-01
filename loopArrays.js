//Task 1 - Number Checker
let num = 1;
if(num > 0){
    console.log("Positive number.")
}
else if (num < 0){
    console.log("Negative number.");
}
else if (num === 0){
    console.log("The number is zero.");
}



//Task 2 - Shopping Cart (Objects + Loops)

let cart = {
    fish: 10,
    salt: 2,
    oil: 3
};
for (let key in cart) { //Number 1
    console.log(key, "=", cart[key]);
}



//Task 2 = Calculating the total cost of all items - Number 2

let cart = {
    fish: 10,
    salt: 2,
    oil: 3
};

let total = 0;

for (let value of Object.values(cart)){
    total += value;
}
console.log(total);

if (total > 20){  //Task 2 - Number 3
    console.log("You spent a lot!")
}
else {
    console.log("You spent wisely.")
}



//Task 3 - Employee Report

let employees = [ //Number 1
    {name:"Ama", age: 25, salary: "1200"},
    {name:"Kofi", age: 30, salary: "800"},
    {name:"Esi", age: 28, salary: "1500"}
];

for (let key in employees){ //Task 3 - Number 2
    console.log(key, ":", employees[key]);
}

if (employees.salary >= 1000){
    console.log("Good salary")
}
else {
    console.log("Needs review")
}

let highestSalary = 0; //Number 3

for (let i = 0; i < employees.length; i++){
    if (employees[i].salary > highestSalary){
        highestSalary = +employees[i].salary;
    }
}

console.log("Esi's Salary is", highestSalary);


//Number 4
let totalSalaries = 0;

for (let i = 0; i < employees. length; i++){
    totalSalaries += Number(employees[i].salary);  
}

let averageSalary = totalSalaries / employees.length;

console.log("The average salary of all employees is", averageSalary);
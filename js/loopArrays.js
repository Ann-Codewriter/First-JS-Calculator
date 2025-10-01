//Task 1 - Number Checker
let num = 0;
if(num > 0){
    console.log("Positive number.")
}
else if (num < 0){
    console.log("Negative number.")
}
else {
    console.log("The number is zero.")
}



// Task 2 - Shopping Cart (Objects + Loops)

let cart = {
    fish: 10,
    salt: 7,
    oil: 9
};
for (let key in cart) { //Number 1
    console.log(key, "=", cart[key]);
}

//Task 2 = Calculating the total cost of all items - Number 2

let total = 0;

for (let key in cart){
    total += cart[key];
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
    {name:"Ama", age: 25, salary: 1200},
    {name:"Kofi", age: 30, salary: 800},
    {name:"Esi", age: 28, salary: 1500}
];

let highestSalary = 0;

for (let i = 0; i < employees.length; i++){
    console.log(employees[i].name,":", employees[i].salary);

    if(employees[i].salary >= 1000){
        console.log("Good salary")
        }
        else {
            console.log("Needs review")
        }
        console.log("");

        if (employees[i].salary > highestSalary){
            highestSalary = employees[i].salary;
        }
    }

     console.log("Esi's salary is", highestSalary);


//Number 4
let totalSalaries = 0;

for (let i = 0; i < employees.length; i++){
    totalSalaries += Number(employees[i].salary);  
}

let averageSalary = totalSalaries / employees.length;

console.log("The average salary of all employees is", averageSalary);
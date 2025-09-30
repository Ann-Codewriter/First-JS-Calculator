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


//Task 2 - Number 3


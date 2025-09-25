// Task 1
let student = {
    name: "Ama",
    age: 16,
    grade: 81,
    likeCoding: true,
};

console.log(student);

//Task 2

if(student.grade >= 90){
    console.log("A")
}
else if(student.grade >= 80){
    console.log("Ama's letter grade is B")
}
else if(student.grade >= 70){
    console.log("C")
}
else if (student.grade >= 60){
    console.log("D")
}
else {
    console.log("F")
}

//Task 3

if (student.likeCoding === true){
    student.careerGoal = "Software Engineer"
}
else {
    student.careerGoal = "Not sure yet"
}

console.log(student);
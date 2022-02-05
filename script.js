"use strict";
const button = document.querySelector("button");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MEMBER"] = 1] = "MEMBER";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
const person = {
    name: "Tunde",
    age: 21,
    hobby: ["Dancing", "Singing"],
    role: [1, "Admin"],
    level: Role.ADMIN
};
// Working with union types
const combine = (input1, input2) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
// Passing type to function
const substract = (num1, num2) => {
    return num1 - num2;
};
// function as types
let customSubstract;
customSubstract = substract;
// function types & callbacks
const addWithCallbacks = (num1, num2, callBack) => {
    const result = num1 + num2;
    return callBack(result);
};
// Working with OOP
class Department {
    constructor(name) {
        this.name = name;
        this.getName = () => {
            console.log(this.name);
        };
    }
}
const department = new Department("Computer Science");
class Course extends Department {
    constructor(name, courseTitle) {
        super(name);
        this.courseTitle = courseTitle;
    }
}
class Student {
    constructor(firstName, lastName) {
        this._startExam = () => { };
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class College extends Student {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this._startExam = () => {
            console.log(this.firstName, " ", this.lastName, " started exam");
        };
    }
    get startExam() {
        this._startExam();
        return this.firstName;
    }
}
College.addPupil = (name) => {
    return [name];
};
const college = new College("Abayomi", "Olatunji");
// Using interface
button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(add(+num1.value, +num2.value));
    console.log(combine("Max", 2));
    console.log(substract(5, 3));
    console.log(customSubstract(6, 4));
    addWithCallbacks(5, 10, (result) => console.log("My result", result));
    department.getName();
    console.log(college.startExam);
    console.log(College.addPupil("Tunde"));
});

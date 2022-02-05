const button = document.querySelector("button")!;
const num1 = document.getElementById("num1")! as HTMLInputElement
const num2 = document.getElementById("num2")! as HTMLInputElement

function add(num1: number, num2: number) {
    return num1 + num2
}

enum Role {
    ADMIN,
    MEMBER,
    USER
}

const person: {
    name: string;
    age: number;
    hobby: string[];
    role: [number, string];
    level: number
} = {
    name: "Tunde",
    age: 21,
    hobby: ["Dancing", "Singing"],
    role: [1, "Admin"],
    level: Role.ADMIN
}

// custom types
type Combine = number | string;

// Working with union types
const combine = (input1: number | string, input2: number | string) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
}

// Passing type to function
const substract = (num1: number, num2: number): number => {
    return num1 - num2
}


// function as types
let customSubstract: (a: number, b: number) => number
customSubstract = substract

// function types & callbacks
const addWithCallbacks = (num1: number, num2: number, callBack: (num: number) => void): void => {
    const result = num1 + num2
    return callBack(result)
}

// Working with OOP
class Department {
    constructor(private readonly name: string) { }

    getName = (): void => {
        console.log(this.name);
    }
}

const department = new Department("Computer Science");

class Course extends Department {
    constructor(name: string, public courseTitle: string) {
        super(name);
    }
}

abstract class Student {
    protected firstName: string;
    protected lastName: string;

    protected _startExam = (): void => { };

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class College extends Student {
    static pupils: string[];

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    protected _startExam = (): void => {
        console.log(this.firstName, " ", this.lastName, " started exam");
    };

    get startExam(): string {
        this._startExam();
        return this.firstName;
    }

    static addPupil = (name: string): string[] => {
        return [name];
    }
}

const college = new College("Abayomi", "Olatunji");

// Using interface
interface Person {
    name: string;
    age?: number; //optional

    great(phrase: string): void
}

let user1: Person = {
    name: "Abayomi",
    age: 28,
    great(phrase: string) {
        console.log(this.name + " " + phrase + " " + this.age)
    }
}


// ADVANCED TYPING CONCEPTS
// Intersection Types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee; //intercept

const el1: ElevatedEmployee = {
    name: "Bayo",
    privileges: ["create"],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const a: Universal = 10;

// Type Guard
type UnknownEmployee = Employee | Admin;

// Discriminated Unions
interface Bird {
    type: "bird"; // literal type
    flyingspedd: number;
}

interface Horse {
    type: "horse"; // literal type
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingspedd;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }

    console.log("Moving at speed: " + speed);
}

// Type Casting
// const inputCasting = <HTMLInputElement> document.getElementById("casting")!; //Method 1
const inputCasting = document.getElementById("casting")! as HTMLInputElement; // Method 2

inputCasting.value = "Bayo";

// Index Properties
interface ErrorContainer {
    // for error message display
    [props: string]: string;
}

const error: ErrorContainer = {
    email: "Not a valid email"
}

// Function Overload declaring functions and its parameter in different to suit JS methods or properties
function addNum(a: number, b: number): number;
function addNum(a: string, b: string): string;
function addNum(a: number | string, b: number | string) {
    if (typeof (a) === "string" || typeof (b) === "string") {
        return a.toString() + " " + b.toString();
    } else {
        return a + b;
    }
}


button.addEventListener("click", function (e) {
    e.preventDefault()
    console.log(add(+num1.value, +num2.value))
    console.log(combine("Max", 2))
    console.log(substract(5, 3))
    console.log(customSubstract(6, 4))
    addWithCallbacks(5, 10, (result) => console.log("My result", result))
    department.getName();
    console.log(college.startExam);
    console.log(College.addPupil("Tunde"));

    moveAnimal({
        type: "bird",
        flyingspedd: 10
    })
})
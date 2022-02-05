// GENERICS
// whenever we see a type like this Array<T>, then it is a generic type
// const names: Array<string> = ['Max', 'Manuel'];
const names: Array<string | number> = ['Max', 'Manuel', 1];

// Promise Type
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 2000);
})

promise.then((data) => {
    // data.split(" ");
})

// Creating a Generic Function
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge<object, object>({
    name: "Max"
}, {
    age: 30
})

// adding constraints to a generic type
function mergeTwo<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// e.g
interface Lenghty {
    length: number
}

function addAndDescribe<T extends Lenghty>(element: T) {
    let describe;
    if (element.length === 1) {
        describe = "You got 1 element"
    } else if (element.length > 1) {
        describe = `You got ${element.length} elements`;
    }
    return [element, describe];
}

// Adding keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { //key must be a property of the object T
    return obj[key];
}

//  GENERIC CLASSES
class Staff<T> {
    name: T;

    constructor(name: T) {
        this.name = name;
    };
}

const staff = new Staff<string>("Abayomi");

// Generic utility
// Usign Partials for Object with granular definistiong
interface Course {
    title: string,
    desc: string;
}

function createCourse (title: string, desc: string): Course {
    let course: Partial<Course> = {}; //make properties in Course optional
    course.title = title;
    course.desc = desc;

    return course as Course;
}
export const javaInformation = {
    topics: [
        {
            name: "Object-Oriented Programming (OOP)",
            subtopics: [
                {
                    name: "Class & Object",
                    description:
                        "A class is a blueprint for creating objects, and an object is an instance of a class.",
                    example: `
class Car {
    String brand = "Toyota";
}`,
                },
                {
                    name: "Encapsulation",
                    description:
                        "Wrapping data (variables) and code (methods) into a single unit and restricting direct access.",
                    example: `
class Person {
    private String name;
    
    public void setName(String newName) {
        name = newName;
    }
    
    public String getName() {
        return name;
    }
}`,
                },
                {
                    name: "Inheritance",
                    description:
                        "Acquiring properties and behavior from another class using extends.",
                    example: `
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}`,
                },
                {
                    name: "Polymorphism",
                    description:
                        "A method behaves differently based on the object that invokes it.",
                    example: `
class Animal {
    void makeSound() {
        System.out.println("Animal sound");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow");
    }
}`,
                },
            ],
        },
        {
            name: "Data Types",
            subtopics: [
                {
                    name: "Primitive Data Types",
                    description:
                        "Basic data types like int, double, char, and boolean.",
                    example: `
int num = 10;
double pi = 3.14;
boolean flag = true;`,
                },
                {
                    name: "Non-Primitive Data Types",
                    description:
                        "Reference types like String, Array, and Class.",
                    example: `
String message = "Hello, Java!";`,
                },
            ],
        },
        {
            name: "Control Statements",
            subtopics: [
                {
                    name: "Conditional Statements",
                    description:
                        "Used for decision-making (if, if-else, switch).",
                    example: `
int age = 18;
if (age >= 18) {
    System.out.println("Adult");
}`,
                },
                {
                    name: "Looping Statements",
                    description:
                        "Used to execute statements repeatedly (for, while, do-while).",
                    example: `
for(int i = 0; i < 5; i++) {
    System.out.println("Loop " + i);
}`,
                },
            ],
        },
        {
            name: "Exception Handling",
            subtopics: [
                {
                    name: "Try-Catch",
                    description: "Used to handle runtime errors.",
                    example: `
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}`,
                },
                {
                    name: "Finally Block",
                    description:
                        "A block that always executes regardless of an exception.",
                    example: `
try {
    int arr[] = new int[5];
    arr[10] = 50;
} finally {
    System.out.println("Finally block executed");
}`,
                },
            ],
        },
        {
            name: "Multithreading",
            subtopics: [
                {
                    name: "Thread Class",
                    description:
                        "A way to execute multiple threads concurrently.",
                    example: `
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}`,
                },
                {
                    name: "Runnable Interface",
                    description:
                        "Another way to create threads using Runnable.",
                    example: `
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread is running");
    }
}`,
                },
            ],
        },
        {
            name: "Generics",
            subtopics: [
                {
                    name: "Generic Classes",
                    description:
                        "Allows creating classes with type parameters.",
                    example: `
class Box<T> {
    private T value;
    public void setValue(T value) { this.value = value; }
    public T getValue() { return value; }
}`,
                },
            ],
        },
        {
            name: "Lambda Expressions",
            subtopics: [
                {
                    name: "Functional Interfaces",
                    description:
                        "Interfaces with a single abstract method can be used with lambda expressions.",
                    example: `
@FunctionalInterface
interface MyFunction {
    void execute();
}
MyFunction func = () -> System.out.println("Hello Lambda!");`,
                },
            ],
        },
        {
            name: "Java Streams API",
            subtopics: [
                {
                    name: "Filtering Elements",
                    description:
                        "Streams allow filtering elements based on a condition.",
                    example: `
List<String> names = Arrays.asList("John", "Jane", "Jack");
names.stream().filter(name -> name.startsWith("J")).forEach(System.out::println);`,
                },
            ],
        },
    ],
    videoPath: "/mnt/data/javatutu.mp4",
};

export const pythonInformation = {
    topics: [
        {
            name: "Object-Oriented Programming (OOP)",
            subtopics: [
                {
                    name: "Class & Object",
                    description:
                        "A class in Python is defined using the 'class' keyword, and an object is an instance of a class.",
                    example: `
class Car:
    def __init__(self, brand):
        self.brand = brand
`,
                },
                {
                    name: "Encapsulation",
                    description:
                        "Encapsulation in Python is achieved by prefixing attributes with an underscore to indicate they are protected.",
                    example: `
class Person:
    def __init__(self, name):
        self._name = name

    def set_name(self, new_name):
        self._name = new_name

    def get_name(self):
        return self._name
`,
                },
                {
                    name: "Inheritance",
                    description:
                        "Inheritance allows a class to inherit attributes and methods from another class.",
                    example: `
class Animal:
    def sound(self):
        print("Animal makes a sound")

class Dog(Animal):
    def bark(self):
        print("Dog barks")
`,
                },
                {
                    name: "Polymorphism",
                    description:
                        "Polymorphism in Python allows methods to be overridden, enabling different behaviors based on the object.",
                    example: `
class Animal:
    def make_sound(self):
        print("Animal sound")

class Cat(Animal):
    def make_sound(self):
        print("Meow")
`,
                },
            ],
        },
        {
            name: "Data Types",
            subtopics: [
                {
                    name: "Built-in Data Types",
                    description:
                        "Common data types in Python include int, float, bool, and str.",
                    example: `
num = 10
pi = 3.14
flag = True
message = "Hello, Python!"
`,
                },
                {
                    name: "Collections Data Types",
                    description:
                        "Python provides collections like list, tuple, dict, and set.",
                    example: `
numbers = [1, 2, 3, 4]
info = { "name": "John", "age": 30 }
`,
                },
            ],
        },
        {
            name: "Control Statements",
            subtopics: [
                {
                    name: "Conditional Statements",
                    description:
                        "Used for decision-making with if, elif, and else.",
                    example: `
age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")
`,
                },
                {
                    name: "Looping Statements",
                    description:
                        "Python supports for loops and while loops for repeated execution.",
                    example: `
for i in range(5):
    print("Loop", i)
`,
                },
            ],
        },
        {
            name: "Exception Handling",
            subtopics: [
                {
                    name: "Try-Except",
                    description:
                        "Used to catch and handle exceptions during runtime.",
                    example: `
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
`,
                },
                {
                    name: "Finally Block",
                    description:
                        "The finally block always executes regardless of whether an exception occurred.",
                    example: `
try:
    f = open("file.txt")
except IOError:
    print("File not found!")
finally:
    print("Cleanup resources")
`,
                },
            ],
        },
        {
            name: "Multithreading",
            subtopics: [
                {
                    name: "Threading Module",
                    description:
                        "Python supports multithreading using the threading module.",
                    example: `
import threading

def worker():
    print("Thread is running")

t = threading.Thread(target=worker)
t.start()
`,
                },
            ],
        },
        {
            name: "Lambda Functions",
            subtopics: [
                {
                    name: "Basic Lambda",
                    description:
                        "Lambda functions provide a concise way to create anonymous functions.",
                    example: `
add = lambda a, b: a + b
print(add(5, 3))
`,
                },
            ],
        },
        {
            name: "List Comprehensions",
            subtopics: [
                {
                    name: "Filtering and Transformation",
                    description:
                        "List comprehensions offer a concise method to generate lists with filtering or transformations.",
                    example: `
numbers = [1, 2, 3, 4, 5]
squares = [x*x for x in numbers if x > 2]
print(squares)
`,
                },
            ],
        },
        {
            name: "Decorators",
            subtopics: [
                {
                    name: "Function Decorators",
                    description:
                        "Decorators in Python are used to modify the behavior of a function.",
                    example: `
def my_decorator(func):
    def wrapper():
        print("Before function execution")
        func()
        print("After function execution")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
`,
                },
            ],
        },
        {
            name: "Modules & Packages",
            subtopics: [
                {
                    name: "Importing Modules",
                    description:
                        "Modules and packages help organize and reuse code in Python.",
                    example: `
import math
print(math.sqrt(16))
`,
                },
            ],
        },
    ],
    videoPath: "/mnt/data/pythontutu.mp4",
};

export const javascriptInformation = {
    topics: [
        {
            name: "Variables and Data Types",
            subtopics: [
                {
                    name: "Variables",
                    description:
                        "Declaring variables using var, let, and const.",
                    example: `
let name = "John";
const age = 30;
var isActive = true;
                    `,
                },
                {
                    name: "Data Types",
                    description:
                        "Common data types include string, number, boolean, null, undefined, and object.",
                    example: `
let message = "Hello, JavaScript!";
let count = 10;
let flag = false;
let data = null;
let items = [1, 2, 3];
                    `,
                },
            ],
        },
        {
            name: "Functions",
            subtopics: [
                {
                    name: "Function Declaration",
                    description:
                        "Defining functions using the function keyword.",
                    example: `
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet("Alice"));
                    `,
                },
                {
                    name: "Arrow Functions",
                    description:
                        "A concise syntax for writing functions using the arrow syntax.",
                    example: `
const add = (a, b) => a + b;
console.log(add(5, 3));
                    `,
                },
            ],
        },
        {
            name: "Control Flow Statements",
            subtopics: [
                {
                    name: "Conditional Statements",
                    description:
                        "Using if, else if, and else to control the flow.",
                    example: `
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
                    `,
                },
                {
                    name: "Looping Statements",
                    description:
                        "Using loops like for, while, and do-while to iterate.",
                    example: `
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
}
                    `,
                },
            ],
        },
        {
            name: "Object-Oriented Programming (OOP)",
            subtopics: [
                {
                    name: "Objects",
                    description:
                        "Creating objects using object literals or constructors.",
                    example: `
const car = {
    brand: "Toyota",
    model: "Corolla",
    start: function() {
        console.log("Car started");
    }
};
car.start();
                    `,
                },
                {
                    name: "Classes",
                    description: "Using ES6 classes to create objects.",
                    example: `
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(\`Hello, my name is \${this.name}\`);
    }
}
const person = new Person("Alice", 25);
person.greet();
                    `,
                },
            ],
        },
        {
            name: "Asynchronous Programming",
            subtopics: [
                {
                    name: "Callbacks",
                    description:
                        "Handling asynchronous operations using callback functions.",
                    example: `
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}
fetchData((data) => {
    console.log(data);
});
                    `,
                },
                {
                    name: "Promises",
                    description:
                        "Managing asynchronous operations with Promises.",
                    example: `
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});
promise.then(result => console.log(result))
       .catch(error => console.error(error));
                    `,
                },
                {
                    name: "Async/Await",
                    description:
                        "Writing asynchronous code in a synchronous style using async/await.",
                    example: `
async function getData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getData();
                    `,
                },
            ],
        },
        {
            name: "DOM Manipulation",
            subtopics: [
                {
                    name: "Selecting Elements",
                    description:
                        "Using methods like querySelector to select DOM elements.",
                    example: `
const element = document.querySelector("#myElement");
console.log(element);
                    `,
                },
                {
                    name: "Updating Content",
                    description:
                        "Modifying the content and attributes of DOM elements.",
                    example: `
const element = document.getElementById("header");
element.textContent = "Updated Header";
                    `,
                },
            ],
        },
        {
            name: "Event Handling",
            subtopics: [
                {
                    name: "Adding Event Listeners",
                    description: "Using addEventListener to handle events.",
                    example: `
document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked!");
});
                    `,
                },
            ],
        },
        {
            name: "ES6 Features",
            subtopics: [
                {
                    name: "Template Literals",
                    description: "Using backticks for string interpolation.",
                    example: `
const name = "Alice";
console.log(\`Hello, \${name}!\`);
                    `,
                },
                {
                    name: "Destructuring",
                    description:
                        "Extracting values from arrays or objects using destructuring.",
                    example: `
const person = { name: "Bob", age: 30 };
const { name, age } = person;
console.log(name, age);
                    `,
                },
            ],
        },
        {
            name: "Error Handling",
            subtopics: [
                {
                    name: "Try-Catch",
                    description: "Handling errors using try-catch blocks.",
                    example: `
try {
    let result = riskyOperation();
} catch (error) {
    console.error("An error occurred:", error);
}
                    `,
                },
            ],
        },
        {
            name: "Modules",
            subtopics: [
                {
                    name: "Import/Export",
                    description: "Organizing code using ES6 modules.",
                    example: `
// In math.js
export function add(a, b) {
    return a + b;
}

// In main.js
import { add } from './math.js';
console.log(add(5, 3));
                    `,
                },
            ],
        },
    ],
    videoPath: "/mnt/data/javascripttutu.mp4",
};

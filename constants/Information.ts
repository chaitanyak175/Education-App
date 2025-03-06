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

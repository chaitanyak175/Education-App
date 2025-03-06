export const javaInformation = {
    topics: [
        {
            name: "Object-Oriented Programming (OOP)",
            subtopics: [
                {
                    name: "Class & Object",
                    description:
                        "A class is a blueprint for creating objects, and an object is an instance of a class.",
                    example: 'class Car { String brand = "Toyota"; }',
                },
                {
                    name: "Encapsulation",
                    description:
                        "Wrapping data (variables) and code (methods) into a single unit and restricting direct access.",
                    example:
                        "class Person { private String name; public void setName(String newName) { name = newName; } public String getName() { return name; } }",
                },
                {
                    name: "Inheritance",
                    description:
                        "Acquiring properties and behavior from another class using extends.",
                    example:
                        'class Animal { void sound() { System.out.println("Animal makes a sound"); } } class Dog extends Animal { void bark() { System.out.println("Dog barks"); } }',
                },
                {
                    name: "Polymorphism",
                    description:
                        "A method behaves differently based on the object that invokes it.",
                    example:
                        'class Animal { void makeSound() { System.out.println("Animal sound"); } } class Cat extends Animal { void makeSound() { System.out.println("Meow"); } }',
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
                    example:
                        "int num = 10; double pi = 3.14; boolean flag = true;",
                },
                {
                    name: "Non-Primitive Data Types",
                    description:
                        "Reference types like String, Array, and Class.",
                    example: 'String message = "Hello, Java!";',
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
                    example:
                        'int age = 18; if (age >= 18) { System.out.println("Adult"); }',
                },
                {
                    name: "Looping Statements",
                    description:
                        "Used to execute statements repeatedly (for, while, do-while).",
                    example:
                        'for(int i = 0; i < 5; i++) { System.out.println("Loop " + i); }',
                },
            ],
        },
        {
            name: "Exception Handling",
            subtopics: [
                {
                    name: "Try-Catch",
                    description: "Used to handle runtime errors.",
                    example:
                        'try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Cannot divide by zero!"); }',
                },
                {
                    name: "Finally Block",
                    description:
                        "A block that always executes regardless of an exception.",
                    example:
                        'try { int arr[] = new int[5]; arr[10] = 50; } finally { System.out.println("Finally block executed"); }',
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
                    example:
                        'class MyThread extends Thread { public void run() { System.out.println("Thread is running"); } }',
                },
                {
                    name: "Runnable Interface",
                    description:
                        "Another way to create threads using Runnable.",
                    example:
                        'class MyRunnable implements Runnable { public void run() { System.out.println("Runnable thread is running"); } }',
                },
            ],
        },
        {
            name: "Collections Framework",
            subtopics: [
                {
                    name: "List Interface",
                    description:
                        "Ordered collection of elements (ArrayList, LinkedList).",
                    example:
                        'ArrayList<String> list = new ArrayList<>(); list.add("Java");',
                },
                {
                    name: "Set Interface",
                    description:
                        "Unordered collection with unique elements (HashSet, TreeSet).",
                    example:
                        "HashSet<Integer> set = new HashSet<>(); set.add(10);",
                },
            ],
        },
        {
            name: "File Handling",
            subtopics: [
                {
                    name: "Reading a File",
                    description: "Using FileReader or Scanner to read files.",
                    example: 'Scanner sc = new Scanner(new File("data.txt"));',
                },
                {
                    name: "Writing a File",
                    description: "Using FileWriter to write into a file.",
                    example:
                        'FileWriter writer = new FileWriter("output.txt"); writer.write("Hello");',
                },
            ],
        },
        {
            name: "JDBC (Java Database Connectivity)",
            subtopics: [
                {
                    name: "Establishing Connection",
                    description: "Connecting Java to a database using JDBC.",
                    example:
                        'Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/db", "user", "pass");',
                },
                {
                    name: "Executing Queries",
                    description:
                        "Using Statement or PreparedStatement to run queries.",
                    example:
                        "Statement stmt = con.createStatement(); stmt.executeUpdate(\"INSERT INTO users VALUES (1, 'John')\");",
                },
            ],
        },
        {
            name: "Lambda Expressions",
            subtopics: [
                {
                    name: "Basic Lambda Expression",
                    description:
                        "A concise way to implement functional interfaces.",
                    example:
                        'interface Sayable { void say(); } Sayable s = () -> System.out.println("Hello!");',
                },
                {
                    name: "Lambda with Parameters",
                    description: "Lambda expressions can take arguments.",
                    example: "(int a, int b) -> { return a + b; }",
                },
            ],
        },
        {
            name: "Streams API",
            subtopics: [
                {
                    name: "Filtering Data",
                    description: "Used for processing collections efficiently.",
                    example:
                        'list.stream().filter(str -> str.startsWith("J")).forEach(System.out::println);',
                },
                {
                    name: "Mapping Data",
                    description: "Transforming elements using map().",
                    example:
                        "list.stream().map(str -> str.toUpperCase()).forEach(System.out::println);",
                },
            ],
        },
    ],
    videoPath: "/mnt/data/javatutu.mp4",
};

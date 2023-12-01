// CalculatorApp.js
const Calculator = require('./Calculator');

const calculator = new Calculator();

console.log("\nMenu:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your choice: ", (choice) => {
    if (choice >= 1 && choice <= 4) {
        const num1 = parseFloat(readline.question("Enter the first number: "));
        const num2 = parseFloat(readline.question("Enter the second number: "));

        switch (parseInt(choice)) {
            case 1:
                console.log(`Result: ${calculator.add(num1, num2)}`);
                break;
            case 2:
                console.log(`Result: ${calculator.subtract(num1, num2)}`);
                break;
            case 3:
                console.log(`Result: ${calculator.multiply(num1, num2)}`);
                break;
            case 4:
                console.log(`Result: ${calculator.divide(num1, num2)}`);
                break;
            default:
                console.log("Invalid choice. Please enter a valid option.");
        }
    } else if (choice == 5) {
        console.log("Exiting the application. Goodbye!");
    } else {
        console.log("Invalid choice. Please enter a valid option.");
    }

    rl.close();
});

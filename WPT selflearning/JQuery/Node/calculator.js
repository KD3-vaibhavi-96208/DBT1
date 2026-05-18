const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}


function mul(a, b) {
    return a * b;
}


function div(a, b) {
    return a / b;
}


rl.question("Enter first number: ", (num1) => {

    rl.question("Enter second number: ", (num2) => {

        rl.question(
            "Choose operation (+, -, *, /): ",
            (operation) => {

                let a = parseFloat(num1);
                let b = parseFloat(num2);

                switch (operation) {

                    case '+':
                        console.log("Addition =", add(a, b));
                        break;

                    case '-':
                        console.log("Subtraction =", sub(a, b));
                        break;

                    case '*':
                        console.log("Multiplication =", mul(a, b));
                        break;

                    case '/':
                        console.log("Division =", div(a, b));
                        break;

                    default:
                        console.log("Invalid Operation");
                }

                rl.close();
            }
        );
    });
});
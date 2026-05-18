function first() {
    console.log("First Function");
}

function second() {

    setTimeout(() => {
        console.log("Second Function with Timeout");
    }, 2000);
}

function third() {
    console.log("Third Function");
}

function promiseFunction() {

    Promise.resolve().then(() => {
        console.log("Promise Executed");
    });
}

console.log("Start");

first();
second();
third();
promiseFunction();

console.log("End");
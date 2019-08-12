// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sum(a, b) {
    if(b === "sheep") {
        return false;
    }
    return a + b;
}
// testing
function sayHello(input) {
    if(input === undefined || typeof input === "boolean") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}
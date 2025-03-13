function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
console.log(multiply(5, 3));   // Output: 15
console.log(divide(5, 3));     // Output: 1.6666666666666667
console.log(divide(5, 0));     // Output: Error: Division by zero
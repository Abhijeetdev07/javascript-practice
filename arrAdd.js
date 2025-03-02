function addNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [5, 10, 15, 20.45,47,2];
const result = addNumbers(numbers);

console.log(`The sum of ${numbers.join(', ')} is ${result}`);

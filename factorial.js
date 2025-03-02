// factorial calculatr

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


const number = 64;
factorial = `The factorial of ${number} is ${factorial(number)}`
console.log(factorial);
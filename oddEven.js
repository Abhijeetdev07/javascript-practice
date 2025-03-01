function checkOddEven(numbers) {
    const result = {
        odd: [],
        even: []
    };

    numbers.forEach(number => {
        if (number % 2 === 0) {
            result.even.push(number);
        } else {
            result.odd.push(number);
        }
    });

    return result;
}


const numbers = [10, 7, 3, 4, 8, 15,19,87,81,24];
const result = checkOddEven(numbers);
console.log("Even numbers:", result.even); 
console.log("Odd numbers:", result.odd);
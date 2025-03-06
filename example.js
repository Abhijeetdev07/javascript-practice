let user = prompt("Enter the number of rows: ");

function generatePattern(rows) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let index = 0;
    let result = '';

    for (let i = 1; i <= rows; i++) {
        for (let j = 0; j < i; j++) {
            result += alphabet[index % 26] + ' ';
            index++;
        }
        result = result.trim() + '\n';
    }

    return result;
}

output = generatePattern(user);

console.log(output);
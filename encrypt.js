const str = "Abhijeet";

function alternateEncrypt(str) {
    let result = '';
    let shift = 1;
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (/[a-zA-Z]/.test(char)) {
            let code = char.charCodeAt(0);
            let isLowerCase = char === char.toLowerCase();
            
            if (isLowerCase) {
                code = char.charCodeAt(0) + (shift % 26);  
                if (code > 122) { code -= 26; } 
            } else {
                code = char.charCodeAt(0) + (shift % 26);  
                if (code > 90) { code -= 26; }  
            }
            
            result += String.fromCharCode(code);
        } else {
            result += char;  
        }

        shift = -shift + 2;
    }

    return result;
}

console.log(alternateEncrypt(str)); 

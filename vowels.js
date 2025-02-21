const inputString = "Abhijeet";

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
      }
    }
    
    return vowelCount;
  }
  
  console.log(countVowels(inputString));  
  
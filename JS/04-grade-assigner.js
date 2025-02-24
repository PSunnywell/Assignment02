let num = prompt('Enter a number between 1 and 100.');
let parsedNum = parseInt(num);
if (parsedNum < 1 || parsedNum > 100) {
  alert ('The number entered must be between 1 and 100. Please try again.'); 
} else if (parsedNum < 60) {
    console.log ('You received an F.');
} else if (parsedNum >= 60 && parsedNum <= 69) {
console.log ('You received a D.');
} else if (parsedNum >= 70 && parsedNum <= 79) {
    console.log ('You received a C.');
} else if (parsedNum >= 80 && parsedNum <= 89) {
    console.log ('You received a B.');  
} else if (parsedNum >= 90 && parsedNum <= 100) {
    console.log ('You received an A.');
}
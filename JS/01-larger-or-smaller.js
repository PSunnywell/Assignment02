let num1 = parseInt(prompt ('Enter your first number'));
let num2 = parseInt(prompt ('Enter your second number'));
let result;
if (num1 > num2) {
result = 'The larger number is ' + num1;
} else if (num2 > num1) {
result = 'The larger number is ' + num2;
} else {
result = 'The numbers are equal to one another.'
}
alert(result);
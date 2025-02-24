let coinFlip = Math.round(Math.random());
let choice = prompt ('Choose heads or tails');
let result;
if (coinFlip < .25) {
    result = 'heads';
} else {
    result = 'tails';
}
if (result === 'heads' && choice === 'heads') {
    alert ('The flip was heads and you chose heads...you win!');
} else if (result === 'heads' && choice === 'tails') {
    alert('The flip was heads but you chose tails...you lose!');
} else if (result === 'tails' && choice === 'tails') {
    alert('The flip was tails and you chose tails...you win!');
} else if (result === 'tails' && choice === 'heads') {
    alert('The flip was tails but you chose heads...you lose!');
} else {
    alert(`You must enter 'Heads' or 'Tails'. Try again.`);
}   
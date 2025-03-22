let input = document.querySelector('.input-box');
let lastDigit = '';
let answer = '';

input.focus();

function calc() {
  input = document.querySelector('.input-box');
  answer = eval(input.value);
  input.value = answer;
  input.focus();
}

function numberWork(number) {
  input = document.querySelector('.input-box');
  input.value += number; 
}

function clears() {
  input = document.querySelector('.input-box');  
  input.value = '';
  input.focus();  
}

function removal() {
  lastDigit = (input.value[input.value.length -1]);
  input.value = input.value.slice(0, -1);
  console.log(input.value);
}

function reciprocal() {
  lastDigit = (parseFloat(input.value[input.value.length -1]));
  input = document.querySelector('.input-box');  
  let reciprocated = (1/lastDigit);
  input.value = reciprocated;
  input.focus();
 
}

function signChange() {
  input = document.querySelector('.input-box');   
  let signChanged = parseFloat(input.value[input.value.length -1]) * -1;
  input.value[input.value.length -1] = signChanged;
  console.log(input.value[input.value.length -1] = signChanged)
  answer = eval(input.value);
  input.value = answer;
  input.focus();
  }


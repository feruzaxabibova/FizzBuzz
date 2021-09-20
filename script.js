var elForm = document.querySelector('.form-js');
var elInput = document.querySelector('.input-js');
var elResult = document.querySelector('.result')

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var inputNum = parseInt(elInput.value.trim(), 10);
    var mesText = "";

    if (inputNum % 3 === 0 && inputNum % 5 === 0) {
        mesText += 'FizzBuzz';
    } else if (inputNum % 3 === 0) {
        mesText += 'Fizz';
    } else if (inputNum % 5 === 0) {
        mesText += 'Buzz';
    } else {
        inputNum;
    }

    elResult.textContent = mesText || inputNum;
});
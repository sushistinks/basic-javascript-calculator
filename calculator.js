let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
displayCalculation();

function updateCalculation(number) {
  if (number === undefined || isNaN(number) && number !== '.' && number !== '+' && number !== '-' && number !== '*' && number !== '/') {
    displayError('Error: Invalid input');
    return;
  }
  
  calculation += number;
  displayCalculation();
  localStorage.setItem('calculation', JSON.stringify(calculation));
}

function displayCalculation() {
  document.querySelector('.calculation-stage').innerHTML = calculation; 
  localStorage.setItem('calculation', JSON.stringify(calculation));
}

function displayError(message) {
  document.querySelector('.calculation-stage').innerHTML = `<span style="color: red;">${message}</span>`;
}

function evaluateCalculation() {
  try {
    let result = eval(calculation);
    if (isNaN(result) || result === undefined) {
      displayError('Error: Invalid calculation');
      return;
    }
    calculation = String(result);
    displayCalculation();
  } catch (error) {
    displayError('Error: Invalid calculation');
  }
}

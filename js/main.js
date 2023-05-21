let currentValueElm = null
let firstValue = ''
let currentCalculatedValue = ''
let currentOperation = ''
let currentCalculatedValueLabel = ''
let decimalFlag = false

const currentOperationSet = () => {
  decimalFlag = false
  firstValue = currentCalculatedValue
  currentCalculatedValue = ''
}

const buttonClicked = (button) => {
  switch (button) {
    case 'AC':
      allClear()
      break

    case '+/-':
      //console.log('+/- button clicked')
      break

    case '%':
      currentOperation = 'MODULO'
      currentOperationSet()
      break

    case '/':
      currentOperation = 'DIVIDE'
      currentOperationSet()
      break
    case 'x':
      currentOperation = 'MULTIPLY'
      currentOperationSet()
      break

    case '-':
      currentOperation = 'SUBTRACT'
      currentOperationSet()
      break

    case '+':
      currentOperation = 'ADD'
      currentOperationSet()
      break

    case '=':
      calculate()
      break

    case '.':
      if (decimalFlag !== null) {
        decimalFlag = true
      }
      break

    default:
      //console.log(`${button} button clicked`)
      numberButtonPressed(button)
      break
  }
  currentValueElm.innerText = currentCalculatedValueLabel
}

const numberButtonPressed = (button) => {
  if (decimalFlag === true) {
    decimalFlag = null
    currentCalculatedValueLabel = currentCalculatedValue + '.' + button
    currentCalculatedValue = parseFloat(currentCalculatedValueLabel)
  } else {
    currentCalculatedValue = currentCalculatedValue + button
    currentCalculatedValueLabel = currentCalculatedValue
  }
}

const calculate = () => {
  console.log('currentOperation: ', currentOperation)
  switch (currentOperation) {
    case 'ADD':
      currentCalculatedValue =
        parseFloat(firstValue) + parseFloat(currentCalculatedValue)
      break

    case 'SUBTRACT':
      currentCalculatedValue =
        parseFloat(firstValue) - parseFloat(currentCalculatedValue)
      break

    case 'DIVIDE':
      currentCalculatedValue =
        parseFloat(firstValue) / parseFloat(currentCalculatedValue)
      break

    case 'MULTIPLY':
      currentCalculatedValue =
        parseFloat(firstValue) * parseFloat(currentCalculatedValue)
      break

    case 'MODULO':
      currentCalculatedValue =
        parseFloat(firstValue) % parseFloat(currentCalculatedValue)
      break
  }
  currentCalculatedValueLabel = currentCalculatedValue
}

const allClear = () => {
  currentCalculatedValue = ''
  currentOperation = ''
  currentValueElm.innerText = ''
  currentCalculatedValueLabel = ''
  decimalFlag = false
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container')
  currentValueElm = document.getElementById('currentValue')
  container.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('cell')) {
      buttonClicked(target.textContent)
    }
  })
})

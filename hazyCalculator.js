function isSkippedValue(value) {
  return !value
}

function isNumericValue(value) {
  return !isNaN(value)
}

function isNothingValue(value) {
  return value === null
}

function isAcceptableValue(value) {
  const operators = ['+', '-', '*', '/']
  return typeof value === 'Number' || operators.includes(value)
}

function performCalculationStep(firstOperand, operator, secondOperand) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand
    case '-':
      return firstOperand - secondOperand
    case '*':
      return firstOperand * secondOperand
    case '/':
      return firstOperand / secondOperand
    default:
      throw new Error('Error 01!') // KMC: Differentiated the error that gets thrown
  }
}

export function calculate(calculationSteps) {
  var total
  var operator

  calculationSteps.forEach(nextCalculationStep => {
    if (!isAcceptableValue(nextCalculationStep)) {
      throw new Error('Error 02!') // KMC: Differentiated the error that gets thrown
    }

    if (isNothingValue(total) && isNumericValue(nextCalculationStep)) {
      total = Number(nextCalculationStep)

    } else if (isNothingValue(operator) && !isSkippedValue(nextCalculationStep)) {
      operator = nextCalculationStep

    } else if (isNumericValue(nextCalculationStep)) {
      total = performCalculationStep(total, operator, Number(nextCalculationStep))
      operator = null

    } else if (!isSkippedValue(nextCalculationStep)) {
      throw new Error('Error 03!') // KMC: Differentiated the error that gets thrown
    }
  })

  return total
}

import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);

  switch (operation) {
    case '+':
      return n1.plus(n2);
    case '-':
      return n1.minus(n2);
    case 'x':
      return n1.multiply(n2);
    case '÷':
      return n1.div(n2);
    default:
      return null;
  }
};

export default operate;

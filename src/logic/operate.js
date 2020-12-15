import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);

  switch (operation) {
    case '+':
      return n1.plus(n2).toString();
    case '-':
      return n1.minus(n2).toString();
    case 'x':
      return n1.times(n2).toString();
    case '÷':
      return n1.div(n2).toString();
    default:
      return 'error';
  }
};

export default operate;

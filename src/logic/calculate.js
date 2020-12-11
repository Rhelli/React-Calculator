import operate from './operate';

const calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;

  switch (buttonName) {
    case '+/-':
      if (operation) {
        return {
          total,
          next: operate(next, -1, 'x'),
          operate,
        };
      }
      return {
        total: operate(total, -1, 'x'),
        next,
        operate,
      };

    case '%':
      if (operation) {
        const preCalc = operate(total, next, operation);
        return {
          total: operate(preCalc, 100, '÷'),
          next: null,
          operation: null,
        };
      }
      return {
        total: operate(total, 100, '÷'),
        next,
        operation,
      };

    case '=':
      if (operation) {
        return {
          total: operate(total, next, operation),
          next,
          operation: null,
        };
      }
      return {
        total,
        next,
        operation,
      };

    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    default:
      return null;
  }
};

export default calculate;

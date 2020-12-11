import Operate from './operate';

const Calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;

  switch (buttonName) {
    case '+/-':
      if (operation) {
        return {
          total,
          next: Operate(next, -1, 'x'),
          operate,
        }
      }
      return {
        total: Operate(total, -1, 'x'),
        next,
        operate,
      }

    case '%':
      if (operation) {
        let preCalc = Operate(total, next, operation);
        return {
          total: Operate(preCalc, 100, '÷'),
          next: null,
          operation: null,
        }
      }
      return {
        total: Operate(total, 100, '÷'),
        next,
        operation
      }

    case '=':
      if (operation) {
        return {
          total: Operate(total, next, operation),
          next,
          operation: null
        }
      }
      return {
        total,
        next,
        operation
      }

    case 'AC':
      return {
        total: null,
        next: null,
        operation: null
      }
  }
}

export default Calculate;

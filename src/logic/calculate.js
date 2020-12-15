import Operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  let preCalc;
  const operatorSymbols = ['+', '-', '÷', 'x'];

  const operationExists = operator => operatorSymbols.includes(operator);

  if (buttonName === '+/-') {
    if (operation) {
      return {
        total,
        next: Operate(next, -1, 'x'),
        operation,
      };
    }
    return {
      total: Operate(total, -1, 'x'),
      next,
      operation,
    };
  }

  if (buttonName === '%') {
    if (operation) {
      preCalc = Operate(total, next, operation);
      return {
        total: Operate(preCalc, 100, '÷'),
        next: null,
        operation: null,
      };
    }
    preCalc = Operate(total, 100, '÷');
    return {
      total: preCalc,
      next,
      operation,
    };
  }

  if (buttonName === '=') {
    if (operation) {
      return {
        total: Operate(total, next, operation),
        next: null,
        operation: null,
      };
    }
    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName === 'AC') {
    if (next && operation) {
      return {
        total,
        next: '0',
        operation,
      };
    }
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (operationExists(buttonName)
    && ((total && !operation) || (!next && operation))) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (operationExists(buttonName) && total && operation) {
    return {
      total: Operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName.match(/\d/)) {
    if (!operation) {
      if (!total || total === '0' || total === 'Error') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (!next || next === '0') {
      next = buttonName;
    } else {
      next += buttonName;
    }
    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName === '.' && (total || next)) {
    if (!next && !total.includes('.')) {
      total += '.';
      return {
        total,
        next,
        operation,
      };
    } if (!next.includes('.')) {
      next += '.';
      return {
        total,
        next,
        operation,
      };
    }
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;

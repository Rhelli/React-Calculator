import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next } = dataObject;
  const { operation } = dataObject;
  const operatorSymbols = ['+', '-', '÷', 'x'];
  const operationExists = operator => operatorSymbols.includes(operator);

  if (buttonName === '+/-') {
    if (operation) {
      return {
        total,
        next: operate(next, -1, 'x'),
        operation,
      };
    }
    return {
      total: operate(total, -1, 'x'),
      next,
      operation,
    };
  }

  if (buttonName === '%') {
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
  }

  if (buttonName === '=') {
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

  if (operationExists(buttonName) && ((total && !operation) || (!next && operation))) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (operationExists(buttonName) && total && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName.match(/\d/)) {
    if (!operation) {
      if (!total || total === '0' || total === null) {
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
    }
    if (!next.includes('.')) {
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

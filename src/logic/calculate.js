const calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;

  if (buttonName === '+/-') {
    return {
      total,
      next,
      operation
    }
  }
}

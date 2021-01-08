import Calculate from '../calculate';

describe('The calculate function', () => {
  it('Will wipe the total, next and operation if the AC button is pressed', () => {
    expect(Calculate({ total: 0, next: 12, operation: '+' }, 'AC'))
      .toEqual({ total: null, next: null, operation: null });
  });

  it('Will transform the number to a negative when the +/- button is pressed', () => {
    expect(Calculate({ total: 888, next: null, operation: null }, '+/-'))
      .toEqual({ total: '-888', next: null, operation: null });
  });

  it('Will transform a number to a percentage of 100 when the % is pressed', () => {
    expect(Calculate({ total: 8, next: null, operation: null }, '%'))
      .toEqual({ total: '0.08', next: null, operation: null });
  });

  it('Will provide the user with the total when the  = button is pressed', () => {
    expect(Calculate({ total: 8, next: 880, operation: '+' }, '='))
      .toEqual({ total: '888', next: null, operation: null });

    expect(Calculate({ total: 8, next: 4, operation: '-' }, '='))
      .toEqual({ total: '4', next: null, operation: null });

    expect(Calculate({ total: 8, next: null, operation: null }, '='))
      .toEqual({ total: 8, next: null, operation: null });
  });
});

import Operate from '../operate';

describe('The operate function', () => {
  it('Will sum two numbers together', () => {
    expect(Operate(1, 1, '+')).toEqual('2');
    expect(Operate(11, 12, '+')).toBe('23');
  });

  it('Will subtract two numbers from each other', () => {
    expect(Operate(3, 2, '-')).toBe('1');
    expect(Operate(3, 4, '-')).toBe('-1');
  });

  it('Will multiply two numbers', () => {
    expect(Operate(3, 2, 'x')).toBe('6');
    expect(Operate(1, 1, 'x')).toBe('1');
  });

  it('Will divide one number by another', () => {
    expect(Operate(2, 1, '÷')).toBe('2');
    expect(Operate(20, 2, '÷')).toBe('10');
  });
});

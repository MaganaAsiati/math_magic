import calculate from '../../logic/calculate';

describe('test functionality of calculate', () => {
  it('should return null', () => {
    const obj = {
      total: 8,
      next: 9,
      operation: '+',
    };
    const result = calculate(obj, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('should return sum', () => {
    const obj = {
      total: 6,
      next: 4,
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({ next: null, operation: null, total: '10' });
  });
});

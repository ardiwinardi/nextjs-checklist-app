import { stringToDate } from './date.util';
describe('date util', () => {
  it('input with string non date', () => {
    const result = stringToDate('ahmad');
    expect(result).not.toBeInstanceOf(Date);
  });

  it('input with string not valid date', () => {
    const result = stringToDate('2012/20/20');
    expect(result).not.toBeInstanceOf(Date);
  });

  it('input with string valid date', () => {
    const result = stringToDate('2023/1/1');
    expect(result).toBeInstanceOf(Date);
  });
});

import { classNames } from '../classNames';

describe('classNames', () => {
  test('test', () => {
    expect(true).toBe(true);
  });
  test('with first param', () => {
    const expected = 'someClass class1';
    expect(classNames('someClass', {}, ['class1'])).toBe(expected);
  });
});

import { incrementCount } from './dummy.component';

describe('incrementCount', () => {
  it('should increment the count by 1', () => {
    expect(incrementCount(0)).toBe(1);
    expect(incrementCount(1)).toBe(2);
    expect(incrementCount(5)).toBe(6);
  });
});

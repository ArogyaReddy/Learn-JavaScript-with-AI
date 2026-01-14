const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Utils', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
      expect(add(-10, 5)).toBe(-5);
    });

    test('should add decimals correctly', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    test('should throw error for non-numbers', () => {
      expect(() => add('a', 5)).toThrow(TypeError);
      expect(() => add(5, null)).toThrow(TypeError);
      expect(() => add(undefined, 5)).toThrow(TypeError);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(10, 7)).toBe(3);
    });

    test('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
      expect(subtract(0, 10)).toBe(-10);
    });

    test('should throw error for non-numbers', () => {
      expect(() => subtract('a', 5)).toThrow(TypeError);
      expect(() => subtract(5, {})).toThrow(TypeError);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(5, 4)).toBe(20);
    });

    test('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 10)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should throw error for non-numbers', () => {
      expect(() => multiply([], 5)).toThrow(TypeError);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(divide(6, 2)).toBe(3);
      expect(divide(10, 5)).toBe(2);
    });

    test('should handle decimals', () => {
      expect(divide(5, 2)).toBe(2.5);
      expect(divide(1, 3)).toBeCloseTo(0.333, 2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error for non-numbers', () => {
      expect(() => divide('10', 2)).toThrow(TypeError);
      expect(() => divide(10, '2')).toThrow(TypeError);
    });
  });

  describe('Edge cases', () => {
    test('should handle very large numbers', () => {
      const large = 999999999;
      expect(add(large, 1)).toBe(1000000000);
      expect(multiply(large, 2)).toBe(1999999998);
    });

    test('should handle very small numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });
  });
});

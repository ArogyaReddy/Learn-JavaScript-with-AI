const { isValidEmail, getEmailDomain, sanitizeEmail } = require('./email');

describe('Email Utils', () => {
  describe('isValidEmail', () => {
    test('should validate correct email addresses', () => {
      expect(isValidEmail('user@example.com')).toBe(true);
      expect(isValidEmail('test.user@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.com')).toBe(true);
    });

    test('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('user @example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });

    test('should handle non-string inputs', () => {
      expect(isValidEmail(null)).toBe(false);
      expect(isValidEmail(undefined)).toBe(false);
      expect(isValidEmail(123)).toBe(false);
      expect(isValidEmail({})).toBe(false);
    });

    test('should trim whitespace before validation', () => {
      expect(isValidEmail('  user@example.com  ')).toBe(true);
    });
  });

  describe('getEmailDomain', () => {
    test('should extract domain from valid email', () => {
      expect(getEmailDomain('user@example.com')).toBe('example.com');
      expect(getEmailDomain('test@domain.co.uk')).toBe('domain.co.uk');
    });

    test('should return null for invalid email', () => {
      expect(getEmailDomain('invalid')).toBe(null);
      expect(getEmailDomain('user@')).toBe(null);
      expect(getEmailDomain('')).toBe(null);
    });

    test('should handle whitespace', () => {
      expect(getEmailDomain('  user@example.com  ')).toBe('example.com');
    });
  });

  describe('sanitizeEmail', () => {
    test('should trim and lowercase email', () => {
      expect(sanitizeEmail('  USER@EXAMPLE.COM  ')).toBe('user@example.com');
      expect(sanitizeEmail('Test@Domain.Com')).toBe('test@domain.com');
    });

    test('should throw error for non-string input', () => {
      expect(() => sanitizeEmail(null)).toThrow(TypeError);
      expect(() => sanitizeEmail(123)).toThrow(TypeError);
      expect(() => sanitizeEmail({})).toThrow(TypeError);
    });

    test('should preserve valid characters', () => {
      expect(sanitizeEmail('user+tag@example.com')).toBe('user+tag@example.com');
    });
  });
});

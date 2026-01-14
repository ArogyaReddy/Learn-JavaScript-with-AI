/**
 * Email validation utility
 */

/**
 * Validates if a string is a valid email address
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email, false otherwise
 */
function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Extracts domain from email address
 * @param {string} email - Email address
 * @returns {string|null} Domain or null if invalid
 */
function getEmailDomain(email) {
  if (!isValidEmail(email)) {
    return null;
  }

  const parts = email.trim().split('@');
  return parts[1];
}

/**
 * Sanitizes email by trimming and lowercasing
 * @param {string} email - Email to sanitize
 * @returns {string} Sanitized email
 */
function sanitizeEmail(email) {
  if (typeof email !== 'string') {
    throw new TypeError('Email must be a string');
  }

  return email.trim().toLowerCase();
}

module.exports = {
  isValidEmail,
  getEmailDomain,
  sanitizeEmail
};

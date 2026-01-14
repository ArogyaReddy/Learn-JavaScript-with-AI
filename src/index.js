/**
 * Main Application Entry Point
 */

const { add, subtract, multiply, divide } = require('./utils/calculator');
const { isValidEmail, sanitizeEmail, getEmailDomain } = require('./utils/email');

// Export main functionality
module.exports = {
  calculator: {
    add,
    subtract,
    multiply,
    divide
  },
  email: {
    isValidEmail,
    sanitizeEmail,
    getEmailDomain
  }
};

// Browser support
if (typeof window !== 'undefined') {
  window.LearnJavaScript = module.exports;
}

console.log('Learn JavaScript with AI - Application initialized');

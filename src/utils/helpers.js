const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

function formatResponse(data) {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

module.exports = { validateEmail, formatResponse };

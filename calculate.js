// W5 S3 - Challenge

// Main Equations 

const addition = (num1, num2) => {
  return num1 + num2;
};

const subtraction = (num1, num2) => {
  return num1 - num2;
};

const division = (num1, num2) => {
  if (num2 === 0) {
    return ' ERROR! You cannot divide by Zero';
  }
  return num1 / num2;
};

const multiplication = (num1, num2) => {
  return num1 * num2;
};

module.exports = { addition, subtraction, division, multiplication };
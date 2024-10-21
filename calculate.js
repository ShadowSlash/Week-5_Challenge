// W5 S3 - Challenge

// Main Equations 

function addition(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error('ERROR! Input must use valid numbers.');
  }
  return num1 + num2;
};

const subtraction = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error('ERROR! Input must use valid numbers.');
  }
  return num1 - num2;
};

const division = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error('ERROR! Input must use valid numbers.');
  }
  if (num2 === 0) {
    return 'ERROR! You cannot divide by Zero';
  }
  return num1 / num2;
};

const multiplication = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error('ERROR! Input must use valid numbers.');
  }
  return num1 * num2;
};

module.exports = { addition, subtraction, division, multiplication };
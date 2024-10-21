// W5 S3 - Challenge

// Required code
const fs = require("fs");
const path = require("path");
const equationInput = process.argv.slice(2); // This returns a copy of the message input field as an array
const filePath = path.join(__dirname, "storedInfo.txt");

// Grabing the functions from "calculate" file
const calculated = require("./calculate");

// This destructures the message array with 3 new variables. "num1", "opp", "num2".
let [num1, opp, num2] = equationInput;
let passThrough = true

// These two lines parse (convert) the string values into a number.
num1 = Number(num1);
num2 = Number(num2);

try {
  nonNumbers(num1, num2);
  nonOpp(opp);
}
catch (error) {
  console.log(error.message);
  passThrough = false
}

if (passThrough) {
  switch (opp) {
    case "+":
      result = calculated.addition(num1, num2);
    break;
    
    case "-":
      result = calculated.subtraction(num1, num2);
    break;

    case "/":
      result = calculated.division(num1, num2);
    break;

    case "*":
      result = calculated.multiplication(num1, num2);
    break;
  };

  const equationLine = `${num1} ${opp} ${num2} = ${result}\n`;


  function writeToFile(filePath = filePath, equationLine) {
      fs.appendFile(filePath, equationLine, (err) => {
        if (err) {
          console.error("Error appending to the log file:", err);
        } else {
          console.log("Equation written to storedInfo.txt successfully!");
        }

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading the file:", err);
          return;
        }
        console.log("Content of storedInfo.txt:");
        console.log(data);
      });
    });
  }

writeToFile(filePath, equationLine);
};

// Error messaging for invalid inputs.
function nonNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("ERROR! Input must use valid numbers.")
  }
}

function nonOpp(opp) {
  if (!["+", "-", "/", "*"].includes(opp)) {
    throw new Error("ERROR! Input must use valid operators.")
  }
}
module.exports = { nonNumbers, nonOpp };
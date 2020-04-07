const buttonsContainer = document.querySelector(".buttons");
const opDisp = document.querySelector(".op-display");
const disp = document.querySelector(".display");
let operation = "";
let sw = false; // switch to know if an operation is active or not

function howManyDots(str) {
  if (str.length % 3 === 0) {
    return parseInt(str.length / 3 - 1);
  } else {
    return parseInt(str.length / 3);
  }
}

buttonsContainer.addEventListener("click", function (event) {
  // checking if a button was clicked inside the container
  if (event.target.tagName === "BUTTON") {
    if (
      !isNaN(event.target.innerText) ||
      (event.target.innerText === "." && !disp.innerText.includes("."))
    ) {
      if (disp.innerText === "0") {
        disp.innerText = event.target.innerText;
      } else {
        if (sw === true) {
          disp.innerText = "";
          disp.innerText += event.target.innerText;
          sw = false;
        } else {
          disp.innerText += event.target.innerText;
        }
      }
    } else if (event.target.innerText === "AC") {
      disp.innerText = "0";
      operation = "";
      opDisp.innerText = "";
      sw = false;
    } else if (event.target.innerText === "+/-" && disp.innerText !== "0") {
      if (!disp.innerText.includes("-")) {
        disp.innerText = "-" + disp.innerText;
      } else {
        disp.innerText = disp.innerText.replace("-", "");
      }
    } else if (
      // add and substract
      event.target.innerText === "+" ||
      event.target.innerText === "-"
    ) {
      if (sw !== true) {
        operation += disp.innerText + event.target.innerText;
        opDisp.innerText = operation;
        sw = true;
        disp.innerText = eval(operation.substring(0, operation.length - 1));
      } else {
        operation = operation.replace(/.$/, event.target.innerText);
      }
      console.log(operation);
    } else if (event.target.innerText === "x") {
      // multiplication
      if (sw !== true) {
        operation += disp.innerText + "*";
        opDisp.innerText = operation;
        sw = true;
        disp.innerText = eval(operation.substring(0, operation.length - 1));
      } else {
        operation = operation.replace(/.$/, "*");
      }
      console.log(operation);
    } else if (event.target.innerText === "÷") {
      // division
      if (sw !== true) {
        operation += disp.innerText + "/";
        opDisp.innerText = operation;
        sw = true;
        disp.innerText = eval(operation.substring(0, operation.length - 1));
      } else {
        operation = operation.replace(/.$/, "/");
      }
    } else if (event.target.innerText === "=") {
      // equal button
      operation += disp.innerText;
      disp.innerText = eval(operation);
      opDisp.innerText = operation;
      operation = "";
      console.log(howManyDots(disp.innerText));
    } else if (event.target.innerText === "%") {
      disp.innerText = disp.innerText / 100;
    }
  }
});

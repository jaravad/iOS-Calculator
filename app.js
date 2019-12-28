const buttonsContainer = document.querySelector(".buttons");
const disp = document.querySelector(".display");
let operation = "";
function howManyDots(str) {
  if (str.length % 3 === 0) {
    return parseInt(str.length / 3 - 1);
  } else {
    return parseInt(str.length / 3);
  }
}

buttonsContainer.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    if (
      !isNaN(event.target.innerText) ||
      (event.target.innerText === "," && !disp.innerText.includes(","))
    ) {
      if (disp.innerText === "0") {
        disp.innerText = event.target.innerText;
      } else {
        disp.innerText += event.target.innerText;
      }
    } else if (event.target.innerText === "AC") {
      disp.innerText = "0";
      operation = "";
    } else if (event.target.innerText === "+/-" && disp.innerText !== "0") {
      if (!disp.innerText.includes("-")) {
        disp.innerText = "-" + disp.innerText;
      } else {
        disp.innerText = disp.innerText.replace("-", "");
      }
    } else if (
      event.target.innerText === "+" ||
      event.target.innerText === "-"
    ) {
      operation += disp.innerText + event.target.innerText;
      disp.innerText = "0";
    } else if (event.target.innerText === "x") {
      operation += disp.innerText + "*";
      disp.innerText = "0";
    } else if (event.target.innerText === "÷") {
      operation += disp.innerText + "/";
      disp.innerText = "0";
    } else if (event.target.innerText === "=") {
      operation += disp.innerText;
      disp.innerText = eval(operation);
      operation = "";
      console.log(howManyDots(disp.innerText));
    }
  }
});

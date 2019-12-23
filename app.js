const buttonsContainer = document.querySelector(".buttons");
buttonsContainer.addEventListener("click", function(event) {
  const disp = document.querySelector(".display");
  if (event.target.tagName === "BUTTON") {
    if (
      !isNaN(event.target.innerText) ||
      (event.target.innerText === "." && !disp.innerText.includes("."))
    ) {
      if (disp.innerText === "0") {
        disp.innerText = event.target.innerText;
      } else {
        disp.innerText += event.target.innerText;
      }
    } else if (event.target.innerText === "AC") {
      disp.innerText = "0";
    } else if (event.target.innerText === "+/-" && disp.innerText !== "0") {
      if (!disp.innerText.includes("-")) {
        disp.innerText = "-" + disp.innerText;
      } else {
        disp.innerText = disp.innerText.replace("-", "");
      }
    }
  }
});

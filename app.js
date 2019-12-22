const buttonsContainer = document.querySelector(".buttons");
buttonsContainer.addEventListener("click", function(event) {
  const disp = document.querySelector(".display");
  if (event.target.tagName === "BUTTON") {
    if (disp.innerText === "0") {
      disp.innerText = event.target.innerText;
    } else {
      disp.innerText += event.target.innerText;
    }
  }
});

const clearDisplay = document.querySelector("#clear");
clearDisplay.style.cssText =
  "background-color:#B31312;width:120px;margin-left:62px;color:#fff;";

const showErro = document.getElementById("error-show");
// ............script here is
const showDisplay = document.getElementById("display");
let string = "";

let button = document.querySelectorAll("button");

Array.from(button).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    try {
      if (e.target.innerText == "=") {
        string = eval(string);
        showDisplay.value = string;
      } else if (e.target.innerText == "C") {
        string = "";
        showDisplay.value = string;
      } else {
        console.log(e.target);
        string = string + e.target.innerText;
        showDisplay.value = string;
      }
    } catch (err) {
      showErro.innerHTML = "Error";
    }
  });
});

gsap.from("#container .calculator", {
  duration: 3,
  y: 30,
});

// text-Animation
const myText = new SplitType("#my-text");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
});

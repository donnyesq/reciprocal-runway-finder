const input = document.querySelector("#runway-input");
const submitButton = document.querySelector("#submit");
let inputValue;
const p = document.querySelector("#reciprocal-runway");
const label = document.querySelector("#label");

input.addEventListener("keyup", (event) => {
  inputValue = event.target.value;
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let result = getReciprocalRunway(inputValue);

  //RENDER RESULT ON SCREEN

  label.innerText = "The reciprocal runway is";

  input.style.display = "none";
  const reciprocalRunway = document.createElement("p");
  reciprocalRunway.innerText = `${result}`;

  p.style.display = "flex";
  p.innerText = `${result}`;

  //CHANGE BUTTON APPEARANCE
  submitButton.innerText = "RESET";
});

const getReciprocalRunway = (runway) => {
  runway = parseInt(runway, 10);
  let degrees = runway * 10;

  if (runway < 18 && runway <= 36 && runway > 0) {
    let reciprocal = (degrees + 180) / 10;

    if (reciprocal < 10) {
      return `0${reciprocal}`;
    } else {
      return reciprocal;
    }
  } else if (runway > 17 && runway <= 36 && runway > 0) {
    let reciprocal = (degrees - 180) / 10;

    if (reciprocal < 10) {
      return `0${reciprocal}`;
    } else {
      return reciprocal;
    }
  } else {
    window.alert("Your runway number is invalid");
    // BELOW - REMOVE EVENT LISTENER FROM BUTTON SO THAT NOTHING HAPPENS
  }
};

const button = document.getElementById("button");
const secretText = document.getElementById("secretText");

button.addEventListener("click", () => {
  if (secretText.style.display === "none") {
    secretText.style.display = "block";
  } else {
    secretText.style.display = "none";
  }
});

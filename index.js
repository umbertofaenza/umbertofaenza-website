document.addEventListener("DOMContentLoaded", function () {
  // Dinamically populate copyright year
  document.querySelector(".copyright .current-year").innerHTML =
    new Date().getFullYear();

  // Handle background opacity based on opened-closed modal
  document.querySelector("#policyModal").attributes.open
    ? (document.querySelector("body").style.opacity = 0.2)
    : (document.querySelector("body").style.opacity = 1);
});

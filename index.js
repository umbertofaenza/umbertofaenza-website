document.addEventListener("DOMContentLoaded", function () {
  // Dinamically populate copyright year
  const footerCopyrightYear = document.querySelector(
    ".copyright .current-year"
  );
  footerCopyrightYear.innerHTML = new Date().getFullYear();

  // Handle open-close modal logic + background opacity
  const policyLink = document.querySelector(".policy-link");
  const policyModal = document.querySelector("#policyModal");
  const closePolicy = document.querySelector(".close-policy");

  policyLink.addEventListener("click", function () {
    document.querySelector("body").style.opacity = 0.2;
    policyModal.showModal();
  });

  closePolicy.addEventListener("click", function () {
    policyModal.close();
    document.querySelector("body").style.opacity = 1;
  });
});

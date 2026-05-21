document.addEventListener("DOMContentLoaded", function () {

  const dropdown = document.querySelector(".ay-campaign-dropdown");
  const button = document.querySelector(".ay-campaign-dropdown-btn");

  if (!dropdown || !button) return;

  button.addEventListener("click", function (event) {
    event.preventDefault();
    dropdown.classList.toggle("is-open");
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("is-open");
    }
  });

});

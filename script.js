document.addEventListener("DOMContentLoaded", function () {

  const dropdown = document.querySelector(".ay-dropdown");
  const button = document.querySelector(".ay-dropdown-btn");

  button.addEventListener("click", function () {
    dropdown.classList.toggle("open");
  });

  const launchDate = new Date("August 26, 2026 00:00:00").getTime();

  function updateCountdown() {

    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24))
      / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60))
      / (1000 * 60)
    );

    const seconds = Math.floor(
      (distance % (1000 * 60))
      / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

});

document.addEventListener("DOMContentLoaded", function () {
  const flap = document.querySelector(".flap");

  // Make sure it starts closed
  flap.classList.remove("open");

  flap.addEventListener("click", function () {
    flap.classList.toggle("open");
  });
});

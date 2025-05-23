document.addEventListener("DOMContentLoaded", function () {
  const flap = document.querySelector(".flap");
  flap.addEventListener("click", function () {
    flap.classList.toggle("open");
  });
});

// Dynamically load navbar and footer
window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => (navbar.innerHTML = data));

  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => (footer.innerHTML = data));
});

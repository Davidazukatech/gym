let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

// Show popup after 2 seconds
window.onload = function () {
  setTimeout(() => {
    document.getElementById("servicePopup").style.display = "flex";
  }, 2000);
};

// Close popup
function closePopup() {
  document.getElementById("servicePopup").style.display = "none";
}

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

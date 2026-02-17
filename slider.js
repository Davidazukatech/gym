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
  const nav = document.querySelector('nav'); // select your nav
  nav.classList.toggle('active'); // toggle "active" class
}



const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Optional: close menu when a link is clicked (mobile)
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}




//Hamburger menu script

const siteNav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = siteNav.getAttribute('data-visible');
    if (visibility === "false") {
        siteNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        siteNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})


//Modal/Lightbox

// Open the Modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
  }
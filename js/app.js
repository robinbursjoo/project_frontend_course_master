//hamburger menu script

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




//Contact form validation

const contactForm = document.getElementById('contact');
console.log(contactForm);

contactForm.addEventListener('submit', function(e) {
    //alert('Form submitted');
    // preventDefault() prevents the default behavior of the submitted form
    e.preventDefault();

    const inputEmail = document.getElementById('input-email');
    const inputMessage = document.getElementById('input-message');
    console.log(inputEmail.value);

    let errorMessages = '';
    if (inputEmail.value === '') {
        errorMessages += 'Email is required<br>';
    }

    if (inputMessage.value === '') {
        errorMessages += 'Message is required<br>';
    }

    let submittedMessage = 'Form submitted, thank you for contacting me!'

    if (errorMessages) {
    document.getElementById('messages').innerHTML = errorMessages;
    document.getElementById('messages').style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    document.getElementById('messages').style.border = '1px solid #c4c4c4';
    //document.getElementById('messages').style.border = '1px solid black';
} else {
        document.getElementById('messages').innerHTML = submittedMessage;
        document.getElementById('messages').style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
        document.getElementById('messages').style.border = '1px solid #c4c4c4';
    }

    console.log(errorMessages);
});






// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
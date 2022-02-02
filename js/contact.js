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

//Form validation

const contactForm = document.getElementById('contact-form');
//console.log(contactForm);


contactForm.addEventListener('submit', function(e) {
    //alert('Form submitted');
    // preventDefault() prevents the default behavior of the submitted form
    e.preventDefault();

    const inputEmail = document.getElementById('input-email');
    const inputMessage = document.getElementById('input-message');
    //console.log(inputEmail.value);

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

    //console.log(errorMessages);
})
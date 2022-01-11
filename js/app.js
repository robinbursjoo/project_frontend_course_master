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
// Testimonials

// Array
const reviews = [
  {
    id: 1,
    name: "susanne sjödin",
    job: "marketing, Awesome corp",
    img:
      "https://source.unsplash.com/eJ0UGX8da2c/300",
    text:
      "De som jag har kontakt med på CAGELAKEISLAND kan sin sak, och det märks i varje interaktion vi har med dem. Kommer fortsätta använda deras tjänst ett bra tag framöver.",
  },
  {
    id: 2,
    name: "anna johansson",
    job: "partner, Best company AB",
    img:
      "https://source.unsplash.com/mEZ3PoFGs_k/300",
    text:
      "CAGELAKEISLAND webbyrå har utvecklat vår webbsida i WordPress. Samarbetat har fungerat väldigt bra under alla år och framförallt uppskattar vi deras snabba respons kring vidareutveckling och support.",
  },
  {
    id: 3,
    name: "peter svensson",
    job: "CEO, we are the best inc.",
    img:
      "https://source.unsplash.com/uXB-7la5vqA/300",
    text:
      "CAGELAKEISLAND hjälpte oss med en ny snyggare webbplats med bättre och enklare flöden för besökaren. Det hade inte varit möjligt att nå våra mål utan att ha skapat den nya sajten med dem.",
  },
  {
    id: 4,
    name: "bill andersson",
    job: "hr, company ltd.",
    img:
      "https://source.unsplash.com/jCeVRUQslTs/300",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
})

prevBtn.addEventListener('click', function(){
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;;
  }
  showPerson(currentItem);
})

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
})




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
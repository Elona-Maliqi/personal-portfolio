const navLinks = document.getElementById("nav-links");
const menuBtn = document.querySelector(".menu-btn");
const menuBtnIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


//header container
ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn ", {
    ...scrollRevealOption,
    delay: 600,
});


// about container
ScrollReveal().reveal(".about__content .section__header",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content p",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn",{
    ...scrollRevealOption,
    delay: 600,
});


//service container
ScrollReveal().reveal(".service__card", {
    ...scrollRevealOption,
    interval: 500,
});


//portfolio container
ScrollReveal().reveal("#portfolio .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal("#portfolio .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".portfolio__card", {
    duration:1000,
    interval: 500,
});

ScrollReveal().reveal(".portfolio__banner", {
    duration:1500,
});


ScrollReveal().reveal(".portfolio__banner .portfolio__banner__card", {
    duration:1750,
    interval: 500,
});


//contact container
ScrollReveal().reveal("#contact .logo",{
    ...scrollRevealOption,
});

ScrollReveal().reveal("#contact .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal("#contact .section__description", {
    ...scrollRevealOption,
    delay: 700,
});


//contact info popup

//show/hide discord
function showDiscord() {
    var contentDiv = document.getElementById('discord');
    contentDiv.style.display = 'block';
  }

function hideDiscord() {
    var contentDiv = document.getElementById('discord');
    contentDiv.style.display = 'none';
  }


//show/hide Phone
  function showPhone() {
    var contentDiv = document.getElementById('phone');
    contentDiv.style.display = 'block';
  }

function hidePhone() {
    var contentDiv = document.getElementById('phone');
    contentDiv.style.display = 'none';
  }

//show/hide Whatsapp

function showWhatsapp() {
    var contentDiv = document.getElementById('whatsapp');
    contentDiv.style.display = 'block';
  }

function hideWhatsapp() {
    var contentDiv = document.getElementById('whatsapp');
    contentDiv.style.display = 'none';
  }

//show/hide Email
function showEmail() {
    var contentDiv = document.getElementById('email');
    contentDiv.style.display = 'block';
  }

function hideEmail() {
    var contentDiv = document.getElementById('email');
    contentDiv.style.display = 'none';
  }

//show/hide Pinterest
function showPinterest() {
    var contentDiv = document.getElementById('pinterest');
    contentDiv.style.display = 'block';
  }

function hidePinterest() {
    var contentDiv = document.getElementById('pinterest');
    contentDiv.style.display = 'none';
  }

//show/hide Subscription
function showSubscribe(){
    var contentDiv = document.getElementById('subscribe');
    contentDiv.style.display = 'block';
}

function hideSubscribe(){
    var contentDiv = document.getElementById('subscribe');
    contentDiv.style.display = 'none';
}


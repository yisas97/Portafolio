//   || Toggled navbar

const navbarToggler = document.getElementById('navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarTogglerIcon = document.querySelector('.navbar__toggler-icon');

navbarToggler.addEventListener('touchend', () => {
  if (navbarToggler.classList.contains('navbar__toggler--collapsed')) {
    navbarToggler.classList.remove('navbar__toggler--collapsed')
    navbar.classList.add('navbar--show')
    navbarTogglerIcon.classList.remove('navbar__toggler-icon-menu')
    navbarTogglerIcon.classList.add('navbar__toggler-icon-close')
  } else {
    navbarTogglerIcon.classList.remove('navbar__toggler-icon-close')
    navbarTogglerIcon.classList.add('navbar__toggler-icon-menu')
    navbarToggler.classList.add('navbar__toggler--collapsed')
    navbar.classList.remove('navbar--show')
  }
});

//   || Typewriting Hero Heading

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const text = ["Desarrollador de Software"]
const delay = {
  typing: 100,
  erasing: 70,
  newText: 2000
}
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < text[textIndex].length) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent += text[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, delay.typing);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, delay.newText);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent = text[textIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, delay.erasing);
  } else {
    cursor.classList.remove("typing");
    textIndex++;
    if(textIndex >= text.length) textIndex = 0;
    setTimeout(type, delay.typing + 1100)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (text.length) {
    setTimeout(type, delay.newText + 250);
  }
})

//   || Hightlight nav items

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navbar .navbar__link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  })
  navItems.forEach( navItem => {
    navItem.classList.remove('navbar__link--active');
    if (navItem.classList.contains(current)) {
      navItem.classList.add('navbar__link--active')
    }
  })
})

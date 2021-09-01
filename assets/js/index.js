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

// document.addEventListener('DOMContentLoaded', () => {
//   const slides = [...document.querySelectorAll('.slider__item')];
//   const prevBtn = document.querySelector('.slider__prev');
//   const nextBtn = document.querySelector('.slider__next');
//   let clickable = true;
//   let active = null;
//   let newActive = null;

//   function initSlider() {
//     let order = 2;
//     slides.forEach((slide, index) => {
//       if (index === slides.length-1) {
//         slide.setAttribute(
//           'style',
//           `order: 1;transition: transform .5s ease; animation-duration: .5s`
//         )
//       } else {
//         slide.setAttribute(
//           'style',
//           `order: ${order};transition: transform .5s ease; animation-duration: .5s`
//         )
//       }
//       order++;
//     })
//   }

//   function changeSlide(forward) {
//     if (clickable) {
//       clickable = false;
//       active = document.querySelector('.slider__item--active');
//       const activeSlideIndex = slides.indexOf(active);
//       if (forward) {
//         console.log('activeSlideIndex: ', activeSlideIndex);
//         console.log('slides.length: ', slides.length);
//         console.log('left slide: ', (activeSlideIndex + 1) % slides.length);
//         console.log('active slide: ', (activeSlideIndex + 1) % slides.length);
//         console.log('right slide: ', (activeSlideIndex + 1) % slides.length);

//         newActive = slides[(activeSlideIndex + 1) % slides.length];

//         active.classList.add('slider__item--out-left');
//         active.classList.remove('slider__item--active');
//         active.setAttribute('style', 'order: 1;')
//         newActive.classList.add('slider__item--active', 'slider__item--in-right');
//         newActive.setAttribute('style', 'order: 2;')
//       } else {
//         console.log('activeSlideIndex: ', activeSlideIndex);
//         console.log('slides.length: ', slides.length);
//         console.log('new slide: ', (activeSlideIndex - 1 + slides.length) % slides.length);

//         newActive = slides[(activeSlideIndex - 1 + slides.length) % slides.length];
//         active.classList.add('slider__item--out-right');
//         newActive.classList.add('slider__item--out-left', 'slider__item--active');
//       }
//     }
//   }

//   slides.forEach(slide => {
//     console.log(clickable);
//     console.log('slide', slide);
//     console.log('active', active);
//     if (slide === active && !clickable) {
//       console.log(clickable);
//       clickable = true;}
//     /*slide.addEventListener('touchend', e => {
//       Check for the old active transition and if clickable is false
//       to not trigger it more than once
//       if (slide === active && !clickable) {
//         clickable = true;
//         Remove all CSS animation classes on old active
//         active.className = 'wbn-slide';
//       }
//     });*/
//   });

//   nextBtn.addEventListener('touchend', () => {
//     changeSlide(true);
//   });
//   prevBtn.addEventListener('touchend', () => {
//     changeSlide(false);
//   });

//   initSlider();
// });

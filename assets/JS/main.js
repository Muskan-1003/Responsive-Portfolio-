// //menu show Y hidden
let navMenu = document.getElementById('nav_menu');
      let navToggle = document.getElementById('nav_toggle');
      let navClose = document.getElementById('nav_close');

      if (navToggle) {
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
        });
      }
      if (navClose) {
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
        });
      }
//remove menu mobile
let navLink =document.querySelectorAll('.nav_link')
function linkAction(){
    let navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=> n.addEventListener('click',linkAction));
//skills//
let skillsContent= document.getElementsByClassName('skills_content');
let skillsHeader= document.querySelectorAll('.skills_header');
function toggleSkills(){
  let itemClass =this.parentNode.className
  for(i=0;i<skillsContent.length;i++){
    skillsContent[i].className='skills_content skills_close'
  }
  if(itemClass=== 'skills_content skills_close'){
    this.parentNode.className='skills_content skills_open'
  }
}
skillsHeader.forEach((el)=>{
  el.addEventListener('click',toggleSkills)
})

// swiper
let swiper = new Swiper('.portfolio_container', {
  // Optional parameters
  cssMode: true,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


//dark theme//
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})






//scrool section active link
let sections = document.querySelectorAll('section[id]');

function scrollActive() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }

  });
}

window.addEventListener('scroll', scrollActive);

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "pandeymuskan838@gmail.com",
    // Password : ,
    To : 'muskanpandey1003@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}

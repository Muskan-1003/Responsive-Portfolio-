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

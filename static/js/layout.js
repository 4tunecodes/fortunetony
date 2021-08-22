/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

var countdate = new Date('Jan 1, 2022 00:00:00').getTime();

function expiry(){
  var now = new Date().getTime();
  var gap = countdate - now;

      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;

      var d = Math.floor(gap / (day));
      var h = Math.floor((gap % (day)) / (hour));
      var m = Math.floor((gap % (hour)) / (minute));
      var s = Math.floor((gap % (minute)) / (second));

      document.getElementById('day').innerText = d;
      document.getElementById('hour').innerText = h;
      document.getElementById('minute').innerText = m;
      document.getElementById('seconds').innerText = s;

}
setInterval(function(){
  expiry()
},1000)


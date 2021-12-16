const menuList = document.getElementById("menu");
const hamIcon = document.getElementById("ham-icon");
const hamDivs = Array.from(document.querySelectorAll("#ham-icon div"));
const menu = document.getElementById("menu");
var mainNav = document.getElementById("mainNav");
// var navList = document.getElementById("navList");

var logoImage = document.getElementById("logoImage");

/*
window.addEventListener("scroll", function( ) {
    const logoImage = document.getElementById
    ("logoImage");
   
    const mainNav = document.getElementById
    ("mainNav");

    if (window.pageyOffset > 100) {
        console.log(window.pageYOffset);
        
        logoImage.style.height = "64px";
        mainNav.classList.add("bg-black");
        mainNav.classList.add("txt-white");
        
    } else {
        logoImage.style.height = "84px";
        mainNav.classList.remove("bg-black");
        mainNav.classList.remove("txt-white");
    }
});

*/
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mainNav.style.height = "75px";
    mainNav.style.backgroundColor = "#eee";
    logoImage.style.height = "50px";
    navList.style.paddingBottom = "15px";
    navList.style.marginTop = "15px";
  } else {
    mainNav.style.height = "60px";
    logoImage.style.width = "auto";
    logoImage.style.height = "84px";
    mainNav.style.backgroundColor = "white";
    navList.style.marginTop = "30px";
  }
}

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
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//thats not work
// for ham-icon animation
hamIcon.addEventListener("click", () => {
  menu.classList.toggle("active-menu");
  hamDivs[0].classList.toggle("active-div1");
  hamDivs[1].classList.toggle("active-middle-div");
  hamDivs[2].classList.toggle("active-div3");
});

document.addEventListener("click", (e) => {
  if (
    hamDivs[0].classList.contains("active-div1") &&
    e.target.parentNode.id !== "ham-icon"
  ) {
    menu.classList.toggle("active-menu");
    hamDivs[0].classList.toggle("active-div1");
    hamDivs[1].classList.toggle("active-middle-div");
    hamDivs[2].classList.toggle("active-div3");
  }
});

// for nav scroll
navList.addEventListener("click", (e) => {
  if (e.target.nodeName == "LI") {
    for (let i = 0; i < navList.children.length; i++) {
      navList.children[i].classList.remove("active-li");
    }
    e.target.classList.add("active-li");
    document.querySelector(`.${e.target.innerHTML}`).scrollIntoView();
  }
});

// for menu scroll
menuList.addEventListener("click", (e) => {
  if (e.target.nodeName == "LI") {
    document.querySelector(`.${e.target.innerHTML}`).scrollIntoView();
    menu.classList.toggle("active-menu");
    hamDivs[0].classList.toggle("active-div1");
    hamDivs[1].classList.toggle("active-middle-div");
    hamDivs[2].classList.toggle("active-div3");
  }
});

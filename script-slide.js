const menu=document.querySelector("[data-menu]")
const navbar=document.querySelector("[data-navba]")

menu.addEventListener("click",()=>navbar.classList.toggle("active"))


window.addEventListener("scroll",()=>{
    if(window.scrollY <20){
        navbar.classList.remove("active")
    }
})

const header=document.querySelector("[data-header]")

window.addEventListener("scroll",e=>{
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})


const show = document.querySelector(".div-slide-item");
const expand = document.querySelector("[data-show]");
const close = document.querySelector("[data-close]");


show.addEventListener("click", () => {
  expand.classList.toggle("show");
});
close.addEventListener("click", () => {
  expand.classList.remove("show");
});

const showt = document.querySelector("[data-expand]");
const expandt = document.querySelector("[data-show]");
const closet = document.querySelector("[data-close]");


showt.addEventListener("click", () => {
  expandt.classList.toggle("show");
});
closet.addEventListener("click", () => {
  expandt.classList.remove("show");
});






const more = document.querySelector("[data-more]"); 
const include = document.querySelector("[data-include]");
 more.addEventListener("click", function() { 
  include.classList.toggle("include"); 
  if (this.innerText === 'See Less') { 
    this.innerText = 'See More'; } else { 
      this.innerText = 'See Less'; } 
    });

    const less = document.querySelector("[data-less]"); 
    const about = document.querySelector("[data-about]");
     less.addEventListener("click", function() { 
      about.classList.toggle("include"); 
      if (this.innerText === 'See Less') { 
        this.innerText = 'See More'; } else { 
          this.innerText = 'See Less'; } 
        });
    
    

const $favorite = document.querySelectorAll("[data-favorite]");

$favorite.forEach(favoriteBtn => {
    favoriteBtn.addEventListener("click", (event) => {
        event.preventDefault();
        favoriteBtn.classList.toggle("active");
    });
});



  

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});


  var theslide = new Swiper(".thenew", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
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



const valuedisplay=document.querySelectorAll(".num")
let interval= 20000;

valuedisplay.forEach((valuedis)=>{
    let startvalue= 0;
    let endvalue=parseInt(valuedis.getAttribute("data-val"))
    let duration=Math.floor(interval / endvalue)
    let counter=setInterval(function(){
        startvalue +=1;
        valuedis.textContent=startvalue
        if(startvalue == endvalue){
            clearInterval(counter)
        }
    },duration)

})



const $favorite = document.querySelectorAll("[data-favorite]");

$favorite.forEach(favoriteBtn => {
    favoriteBtn.addEventListener("click", (event) => {
        event.preventDefault();
        favoriteBtn.classList.toggle("active");
    });
});



  



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true, 
    pagination: {
        el: ".swiper-pagination", 
        clickable: true, 
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev", 
    },
    breakpoints: {
        320: {
            slidesPerView: 2, 
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 2, 
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4, 
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper(".thenow", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


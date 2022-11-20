const burger=document.querySelector(".burger")
const navbar=document.querySelector(".navbar")
const navitems=document.querySelector(".nav-items")
const logo=document.querySelector(".logo")

burger.addEventListener("click",run=>{
    navbar.classList.toggle("h-nav-resp")
    navitems.classList.toggle("v-nav-resp")
    logo.classList.toggle("v-nav-resp")
})

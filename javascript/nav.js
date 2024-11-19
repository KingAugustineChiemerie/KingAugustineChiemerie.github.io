const navMenuBtns = document.querySelectorAll(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const littleNavP = document.querySelector(".little-nav-p");
const navLinks = document.querySelectorAll(".nav-items");
const navigableSecs = document.querySelectorAll(".link-sec");
let navActive = false;


window.addEventListener("scroll", () => {
    for(i = 0; i < navigableSecs.length; i++){
        if(window.scrollY >= navigableSecs[i].offsetTop - (window.innerHeight / 3)){
            deactivateAllLinks();
            navLinks[i].classList.add("active");
        }
    }
});

navLinks.forEach(nav => {
    nav.addEventListener("click", ()=>{
        deactivateNav();
    });
})

function deactivateAllLinks(){
    navLinks.forEach(link =>{
        link.classList.remove("active");
    })
}

navMenuBtns.forEach(navMenuBtn => {
    navMenuBtn.addEventListener("click", () =>{
        //activate nav
        if(!navActive)
        {
            activateNav();
        }
        //deactivate nav
        else{
            deactivateNav();
        }
    });
})

function activateNav(){
    littleNavP.classList.add("fade-out");
    littleNavP.classList.remove("fade-in");
    navActive = true;
    navMenu.classList.remove("inactive");
    header.classList.add("active");
    header.classList.remove("inactive");
    console.log("Activated");
}

function deactivateNav(){
    littleNavP.classList.add("fade-in");
    littleNavP.classList.remove("fade-out");
    navActive = false;
    navMenu.classList.add("inactive");
    header.classList.remove("active");
    header.classList.add("inactive");
    console.log("DeActivated");
}
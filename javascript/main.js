/**
 * Notification
 */
/* const notificationBar = document.querySelector(".notification");
document.querySelector(".close-notif").addEventListener("click", ()=>{
  notificationBar.style.display = "none";
}) */

/**
 * Hero typing text
 */
//Selecting element for typing
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
    return document.querySelector(el)
    }
}
//Hero typing command
const typed = select('.typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

 /**
   * Testimonials slider
   */
 new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/*
*progressbar
*/
//set progressbars color

var progressbars = document.querySelectorAll(".skill-progress-value");

for(i = 0; i < progressbars.length; i++){
  let value = progressbars[i].getAttribute("value");
  let color = progressbars[i].getAttribute("skill-color");

  //reset
  progressbars[i].style.backgroundColor = "#" + color + "44";
  progressbars[i].style.borderColor = "#" + color + "ff";
}
/*progressbar ends*/






//Reseting height based on device
function resetHeight() {
  document.querySelector('.nav-menu').style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();
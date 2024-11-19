if(!window.matchMedia("(prefers-reduced-motion: reduced)").matches){
  animatedLoadProgressbar();
  animateArchievementCount();
  console.log("Reduced motion off");
}
else{
  if(!isCount)
  {
    counter();
    isCount = true;
  }
  console.log("Reduced motion on");
}
let isCount = false;
/**
 * Value count for archievemnt
 * This activates the library that has the count code
 */
const counter = function() {
	$('.js-counter').countTo({
		 formatter: function (value, options) {
	  return value.toFixed(options.decimals);
	},
	});
};
//value count activation function ends
function animatedLoadProgressbar()
{
  var progressbars = document.querySelectorAll(".skill-progress-value");

  for(i = 0; i < progressbars.length; i++){
      let color = progressbars[i].getAttribute("skill-color");
  
      //setWidthCount(progressbars[i], 0);
    progressbars[i].style.backgroundColor = "#" + color + "44";
    progressbars[i].style.borderColor = "#" + color + "ff";
  }
  
  const option = {
      root: null,
      threshold: 0,
      rootMargin: "0px"
  }
  const observer = new IntersectionObserver(function(entries, observe){
      entries.forEach(entry => {
          if(entry.isIntersecting){
              let target = entry.target
              loadProgressbar(target, target.getAttribute("value"));
              observer.unobserve(target);
          }
      });
  },option);
  
  progressbars.forEach(progressbar => {
      observer.observe(progressbar);
  });
  
  function loadProgressbar(ele, value){
    let count = 0;
    let timerFunction = setInterval(() => {
      count ++;
      setWidthCount(ele, count);
      if(count == value){
        clearInterval(timerFunction);
      }
    }, 50)
  }
  function setWidthCount(ele, value)
  {
    ele.setAttribute("value", value);
    ele.style.width = value + "%";
  }
}

function animateArchievementCount()
{
  countersParent = document.querySelectorAll(".achievement-box");
  
  const option = {
    root: null,
    threshold: .5,
    rootMargin: "0px"
  }
  const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach(entry =>{
      if(entry.isIntersecting)
      {
        if(!isCount)
        {
          counter();
          isCount = true;
        }
        observe.unobserve(entry.target);
      }
    });
  }, option)

  countersParent.forEach((counterP) => {
    observer.observe(counterP);
  })
}
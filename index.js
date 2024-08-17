var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

var menuicon = document.querySelector("#menu-icon");
var menubar = document.querySelector(".menubar");
menuicon.addEventListener("click", function () {
  console.log("Sheik Mohideen....");
  menubar.classList.toggle("active");
});
//hiding a menubar when smooth scrolling..
window.onscroll = () => {
  menubar.classList.remove("active");
};

// sticky effect for header
window.onscroll = function() {stickyEffect()};
var header = document.getElementById("stickyHeader");
var sticky = header.offsetTop;
function stickyEffect() 
{
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
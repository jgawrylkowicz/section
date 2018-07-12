document.addEventListener('pjax:complete', function () {
  AOS.refreshHard();
 });

new Pjax({
  elements: "a[data-pjax]", // default is "a[href], form[action]"
  selectors: ["#content" , "#menu-text"], 
  switches: {
    //"#main": Pjax.switches.sideBySide
    // Can be used as modal to view the projects
  }
})

 //document.onload = document.body.style.opacity = 1;

 window.addEventListener("scroll", function(event) {
  
  var top = this.scrollY;
  var el = this.document.getElementById('tob-bar--container');

  // 4em to 100

  if (el){
    if (top < 100){
      el.style.opacity = 0;
    } else {
      el.style.opacity = 1
    } 
  }

}, false)

AOS.init({
  duration: 400,
  easing: 'cubic-bezier(.17,.67,.16,.99)',
  once: true
});


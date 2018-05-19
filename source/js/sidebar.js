
new Pjax({
  elements: "a[data-pjax]", // default is "a[href], form[action]"
  selectors: ["#content" , "#menu-text"], 
  switches: {
    //"#main": Pjax.switches.sideBySide
    // Can be used as modal to view the projects
  }
})

 //document.onload = document.body.style.opacity = 1;

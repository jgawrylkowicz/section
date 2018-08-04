window.addEventListener('scroll', function(e) {

  let el = document.getElementById('top-bar--onscroll');
  if (el != null){
    el.style.opacity = getOpacity();
  }

});

function getOpacity(){

  let offset = 60;
  let animation_start = 0 + offset;
  let animation_end = 100 + offset;

  if (window.scrollY < animation_start ) return 0;
  else {
    let opacity = window.scrollY / animation_end;
    return (opacity <= 1) ? opacity : 1;
  }

}
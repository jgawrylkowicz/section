window.addEventListener('scroll', function(e) {

  let offset = 40;
  let animation_start = 0 + offset;
  let animation_end = 60 + offset;

  let static_bar = document.getElementById('top-bar');
  if (static_bar != null){

    if (window.scrollY >= animation_start ){
      static_bar.style.opacity = 0;
    } else {
      animation_start = 20;
      let opacity = (animation_start - window.scrollY) / animation_start
      static_bar.style.opacity = (opacity <= 0) ? 0 : opacity;
    }

  }
  
  let dymamic_bar = document.getElementById('top-bar--onscroll');
  if (dymamic_bar != null){

    if (window.scrollY < animation_start ){
      dymamic_bar.style.opacity = 0;
    } else {
      let opacity = window.scrollY / animation_end;
      dymamic_bar.style.opacity = (opacity <= 1) ? opacity : 1;
    }
 
  }

});


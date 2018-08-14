window.addEventListener('scroll', fadeIn);
window.onload = fadeIn;

function fadeIn(){
  
  let page_top = document.body.scrollTop || window.scrollY;
  // document.body.scrollTop works in firefox and safari
  // but it is deprecated in chrome
  let page_bottom = page_top + window.innerHeight;
  let offset = 100;

  let tags = document.getElementsByTagName("section");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];    
    var tag_position = tag.offsetTop;
    if (tag_position < page_bottom - offset) { 
      tag.classList.add('visible');
    } else {
      tag.classList.remove('visible');
    }
  }

}

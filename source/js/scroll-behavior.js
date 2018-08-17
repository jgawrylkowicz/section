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

    // When animating every single child of the parent
    // performance issues occur

    if (tag_position < page_bottom - offset) { 

      let _this = tags[i];
      anime.remove(_this);

      /*
      let childNodes = tags[i].childNodes;
      if (childNodes != null){
        for(var j = 0; j < childNodes.length; j++ ){
          timeline.add({
            targets: childNodes[j],
            offset: '+=200',
            opacity: 1,
            translateY: 0
          });
        }
      }*/  

      anime({
        targets: _this,
        translateY: {
          value: 0
        },
        opacity: {
          value: 1
        },
        duration: 400,
        elasticity: 100,
      }); 

    } else {

      let _this = tags[i];
      anime.remove(_this);
      anime({
        targets: _this,
        translateY: {
          value: 50
        },
        opacity: {
          value: 0
        },
        duration: 400,
        elasticity: 100,
      });
    }
  }

}

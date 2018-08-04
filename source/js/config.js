//barba config

Barba.Pjax.Dom.containerClass = 'container';
Barba.Pjax.Dom.wrapperId = 'wrapper';
Barba.Pjax.start();
Barba.Prefetch.init();

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {

    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {

    let animation = anime({
      targets: this.oldContainer,
      opacity: 0,
      easing: [.17,.67,.16,.99],
      duration: 1000
    });

    return animation.finished;

  },

  fadeIn: function() {

    document.body.scrollTop = 0;
    var _this = this;
   
    this.oldContainer.style.visibility = 'visible';
    this.oldContainer.style.opacity = 0;

    this.newContainer.style.visibility = 'visible';
    this.newContainer.style.opacity = 0;
  
    let animation = anime({
      targets: this.newContainer,
      opacity: 1,
      easing: [.17,.67,.16,.99],
      duration: 1000
    });

    animation.finished.then(_this.done());
  }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

// removing filters on events for better performance

Barba.Dispatcher.on('transitionCompleted', function() {
  let el = document.getElementById("article__img");
  if (el != null){
    el.classList.add("article__img--shadow");
  }
});

window.onload = function(){
  let el = document.getElementById("article__img");
  if (el != null){
    el.classList.add("article__img--shadow");
  }
}

Barba.Dispatcher.on('linkClicked', function() {
  let el = document.getElementById("article__img");
  if (el != null){
    el.classList.remove("article__img--shadow");
  }
});


// the changing width of a bar
window.addEventListener('scroll', function(e) {

  let collection = document.getElementsByClassName('color-bar');
  if (collection != null){
    let bar = collection[0];
    bar.style.width = getPercentage() + "%"
  }

});

function getPercentage(){
  return (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
}

// Scrolling to a postition 

document.getElementById('home').onclick = function(e){

  let collection = document.getElementsByClassName('home');
  if (collection[0] != null){

    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } 
};

document.getElementById('projects').onclick = function(e){

  let collection = document.getElementsByClassName('projects');
  if (collection[0] != null){
    
    let projects = collection[0].firstChild;
    bodyRect = document.body.getBoundingClientRect(),
    elemRect = projects.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    
    e.preventDefault();
    window.scrollTo({
      top: offset - 40,
      left: 0,
      behavior: "smooth"
    });
  }
};

// progressive image loading

if (window.addEventListener 
  && window.requestAnimationFrame 
  && document.getElementsByClassName){
  
  window.addEventListener('load', function() {

    // start
    var pItem = document.getElementsByClassName('progressive replace'), timer;

    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', scroller, false);
    inView();


    // throttled scroll/resize
    function scroller(e) {

      timer = timer || setTimeout(function() {
        timer = null;
        requestAnimationFrame(inView);
      }, 300);

    }


    // image in view?
    function inView() {

      var wT = window.pageYOffset, wB = wT + window.innerHeight, cRect, pT, pB, p = 0;
      while (p < pItem.length) {

        cRect = pItem[p].getBoundingClientRect();
        pT = wT + cRect.top;
        pB = pT + cRect.height;

        if (wT < pB && wB > pT) {
          loadFullImage(pItem[p]);
          pItem[p].classList.remove('replace');
        }
        else p++;
      }
    }

    // replace with full image
    function loadFullImage(item) {

      if (!item || !item.href) return;

      // load image
      var img = new Image();
      if (item.dataset) {
        img.srcset = item.dataset.srcset || '';
        img.sizes = item.dataset.sizes || '';
      }

      img.src = item.href;
      img.className = 'reveal';

      if (img.complete) {
        addImg();
      } else {
        img.onload = addImg;
      } 

      // replace image
      function addImg() {

        // disable click
        item.addEventListener('click', function(e) { 
          e.preventDefault(); 
        }, false);

        // add full image
        item.appendChild(img).addEventListener('animationend', function(e) {

          // remove preview image
          var pImg = item.querySelector && item.querySelector('img.preview');
          if (pImg != null) {
            e.target.alt = pImg.alt || '';
            item.removeChild(pImg);
            e.target.classList.remove('reveal');
          }

        });

      }

    }

  }, false);

}

// Top bar scrolling behavior

window.addEventListener('scroll', function(e) {

  let el = document.getElementById('top-bar--onscroll');
  if (el != null){
    el.style.opacity = getOpacity();
  }

});

function getOpacity(){

  let offset = 60;
  let animation_start = 0 + offset;
  let animation_end = 180 + offset;

  if (window.scrollY < animation_start ) return 0;
  else {
    let opacity = window.scrollY / animation_end;
    return (opacity <= 1) ? opacity : 1;
  }

}
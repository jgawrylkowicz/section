Barba.Pjax.Dom.containerClass = 'container';
Barba.Pjax.Dom.wrapperId = 'wrapper';
Barba.Pjax.start();

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
      duration: 500
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
      duration: 500
    });

    animation.finished.then(_this.done());
  }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

Barba.Dispatcher.on('transitionCompleted', function() {
  let el = document.getElementById("article__img");
  if (el != null){
    //el.classList.add("article__img--shadow");
  }
});

window.onload = function(){
  let el = document.getElementById("article__img");
  if (el != null){
    //el.classList.add("article__img--shadow");
  }
}

Barba.Dispatcher.on('linkClicked', function() {
  let el = document.getElementById("article__img");
  if (el != null){
    el.classList.remove("article__img--shadow");
  }
});
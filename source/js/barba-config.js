Barba.Pjax.Dom.containerClass = 'container';
Barba.Pjax.Dom.wrapperId = 'wrapper';
Barba.Pjax.start();
// Barba.Prefetch.init();
// Prefetch may lead to to some undesired visual imperfections

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {


    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(
        this.fadeIn.bind(this)
      );
  },

  fadeOut: function() {

    let animation = anime({
      targets: this.oldContainer,
      opacity: 0,
      easing: [.17,.67,.16,.99],
      duration: 700
    });

    return animation.finished;

  },

  fadeIn: function() {

    window.scrollTo(0, 0);
    var _this = this;
   
    this.oldContainer.style.visibility = 'visible';
    this.oldContainer.style.opacity = 0;

    this.newContainer.style.visibility = 'visible';
    this.newContainer.style.opacity = 0;
  
    let animation = anime({
      targets: this.newContainer,
      opacity: 1,
      easing: [.17,.67,.16,.99],
      duration: 700
    });

    // anime({
    //   targets: '.top-bar__container',
    //   opacity: 0,
    //   easing: [.17,.67,.16,.99],
    //   duration: 200
    // })

    animation.finished.then(_this.done());
  }
});

Barba.Pjax.getTransition = function() {
  
  return FadeTransition;
};

Barba.Dispatcher.on('transitionCompleted', function() {
  AOS.refresh();
});
let postCollection = document.getElementsByClassName('post');

for (let i = 0; i < postCollection.length; i++){

  let postElement = postCollection[i];
  postElement.addEventListener('mouseenter', function(){

    anime.remove(this);
    anime({
      targets: this,
      scale: 1.05,
      duration: 300,
      elasticity: 100,
      delay: 0
    });

  } , false);
  postElement.addEventListener('mouseleave', function(){

    anime.remove(this);
    anime({
      targets: this,
      scale: 1,
      duration: 300,
      elasticity: 100,
      delay: 0
    });

  } , false);

}


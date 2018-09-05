let postCollection = document.querySelectorAll('.post');

for (let i = 0; i < postCollection.length; i++){

  let postElement = postCollection[i];
  postElement.addEventListener('mouseenter', function(){

    this.classList.add('no-delay');

  } , false);
  
  postElement.addEventListener('mouseleave', function(){

    // A timeout necessary, the event animationend is fired up too early
    setTimeout( ()=>{
      this.classList.remove('no-delay');
    }, 300);

  } , false);

}


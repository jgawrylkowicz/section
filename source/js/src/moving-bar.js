window.addEventListener('scroll', function(e) {

  let collection = document.getElementsByClassName('color-bar');
  if (collection != null){
    let bar = collection[0];
    if (bar != null) {
      bar.style.width = getPercentage() + "%"
    }
  }

});

function getPercentage(){

  let percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  if (percentage >= 100) return 100;
  if (percentage <= 0) return 0;
  
  return percentage;
}
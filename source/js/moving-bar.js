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
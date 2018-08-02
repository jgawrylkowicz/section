
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

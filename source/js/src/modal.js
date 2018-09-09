
var modal = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'],
  closeLabel: "Close",

  onOpen: function() {
    //console.log('modal open');
    
   

    let animation = anime({
      targets: 'article__content',
      opacity: 1,
      easing: [.17,.67,.16,.99],
      duration: 300
    });


    let closeButton = document.getElementById('close');
    if (closeButton != null){
      closeButton.addEventListener('click', (event)=>{
        this.close();
    });
    }     
 
  },
  onClose: function() {
    //console.log('modal closed');
  },
  beforeClose: function() {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      return false; // nothing happens
  },
  beforeOpen: function(){

    let content = document.querySelector('article__content');
    if (content != null){
      content.style.opacity = 0;
    }
   
  }


});


let links = document.querySelectorAll('.post-link');
//console.log(links);
if (links != null){
  for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', async (event)=> {

      event.preventDefault();
      
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          modal.setContent(xhr.responseText);
        }
      };
        
      await xhr.open('GET', event.target.href);
      await xhr.send();
      
      modal.open();

    })
  }
}




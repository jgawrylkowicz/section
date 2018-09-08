
let links = document.querySelectorAll('.post-link');
//console.log(links);
if (links != null){
  for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', (event)=> {
      console.log('clicked');
      event.preventDefault();

      //console.log(event.target.href);
      
      var modal = new tingle.modal({
        footer: false,
        stickyFooter: false,
        closeMethods: ['overlay', 'escape'],
        closeLabel: "Close",
        //cssClass: ['custom-class-1', 'custom-class-2'],
      
        onOpen: function() {
          //console.log('modal open');
          
        },
        onClose: function() {
          //console.log('modal closed');
        },
        beforeClose: function() {
            // here's goes some logic
            // e.g. save content before closing the modal
            return true; // close the modal
            return false; // nothing happens
        }
      });

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          modal.setContent(xhr.responseText);
        }
      };
        
      xhr.open('GET', event.target.href);
      xhr.send();
      
      modal.open();

    })
  }
}



// need to merge the two bars first

let surname = document.getElementsByClassName('surname');
if (surname != null){
  window.localStorage.setItem('text', surname[0].innerHTML);
}

window.addEventListener('scroll', function(e) {

  let step = 10;
  let surname = document.getElementsByClassName('surname');

  if (surname != null){

    for(let i = 0; i < surname.length; i++){
      
      let length = ~~(window.scrollY / step);
      surname[i].innerHTML = getByLength(length);
    
      function getByLength(length){
        
        let text = null;
        try {
          text = new String(window.localStorage.getItem('text'));
        } catch(e) {
          console.error("No text saved.")
        }

        if (text != null){
        
          if (length <= 1) {
            return text.toString();
          } else if (length >= text.length ){
            return text.substring(0, text.length - (text.length - 1));
          } else {
            return text.substring(0, text.length - length);
            // reversed
            // text.substring(0, text.length - (text.length - length));
          }
        }
       
      
      }

    }
  }

});

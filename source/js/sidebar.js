// Settings for pjax
(function($) {
  $(document).pjax('[data-pjax] a, a[data-pjax]', '#main', {
    fragment: '#main',
    timeout: 10000,
    push: true
  }).on('pjax:send', function() {
    //console.log('sent');
    // $('#content')
    // .animate({
    //   opacity: 0,
    // },{
    //   duration: 150,
    // })
    // .removeClass('fade-in');
  }).on('pjax:complete', function() {
    // $('#content')
    // .css('opacity', '0')
    // .addClass('fade-in');  
   // console.log("complete");
  }).ready(function() {
    //console.log('rendered');
  }).on('pjax:end', function(){
    //resize_excerpts();
  });
})(jQuery);

// Open the sidebar
$('#menu').click(function(event) {
  event.stopPropagation();
  $('#header').toggleClass('show-header');
});

// Close the sidebar
$('#close').click(function(event) {
  event.stopPropagation();
  $('#header').toggleClass('show-header');
});

// Close the sidebar whhen clicked on a element
$('body,html').click(function(event){
  $('#header').removeClass('show-header');
});

//Flowtype.js
$('body').flowtype({
   minFont : 12,
   maxFont : 15
});

document.onload = $('body').css("opacity", 1);
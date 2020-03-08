var accItem = document.getElementsByClassName('questions-answer');
var accHD = document.getElementsByClassName('questions-answer__title');
var popupName = ('.popup-answer');
var link = ('.button');

for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'questions-answer close';
    }
    if (itemClass == 'questions-answer close') {
        this.parentNode.className = 'questions-answer open';
    }
}
/* modal popup */
$(document).ready(function($) {
  $('.button').on('click', function() {
    $('.modal-answer').text($(this).attr('data-popup'));
    $('.modal').css("display", "flex").hide().fadeIn();
    return false;
  });	
	
  $('.modal-close').click(function() {
    $(this).parents('.modal').fadeOut();
    return false;
  });		
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal').fadeOut();
    }
  });
	
  $('.modal').click(function(e) {
    if ($(e.target).closest('.modal-block').length == 0) {
      $(this).fadeOut();					
    }
  });
});
$('li').click(function(){
  $(this).toggleClass('active');
	$(this).find('ul').toggleClass('active');
});
$('small').click(function(){  $(this).find('.changelog').toggleClass('active');
});
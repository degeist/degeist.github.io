
	
$(window).scroll(function() {
	if($(this).scrollTop() != 0 && $(window).width() > 768) {
		$('#stickynav').fadeIn();
		stickyNav();			
	} else {
		$('#stickynav').fadeOut();
	}
});

   


function stickyNav(){
  
  	var numDivs = $('section').length;
	
  	$('#stickynav li a').removeClass('active').parent('li').removeClass('active');  	
  	$('section').each(function(i,item){
      var ele = $(item), nextTop;
      
      console.log(ele.next().html());
      
      if (typeof ele.next().offset() != "undefined") {
        nextTop = ele.next().offset().top;
      }
      else {
        nextTop = $(document).height();
      }
      
      if (ele.offset() !== null) {
        thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numDivs);
      }
      else {
        thisTop = 0;
      }
      
      var docTop = $(document).scrollTop();
      
      if(docTop >= thisTop && (docTop < nextTop)){
        $('#stickynav li').eq(i).addClass('active');
      }
	});   
}

/* get clicks working */
$('#stickynav li').click(function(){
  
	var id = $(this).find('a').attr("href"),
      posi,
      ele
  
	ele = $(id);
	posi = ($(ele).offset()||0).top;
  
	$('html, body').animate({scrollTop:posi}, 'slow');
  
	return false;
});

/* end stickyNav */

$('.next-section').click(function(){
  
	var id = $(this).find('a').attr("href"),
      posi,
      ele,
      padding = $('.next-section').height();
  
	ele = $(id);
	posi = ($(ele).offset()||0).top - padding;
  
	$('html, body').animate({scrollTop:posi}, 'slow');
  
	return false;
});

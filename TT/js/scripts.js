$(document).ready(function() {
    
		function contentSwitcher(settings){
        var settings = {
           contentClass : '.main',
           navigationId : '#menu'
        };
 
        //Hide all of the content except the first one on the nav
        $(settings.contentClass).not(':first').hide();
        $(settings.navigationId).find('li:first').addClass('active');
 
        //onClick set the active state, 
        //hide the content panels and show the correct one
        $(settings.navigationId).find('a').click(function(e){
            var contentToShow = $(this).attr('href');
            contentToShow = $(contentToShow);
 
            //dissable normal link behaviour
            e.preventDefault();
 
            //set the proper active class for active state css
            $(settings.navigationId).find('li').removeClass('active');
            $(this).parent('li').addClass('active');
 
            //hide the old content and show the new
            $(settings.contentClass).hide();
            contentToShow.show();
        });
    }
    contentSwitcher();	




});
	
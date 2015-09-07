$(document).ready(function(){
	$('form').submit(function(e){
			var thisForm = $(this);
			//Prevent the default form action
			e.preventDefault();
			//Hide the form
			$(this).fadeOut(function(){
				//Display the "loading" message
				$("#loading").fadeIn(function(){
					//Post the form to the send script
					$.ajax({
						type: 'POST',
						url: thisForm.attr("action"),
						data: thisForm.serialize(),
						//Wait for a successful response
						success: function(data){
							//Hide the "loading" message
							$("#loading").fadeOut(function(){
								//Display the "success" message
								$("#success").text(data).fadeIn();
							});
						}
					});
				});
			});
		});
});

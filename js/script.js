function ve(email){var filter=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;if(filter.test(email)){return true;}else{return false;}}
$(document).ready(function(){
	$(".submit").click(function(){
		
		
		var email=$("input[name='email']").val();
		if(!ve(email)){
			$("label#email_error").fadeIn('slow').css('display','block');
			$("input[name='email']").focus();
			return false;
		}else{
			$("label#email_error").css('display','none');
		}
		
		var message=$("textarea[name='message']").val();
		if($.trim(message).length<=3){
			$("label#message_error").fadeIn('slow').css('display','block');
			$("textarea[name='message']").focus();
			return false;
		}else{
			$("label#message_error").css('display','none');
		}
		
		var ds='email='+email+'&message='+message;
		
		$('.submit').hide();

		$("#loading").fadeIn(100);
		
		$.ajax({
			type: "POST",
			url: "post.php",
			data: ds,
			success:function(){
				$('form').html("<h2 class='featurette-heading contact-success'>Message sent<br /><span class='emph'>Thank you</span></h2>")
				.hide()
				.fadeIn(750);
			}
		});
		return false;
	});
});

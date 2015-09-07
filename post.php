<?php
	//error_reporting (E_ALL ^ E_NOTICE);
	$post = (!empty($_POST)) ? true : false;

if($post)
	{
		$email = trim($_POST['email']);
		$message = stripslashes($_POST['message']);

		mail('hello@degeist.com', 'De Geist enquiry', $message,
     		"From: <".$email.">\r\n"
    		."Reply-To: ".$email."\r\n"
    		."X-Mailer: PHP/" . phpversion());

	}
?>
<html>
	<body>
		<?php

		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$email = $_POST['email'];

		//Sending Email to form owner
		$header = "From: $email\n"
		. "Reply-To: $email\n";
		$subject = "Submission From My Form";
		$email_to = "cdwyer@cala.fsu.edu";
		$message = "name: $fname . $lname\n"
		. "email: $email\n";

		mail($email_to, $subject ,$message ,$header ) ;

		?>
		<h1>Thank You for Your Submission</h1>

<p> Your information has been sent, you will now receive our mailer, invitations and other tantalizing offers we have</p>

<p>Again, thank you for your interest in my new web site</p> 
	</body>
</html>
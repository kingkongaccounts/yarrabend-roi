<?php
// check for valid email
// otherwise bounce
if(filter_var($_POST['applicant1_email'], FILTER_VALIDATE_EMAIL)) {

	if($_SERVER['HTTP_HOST'] == 'yarrabend.com.au') {
		// //connect to db
		$mysqli = new mysqli("localhost", "yarrabend", "VpZYk7UXmW4xViwi", "yarrabend", 8889);

		if ($mysqli->connect_errno) {
			echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
		}


	    $applicant1_title = $mysqli->real_escape_string($_POST['applicant1_title']);
	    $applicant1_first_name = $mysqli->real_escape_string($_POST['applicant1_first_name']);
	    $applicant1_last_name = $mysqli->real_escape_string($_POST['applicant1_last_name']);
	    $applicant1_email = $mysqli->real_escape_string($_POST['applicant1_email']);
	    $applicant1_phone = $mysqli->real_escape_string($_POST['applicant1_phone']);
	    $applicant1_street = $mysqli->real_escape_string($_POST['applicant1_street']);
	    $applicant1_city = $mysqli->real_escape_string($_POST['applicant1_city']);
	    $applicant1_postcode = $mysqli->real_escape_string($_POST['applicant1_postcode']);
	    $applicant1_state = $mysqli->real_escape_string($_POST['applicant1_state']);
	    $applicant1_country = $mysqli->real_escape_string($_POST['applicant1_country']);
	    $applicant2 = $mysqli->real_escape_string($_POST['applicant2']);
	    $applicant2_first_name = $mysqli->real_escape_string($_POST['applicant2_first_name']);
	    $applicant2_last_name = $mysqli->real_escape_string($_POST['applicant2_last_name']);
	    $applicant2_email = $mysqli->real_escape_string($_POST['applicant2_email']);
	    $applicant2_phone = $mysqli->real_escape_string($_POST['applicant2_phone']);
	    $applicant2_street = $mysqli->real_escape_string($_POST['applicant2_street']);
	    $applicant2_city = $mysqli->real_escape_string($_POST['applicant2_city']);
	    $applicant2_postcode = $mysqli->real_escape_string($_POST['applicant2_postcode']);
	    $applicant2_state = $mysqli->real_escape_string($_POST['applicant2_state']);
	    $applicant2_country = $mysqli->real_escape_string($_POST['applicant2_country']);
	    $identification = $mysqli->real_escape_string($_POST['identification']);
	    $product1 = $mysqli->real_escape_string($_POST['product1']);
	    $product2 = $mysqli->real_escape_string($_POST['product2']);
	    $product3 = $mysqli->real_escape_string($_POST['product3']);


		$query  = "INSERT INTO `eoi` (`applicant1_title`, `applicant1_first_name`, `applicant1_last_name`, `applicant1_email`, `applicant1_phone`, `applicant1_street`, `applicant1_city`, `applicant1_postcode`, `applicant1_state`, `applicant1_country`, `applicant2`, `applicant2_first_name`, `applicant2_last_name`, `applicant2_email`, `applicant2_phone`, `applicant2_street`, `applicant2_city`, `applicant2_postcode`, `applicant2_state`, `applicant2_country`, `identification`, `product1`, `product2`, `product3`, `timestamp`)
					VALUES ('$applicant1', '$applicant1_first_name', '$applicant1_last_name', '$applicant1_email', '$applicant1_phone', '$applicant1_street', '$applicant1_city', '$applicant1_postcode', '$applicant1_state', '$applicant1_country', '$on', '$applicant2_first_name', '$applicant2_last_name', '$applicant2_email', '$applicant2_phone', '$applicant2_street', '$applicant2_city', '$applicant2_postcode', '$applicant2_state', '$applicant2_country', '$identification', '$product1', '$product2', '$product3', NOW())";

		$mysqli->query($query);
	}

	require 'vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->SMTPDebug  = 2;

	$mail->setFrom('no-reply@yarrabend.com.au', 'YarraBend EOI');
	$mail->addAddress('jolane@jolane.net', 'Jolane Synott');
	$mail->isHTML(false);

	$mail->Subject = 'New YarraBend EOI';

	foreach($_POST as $key => $val) {
		$mail->Body .=  $key.': '.$val."\n";	
	}

	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'Message has been sent';
	}

	header("location: eoi-thankyou.html");
	exit();

} else {

	header("location: eoi.html");
	exit();

}
?>
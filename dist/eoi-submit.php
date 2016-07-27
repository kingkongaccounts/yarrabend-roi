<?php
// check for valid email
// otherwise bounce
if(filter_var($_POST['applicant1_email'], FILTER_VALIDATE_EMAIL)) {

	//connect to db
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


	// send email
	$to = 'jolane.synott@cornwell.com.au';
	$subject = "New EOI from YarraBend.";
	$headers = 'From: no-reply@yarrabend.com.au' . "\r\n";
	$message = "
applicant1_title: $applicant1_title \n
applicant1_first_name: $applicant1_first_name \n
applicant1_last_name: $applicant1_last_name \n
applicant1_email: $applicant1_email \n
applicant1_phone: $applicant1_phone \n
applicant1_street: $applicant1_street \n
applicant1_city: $applicant1_city \n
applicant1_postcode: $applicant1_postcode \n
applicant1_state: $applicant1_state \n
applicant1_country: $applicant1_country \n
applicant2: $applicant2 \n
applicant2_first_name: $applicant2_first_name \n
applicant2_last_name: $applicant2_last_name \n
applicant2_email: $applicant2_email \n
applicant2_phone: $applicant2_phone \n
applicant2_street: $applicant2_street \n
applicant2_city: $applicant2_city \n
applicant2_postcode: $applicant2_postcode \n
applicant2_state: $applicant2_state \n
applicant2_country: $applicant2_country \n
identification: $identification \n
product1: $product1 \n
product2: $product2 \n
product3: $product3 \n
";

	mail($to, $subject, $message, $headers);


	header("location: eoi-thankyou.html");
	exit();

} else {

	header("location: eoi.html");
	exit();

}
?>
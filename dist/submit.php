<?php
// check for valid email
// otherwise bounce
if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

	//connect to db
	$mysqli = new mysqli("localhost", "yarrabend", "VpZYk7UXmW4xViwi", "yarrabend", 8889);

	if ($mysqli->connect_errno) {
		echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}


	$first_name = $mysqli->real_escape_string($_POST['first_name']);
	$last_name = $mysqli->real_escape_string($_POST['last_name']);
	$email = $mysqli->real_escape_string($_POST['email']);
	$phone = $mysqli->real_escape_string($_POST['phone']);
	$postcode = $mysqli->real_escape_string($_POST['postcode']);
	$product_type = $mysqli->real_escape_string($_POST['product_type']);
	$ip_address = $_SERVER['REMOTE_ADDR'];


	$query = "INSERT INTO `registrations`
			(`first_name`, `last_name`, `email`, `phone`, `postcode`, `product_type`, `ip_address`, `timestamp`)
			VALUES ('$first_name', '$last_name', '$email', '$phone', '$postcode', '$product_type', '$ip_address', NOW())";

	$mysqli->query($query);


	header("location: thankyou.html");
	exit();

} else {

	header("location: register.html");
	exit();

}
?>
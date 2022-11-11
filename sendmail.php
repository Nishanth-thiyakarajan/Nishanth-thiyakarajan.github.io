<?php
$errors = "";
$myemail = 'nishanth.thiyakarajan@gmail.com';//<-----Put Your email address here.
// if(empty($_POST['name'])  || 
//    empty($_POST['email']) ||
//    empty($_POST['subject']) ||
//    empty($_POST['message']))
// {
//     $errors .= "\n Error: all fields are required";
// }

// $name = $_POST['name']; 
// $email_address = $_POST['email'];
// $subject = $_POST['subject'];
// $message = $_POST['message']; 

// if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address))
// {
//     $errors .= "\n Error: Invalid email address";
// }

// if( empty($errors))

{
$to = $myemail;
$email_subject = "New Mail - {$subject} - from your website";

$email_body = "Name: $name \n
               Message: $message ";

$headers = "From: nishanth.thiyakarajan@gmail.com\n";
$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page

header('Location: index.html');

}

?>
<?php 
$name = $_POST['name'];
$dateOfBirth = $_POST['birthday'];
$age = $_POST['age'];
$email = $_POST['email'];
$country = $_POST['country'];
$city = $_POST['city'];
$inGameNick = $_POST['In-game-nick'];
$about = $_POST['about'];
$honey = $_POST['_honey'];

$to = 'jens_nickelsen@live.com';

?>

<?php 
$email_from = "Tot1 Clan Application";

$email_subject = "New Clan Application";

$email_body = "User Name: $name.\n".
              "User Date of Birth: $dateOfBirth.\n".
              "User Age: $age.\n".
              "User Email: $email.\n".
              "User Country: $country.\n".
              "User City: $city.\n".
              "User In-Game-Nick: $inGameNick.\n".
              "User About: $about.\n";

if($honey){
    die();
}
else{
    mail($to,$email_subject,$email_body);
}
?>
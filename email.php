<?php
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$phone = strip_tags($_POST['phone']);
$institution = strip_tags($_POST['institution']);
$comment = strip_tags($_POST['comment']);

// TO
$to = 'kami@thegreerco.com';

// SUBJECT
$subject = 'Contact Request';

// FROM
$headers = "From: auto@five12.org\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// TYPES
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

// MESSAGE
$message = '
<html>
<body style="font-family: arial narrow, helvetica, sans-serif; padding: 30px; background-color: #e3e3e3;">
<div style="max-width: 600px; margin: 0 auto; text-align: center;">
    <div style="text-align: left; background-color: #DD5826; padding: 20px; color: #fff; font-size: 20px; font-weight: 700;">
        Five12 Contact Request
    </div>
    <div style="text-align: left; background-color: #fff; padding: 20px; font-size: 16px;">
        <div>Name: '.$name.'</div><br>
        <div>Email: '.$email.'</div><br>
        <div>Institution: '.$institution.'</div><br>
        <div>Phone: '.$phone.'</div><br>
        <div>Comment:</div><br>
        <div>"'.$comment.'"</div>
    </div>
</div>

</body>
</html>';

// SEND EMAIL
if (mail($to, $subject, $message, $headers)) {
    print 'true';
} else {
    print 'false';
}

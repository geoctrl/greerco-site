<?php

require_once 'mandrill/Mandrill.php';

$postData = file_get_contents("php://input");
$request = json_decode($postData, true);

$name = strip_tags($request['name']['$viewValue']);
$email = strip_tags($request['email']['$viewValue']);

try {
    $mandrill = new Mandrill('FRKHkLf05PO6PeZNxqZ4xg');
    $message = array(
        'html' => '
            <html>
            <body style="font-family: arial narrow, helvetica, sans-serif; padding: 30px; background-color: #e3e3e3;">
            <div style="max-width: 600px; margin: 0 auto; text-align: center;">
                <div style="text-align: left; background-color: #DD5826; padding: 20px; color: #fff; font-size: 20px; font-weight: 700;">
                    Five12 Contact Request
                </div>
                <div style="text-align: left; background-color: #fff; padding: 20px; font-size: 16px;">
                    <div>Name: '.$name.'</div><br>
                    <div>Email: '.$email.'</div>
                </div>
            </div>

            </body>
            </html>',
        'subject' => 'TheGreerCo.com Contact Request',
        'from_email' => 'auto@thegreerco.com',
        'to' => array(
            array(
                'email' => 'kami@thegreerco.com'
            )
        ),
    );
    $result = $mandrill->messages->send($message);
    print_r($result);

} catch(Mandrill_Error $e) {
    // Mandrill errors are thrown as exceptions
    echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
    // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    throw $e;
}




//// TO
//$to = 'kami@thegreerco.com';
//
//// SUBJECT
//$subject = 'Contact Request';
//
//// FROM
//$headers = "From: auto@thegreerco.com\r\n";
//$headers .= "Reply-To: " . $email . "\r\n";
//
//// TYPES
//$headers .= "MIME-Version: 1.0\r\n";
//$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
//
//// MESSAGE
//$message = '
//<html>
//<body style="font-family: arial narrow, helvetica, sans-serif; padding: 30px; background-color: #e3e3e3;">
//<div style="max-width: 600px; margin: 0 auto; text-align: center;">
//    <div style="text-align: left; background-color: #DD5826; padding: 20px; color: #fff; font-size: 20px; font-weight: 700;">
//        Five12 Contact Request
//    </div>
//    <div style="text-align: left; background-color: #fff; padding: 20px; font-size: 16px;">
//        <div>Name: '.$name.'</div><br>
//        <div>Email: '.$email.'</div>
//    </div>
//</div>
//
//</body>
//</html>';
//
//// SEND EMAIL
//if (mail($to, $subject, $message, $headers)) {
//    print 'true';
//} else {
//    print 'false';
//}

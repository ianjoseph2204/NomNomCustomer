<?php 
header('Content-Type: application/json');

require_once 'D:\xampp\htdocs\NomNom_Query\DbOperations.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$username = $request->username;
$password = $request->password;

if($_SERVER['REQUEST_METHOD']=='POST'){
    $db = new DbOperations();

    if($db->loginCustomer($username, $password)){
        $userData = $db->loginCustomer($username, $password);
        $response['error'] = false;
        $response['user_id'] = $userData['user_id'];
        $response['name'] = $userData['name'];
    }else{
        $response['error'] = true;
        $response['message'] = 'Wrong username or password';
    }
}

echo json_encode(array("loginLog"=>$response));
?>
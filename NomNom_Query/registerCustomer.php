<?php
header('Content-Type: application/json');

//ganti directorynya
require_once 'D:\xampp\htdocs\NomNom_Query\DbOperations.php';
$response   = array();
        
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$nama       = $request->nama;
$email      = $request->email;
$password   = $request->password;
$username   = $request->username;
$alamat     = $request->alamat;
$tel        = $request->tel;
    
if($_SERVER['REQUEST_METHOD']=='POST'){
    $db = new DbOperations();

    $result = $db->registerCustomer($nama,$username,$password,$email,$alamat,$tel);
    if($result == 0){
        $response['error'] = true;
        $response['message'] = "username has already been registered";
    }elseif($result == 1){
        $response['error'] = false;
        $response['message'] = "Successfully registered your account";
    }elseif($result == 2){
        $response['error'] = true;
        $response['message'] = "Failed to registered your account";
    }
}

echo json_encode(array("registerLog"=>$response));
?>

<?php

class DbOperations{
    private $conn;
    
    function __construct(){
        require_once dirName(__FILE__).'\DbConnect.php';
        
        $db = new DbConnect();
        
        $this -> conn = $db -> connect();
    }
    
    public function getMealType($resto_id){
        $types = $this->conn->prepare("SELECT `meal_type_id`, `type_name` FROM meal_type 
                                            WHERE `restaurant_id` = ".$resto_id."
                                            ORDER BY `meal_type_id` ASC");
        $types->execute();
        return $types->get_result();
    }

    public function loginCustomer($username, $password)
	{
    	$user = $this->conn->prepare("SELECT `user_id`, `name` FROM `user` 
                                        WHERE `username`= ? && `password`= ?");
        $user->bind_param("ss", $username, $password);                                        
        $user->execute();
        return $user->get_result()->fetch_assoc();
    }

    public function registerCustomer($name,$username,$password,$email,$address,$phone_number){
        if($this -> customerExist($username)){
            return 0; //'username has already been registered';
        } else{
            $sql = $this->conn->prepare("INSERT INTO user (`name`,`phone_number`,`email`,`username`,`password`,`address`) VALUES (?,?,?,?,?,?)");
            $sql->bind_param("ssssss", $name, $phone_number, $email, $username, $password,$address);                                                
            
            if($sql -> execute()){
                return 1;//'Successfully registered your account';
            }else{
                return 2;//'Failed to registered your account';
            }
        }
    }
    
    public function customerExist($username){
        $query = $this -> conn -> prepare ("SELECT `user_id` FROM `user` 
                                                WHERE `username`= ?");
        $query->bind_param("s", $username);
        $query->execute();
        $query->store_result();
        $query->num_rows();
        return $query->num_rows > 0;
    }

   

    public function getMenuList($resto_id, $meal_type_id){
        $meals = $this->conn->prepare("SELECT `meal_id`, `meal_name`, `prep_time`, `description`, `price`, `status_id` 
                                            FROM meal
                                            WHERE `meal_type_id` = ".$meal_type_id." 
                                            && `restaurant_id` =".$resto_id);
        $meals->execute();
        return $meals->get_result();
    }

    public function registCard($username, $UID){
        if($this->isCardExist($UID)){
            return 0; //'This card has already been registered on another account';
        }
        
        elseif($this->isUserHasCard($username)){
            return 1; //'User\'s card has been registered';
        }

        else{
            $query = $this -> conn -> prepare("UPDATE `user_contact` SET `serial_nfc`= ? WHERE `username` = ?");
            $query -> bind_param("ss",$UID, $username);

            if($query -> execute()){
                return 2; //'Successfuly registered your card';
            }
            else{
                return 3;  //'User not found';
            }
        }
    }

    private function isCardExist($UID){
        $stmt = $this -> conn -> prepare("SELECT serial_nfc FROM user_contact
                                            WHERE serial_nfc = ?");
        $stmt->bind_param("s", $UID);
        $stmt->execute();
        $stmt->store_result();
        $stmt->num_rows();
        return $stmt->num_rows > 0;
    }

    private function isUserHasCard($username){
        $stmt = $this -> conn -> prepare("SELECT id_user FROM user_contact
                                            WHERE username = ? AND serial_nfc IS NOT NULL");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();
        $stmt->num_rows();
        return $stmt->num_rows > 0;
    }

    public function getCourseNameList($username){
        $stmt = $this->conn->prepare("SELECT id_class, nama_class FROM class WHERE id_class IN
                                        (SELECT id_class FROM class_guru WHERE id_user IN
                                        (SELECT `id_user` FROM user_contact WHERE username = ?))
                                        ORDER BY nama_class ASC");
        $stmt->bind_param("s",$username);
        $stmt->execute();
       return $stmt->get_result();
    }

    public function userLogin($username, $pass){
        $password = md5($pass);
        $stmt = $this->conn->prepare("SELECT id_user FROM user_contact
                                        WHERE username = ? AND password = ?");
        $stmt->bind_param("ss", $username, $password);
        $stmt->execute();
        $stmt->store_result();
        return $stmt->num_rows > 0;
    }

    public function getUserByUsername($username){
        $stmt = $this->conn->prepare("SELECT * FROM user_contact WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public function getUserByUid($UID){
        $stmt = $this->conn->prepare("SELECT * FROM user_contact WHERE serial_nfc = ?");
        $stmt->bind_param("s", $UID);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public function checkAttendance($UID, $id_class){
        if($this->isAttendanceExist($UID, $id_class)){
            return 0; //$user + ' has checked attendance before'
        }

        else{

            if($this->getUserByUid($UID)){
                $stmt = $this->conn->prepare("INSERT INTO `r_absence`(`id_user`, `id_class`,`status`) VALUES ((SELECT id_user FROM user_contact WHERE serial_nfc = ?), ?, 1)");
                $stmt->bind_param("ss", $UID, $id_class);

                $stmt->execute();
                return 1; //$user + ' Successfully checking attendance';
            }

            else{
                return 2; //'User not found';
            }
        }
    }

    private function isAttendanceExist($UID, $id_class){
        $stmt = $this -> conn -> prepare("SELECT id_user, id_class, status FROM r_absence WHERE id_user IN
                                            (SELECT id_user FROM user_contact WHERE serial_nfc = ?) AND id_class = ? AND status = 1");
        $stmt->bind_param("ss", $UID, $id_class);
        $stmt->execute();
        $stmt->store_result();
        $stmt->num_rows();
        return $stmt->num_rows > 0;
    }
}

?>
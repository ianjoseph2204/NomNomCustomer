<?php
header('Content-Type: application/json');

require_once 'D:\xampp\htdocs\NomNom_Query\DbOperations.php';
$response = array();
        
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$resto_id = $request->resto_id;

if($_SERVER['REQUEST_METHOD']=='POST'){
    $db = new DbOperations();
    $array = array();
    $row = array();
    $column = array();

    if($db->getMealType($resto_id)){
        $types = $db->getMealType($resto_id);

        while($types_array = mysqli_fetch_assoc($types)){
            $row['meal_type_id'] = $types_array['meal_type_id'];
            $row['type_name'] = $types_array['type_name'];
            $row['children'] = array();
            
            $meals = $db->getMenuList($resto_id, $types_array['meal_type_id']);
            while($meals_array = mysqli_fetch_assoc($meals)){
                $column['meal_id'] = $meals_array['meal_id'];
                $column['meal_name'] = $meals_array['meal_name'];
                $column['prep_time'] = $meals_array['prep_time'];
                $column['description'] = $meals_array['description'];
                $column['price'] = $meals_array['price'];
                $column['status_id'] = $meals_array['status_id'];
                array_push($row['children'], $column);
            }
            array_push($array, $row);
        }
        
        $response['error'] = false;
        $response = $array;
    }

    else{
        $response['error'] = true;
        $response['message'] = 'Failed to obtain menu';
    }
}

echo json_encode(array("menuList"=>$response));
?>

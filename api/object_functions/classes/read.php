<?php
//xdebug_disable(); //!
//error_reporting(0); //!
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//4.3
include_once '../../config/Database.php';
include_once '../../objects/Classes.php';

$database = new Database();
$db = $database->getConnection();

$classes = new Classes($db);

$stmt = $classes->read();
$num = $stmt->rowCount();

if($num > 0){
    $classes_arr = array();
    $classes_arr['records']=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        //$row['name'] to just $name
        extract($row);

        $classes_item = array(
            'id'=> $id,
            'name'=> $name,
            'mainTeacherID'=> $abbreviation // ok?
        );
        array_push($classes_arr['records'], $classes_item);
    }
    http_response_code(200);
    echo json_encode($classes_arr);
}
else{
    http_response_code(404);
    echo json_encode(
        array("message" => "No classes found.")
    );
}

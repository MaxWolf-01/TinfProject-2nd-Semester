<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Teacher.php';

$database = new Database();
$db = $database->getConnection();

$teacher = new Teacher($db);

$data = array('name'=>$_POST['name'], 'abbreviation'=>$_POST['abbreviation']);

if(
    !empty($data['name']) &&
    !empty($data['abbreviation'])
){
    $teacher->name = $data['name'];
    $teacher->abbreviation = $data['abbreviation'];
    if ($teacher->create()) {
        http_response_code(201);
        echo json_encode(array("message" => "Teacher was created"));
    }
    else{
        http_response_code(503);
        echo json_encode(array("message" => "Creation failed"));
    }
}
else{
    http_response_code(400);
    echo json_encode(array("message" => "Data is incomplete"));
}
?>
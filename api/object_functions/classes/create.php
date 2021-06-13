<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Classes.php';

$database = new Database();
$db = $database->getConnection();

$classes = new Classes($db);

$data = array('name'=>$_POST['name'], 'mainTeacherID'=>$_POST['mainTeacherID']);

if(
    !empty($data['name']) &&
    !empty($data['mainTeacherID'])
){
    $classes->name = $data['name'];
    $classes->mainTeacherID = $data['mainTeacherID'];
    if ($classes->create()) {
        http_response_code(201);
        echo json_encode(array("message" => "Classes was created"));
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
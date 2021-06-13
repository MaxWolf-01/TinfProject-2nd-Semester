<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Classes.php';

$database = new Database();
$db = $database->getConnection();

$classes = new Classes($db);

$data = array('id'=>$_POST['classesId'], 'name'=>$_POST['name'], 'mainTeacherID'=>$_POST['mainTeacherID']);

$classes->id = $data['id'];
$classes->name = $data['name'];
$classes->mainTeacherID = $data['mainTeacherID'];

if($classes->update()){
    http_response_code(200);
    echo json_encode(array("message" => "Classes was updated."));
}
else{
    http_response_code(503);

    echo json_encode(array("message" => "Unable to update classes."));
}
?>

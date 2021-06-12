<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Teacher.php';

$database = new Database();
$db = $database->getConnection();

$teacher = new Teacher($db);

$id = $_POST['teacherId'];
$teacher->id = $id;

if($teacher->delete()){
    http_response_code(200);
    echo json_encode(array("message" => "Teacher was deleted."));
}
else{
    http_response_code(503);
    echo json_encode(array("message" => "Unable to delete teacher."));
}
?>
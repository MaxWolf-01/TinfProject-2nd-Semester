<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Classes.php';

$database = new Database();
$db = $database->getConnection();

$classes = new Classes($db);

$id = $_POST['classesId'];
$classes->id = $id;

if($classes->delete()){
    http_response_code(200);
    echo json_encode(array("message" => "Classes was deleted."));
}
else{
    http_response_code(503);
    echo json_encode(array("message" => "Unable to delete classes."));
}
?>
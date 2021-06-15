<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../objects/Teacher.php';

$database = new Database();
$db = $database->getConnection();

$teacher = new Teacher($db);

$teacher->id = $_GET['id'] ?? die();

$teacher->readSingle();

if($teacher->name!=null){
    $teacher_arr = array(
        "id" =>  $teacher->id,
        "name" => $teacher->name,
        "abbreviation" => $teacher->abbreviation
    );

    http_response_code(200);
    echo json_encode($teacher_arr);
}
else{
    http_response_code(404);
    echo json_encode(array("message" => "Teacher does not exist."));
}
?>
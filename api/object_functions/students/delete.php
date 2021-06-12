<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Student.php';

$database = new Database();
$db = $database->getConnection();

$student = new Student($db);

$id = $_POST['studentId'];
$student->id = $id;

if($student->delete()){
    http_response_code(200);
    echo json_encode(array("message" => "Student was deleted."));
}
else{
    http_response_code(503);
    echo json_encode(array("message" => "Unable to delete student."));
}
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Student.php';

$database = new Database();
$db = $database->getConnection();

$student = new Student($db);

$data = array('name'=>$_POST['name'], 'class'=>$_POST['class'], 'gpa'=>$_POST['gpa']);

if(
    !empty($data['class']) &&
    !empty($data['name']) &&
    !empty($data['gpa'])
){
    $student->name = $data['name'];
    $student->class = $data['class'];
    $student->gpa = $data['gpa'];
    if ($student->create()) {
        http_response_code(201);
        echo json_encode(array("message" => "Student was created"));
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
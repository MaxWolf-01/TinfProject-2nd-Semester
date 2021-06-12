<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Student.php';

$database = new Database();
$db = $database->getConnection();

$student = new Student($db);

$data = array('id'=>$_POST['studentId'], 'name'=>$_POST['name'], 'class'=>$_POST['class'], 'gpa'=>$_POST['gpa']);

$student->id = $data['id'];
$student->name = $data['name'];
$student->class = $data['class'];
$student->gpa = $data['gpa'];

if($student->update()){
    http_response_code(200);
    echo json_encode(array("message" => "Student was updated."));
}
else{
    http_response_code(503);

    echo json_encode(array("message" => "Unable to update student."));
}
?>

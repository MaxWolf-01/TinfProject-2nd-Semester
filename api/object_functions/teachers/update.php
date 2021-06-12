<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/Database.php';
include_once '../../objects/Teacher.php';

$database = new Database();
$db = $database->getConnection();

$teacher = new Teacher($db);

$data = array('id'=>$_POST['teacherId'], 'name'=>$_POST['name'], 'abbreviation'=>$_POST['abbreviation']);
//$data = array('id'=>'2', 'name'=>'bruh', 'abbreviation'=>'momentum');

$teacher->id = $data['id'];
$teacher->name = $data['name'];
$teacher->abbreviation = $data['abbreviation'];

if($teacher->update()){
    http_response_code(200);
    echo json_encode(array("message" => "Teacher was updated."));
}
else{
    http_response_code(503);

    echo json_encode(array("message" => "Unable to update teacher."));
}
?>

<?php
xdebug_disable(); //!
error_reporting(0); //!
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


//include_once '../config/core.php';
include_once '../../config/Database.php';
include_once '../../objects/Student.php';

$database = new Database();
$db = $database->getConnection();

$student = new Student($db);

$keywords= array('name'=>$_POST['name'], 'class'=>$_POST['class'], 'gpa'=>$_POST['gpa']); // isset

$keywords= array_filter($keywords, "filterEmptyKeyWords");

function filterEmptyKeyWords($var): bool
{
    return ($var !== NULL && $var !== FALSE && $var !== "");
}

$stmt = $student->search($keywords);
$num = $stmt->rowCount();

if($num>0){
    $students_arr=array();
    $students_arr["records"]=array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $student_item=array(
            "id" => $id,
            "name" => $name,
            "class" => $class,
            "gpa" => $gpa
        );

        array_push($students_arr["records"], $student_item);
    }
    http_response_code(200);
    echo json_encode($students_arr);
}
else{
    http_response_code(404);
    echo json_encode(
        array("message" => "No students found.")
    );
}
?>
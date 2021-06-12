<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//4.3
include_once '../../config/Database.php';
include_once '../../objects/Teacher.php';

$database = new Database();
$db = $database->getConnection();

$teacher = new Teacher($db);

$stmt = $teacher->read();
$num = $stmt->rowCount();

if($num > 0){
    $teachers_arr = array();
    $teachers_arr['records']=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        //$row['name'] to just $name
        extract($row);

        $teacher_item = array(
            'id'=> $id,
            'name'=> $name,
            'abbreviation'=> $abbreviation
        );
        array_push($teachers_arr['records'], $teacher_item);
    }
    http_response_code(200);
    echo json_encode($teachers_arr);
}
else{
    http_response_code(404);
    echo json_encode(
        array("message" => "No teachers found.")
    );
}

<?php
class Lesson
{
    private $conn;
    private $table_name = "lessons";

    public $id;
    public $classID;
    public $teacherID;
    public $subject;
    public $day;
    public $hour;

    public function __construct($db)
    {
        $this->conn = $db;
    }
}
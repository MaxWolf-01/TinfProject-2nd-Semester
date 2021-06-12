<?php
class Student{
    private $conn;
    private $table_name = "students";

    public $id;
    public $name;
    public $class;
    public $gpa;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    function read(){
        $query = "SELECT s.id, s.name, s.class, s.gpa
                  FROM $this->table_name s";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function create(): bool
    {
        $query = "INSERT INTO
                 $this->table_name
                 (name, class, gpa) 
                 VALUES
                 (:name, :class, :gpa)";
        $stmt = $this->conn->prepare($query);

//        $this->name = htmlspecialchars(strip_tags($this->name));
//        $this->class = htmlspecialchars(strip_tags($this->class));
//        $this->class = htmlspecialchars(strip_tags($this->gpa));

        $stmt->bindParam(':name',$this->name);
        $stmt->bindParam(':class',$this->class);
        $stmt->bindParam(':gpa',$this->gpa);
        if ($stmt->execute())
            return true;
        return false;
    }

    function delete(): bool
    {
        $query = "DELETE FROM $this->table_name WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $this->id=htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(1, $this->id);
        if($stmt->execute())
            return true;
        return false;
    }

    function update(): bool
    {
        $query = "UPDATE $this->table_name
                  SET
                      name = :name,
                      class = :class,
                      gpa = :gpa
                  WHERE
                      id = :id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':class', $this->class);
        $stmt->bindParam(':gpa', $this->gpa);
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute())
            return true;
        return false;
    }

    public function search(array $keywords)
    {
        $query =   "SELECT
                        s.id, s.name, s.class, s.gpa
                    FROM
                        $this->table_name s
                    WHERE
                        s.name LIKE ? OR s.class LIKE ? OR s.gpa LIKE ?"; //TODO more specific queries

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $keywords['name']);
        $stmt->bindParam(2, $keywords['class']);
        $stmt->bindParam(3, $keywords['gpa']);

        $stmt->execute();
        return $stmt;
    }
}
?>
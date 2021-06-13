<?php
class Classes
{
    private $conn;
    private $table_name = "classes";
    public $id;
    public $mainTeacherID;
    public $name;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    function read()
    {
        $query = "SELECT c.id, t.abbreviation, c.name
                  FROM $this->table_name c
                  LEFT JOIN teachers t 
                  ON c.mainTeacherID = t.id";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function create(): bool
    {
        $query = "INSERT INTO
                 $this->table_name
                 (name, mainTeacherID) 
                 VALUES
                 (:name, :mainTeacherID)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':mainTeacherID', $this->mainTeacherID);

        if ($stmt->execute())
            return true;
        return false;
    }

    function delete(): bool
    {
        $query = "DELETE FROM $this->table_name WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(1, $this->id);
        if ($stmt->execute())
            return true;
        return false;
    }

    function update(): bool
    {
        $query = "UPDATE $this->table_name
                  SET
                      name = :name,
                      mainTeacherID = :mainTeacherID
                  WHERE
                      id = :id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':mainTeacherID', $this->mainTeacherID);

        if ($stmt->execute())
            return true;
        return false;
    }

    public function search(array $keywords)
    {
        $query = "SELECT
                        c.id, c.name, c.mainTeacherID
                    FROM
                        $this->table_name c
                    WHERE
                        c.name LIKE concat(?, '%') OR c.mainTeacherID LIKE ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $keywords['name']);
        $stmt->bindParam(2, $keywords['mainTeacherID']);

        $stmt->execute();
        return $stmt;
    }
}

{

}
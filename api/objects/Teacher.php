<?php
class Teacher{

    private $conn;
    private $table_name = "teachers";

    public $id;
    public $name;
    public $abbreviation;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    function read(){
        $query = "SELECT t.id, t.name, t.abbreviation
                  FROM $this->table_name t";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function create(): bool
    {
        $query = "INSERT INTO
                 $this->table_name
                 (name, abbreviation) 
                 VALUES
                 (:name, :abbreviation)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':name',$this->name);
        $stmt->bindParam(':abbreviation',$this->abbreviation);

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
                      abbreviation = :abbreviation
                  WHERE
                      id = :id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':abbreviation', $this->abbreviation);

        if($stmt->execute())
            return true;
        return false;
    }

    public function search(array $keywords)
    {
        $query =   "SELECT
                        t.id, t.name, t.abbreviation
                    FROM
                        $this->table_name t
                    WHERE
                        t.name LIKE concat('%', ?, '%') OR t.abbreviation LIKE concat( ?, '%')";  // TODO %%

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $keywords['name']);
        $stmt->bindParam(2, $keywords['abbreviation']);

        $stmt->execute();
        return $stmt;
    }
}
?>
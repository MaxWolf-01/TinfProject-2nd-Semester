function deleteStudent(id){
    let data = {
        studentId : id
    }
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/students/delete.php'
    $.post(url, data)
    location.reload()
}
function deleteTeacher(id){
    let data = {
        teacherId : id
    }
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/teachers/delete.php'
    $.post(url, data)
    location.reload()
}
function deleteClasses(id){
    let data = {
        classesId : id
    }
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/classes/delete.php'
    $.post(url, data)
    location.reload()
}
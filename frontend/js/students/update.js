$(document).ready(function() {
    $('#btn-update-student').click(() => {
        updateStudent();
    });
});

function updateStudent(){
    let studentId = document.getElementById('update-form').name
    let classId = document.getElementById('update-class').value
    classId = JSON.parse(classId).id
    let data = {
        studentId : studentId,
        name: $('#update-name').val(),
        class: classId,
        gpa: $('#update-gpa').val()
    }
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/students/update.php'
    $.post(url, data)
}
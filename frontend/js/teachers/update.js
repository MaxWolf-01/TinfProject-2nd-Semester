$(document).ready(function() {
    $('#btn-update-teacher').click(() => {
        updateTeacher();
    });
});

function updateTeacher(){
    let teacherId = document.getElementById('update-form').name
    let data = {
        teacherId : teacherId,
        name: $('#update-name').val(),
        abbreviation: $('#update-abbreviation').val()
    }
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/teachers/update.php'
    $.post(url, data)
}
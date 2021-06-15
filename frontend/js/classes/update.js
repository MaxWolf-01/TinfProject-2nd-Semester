$(document).ready(function() {
    $('#btn-update-classes').click(() => {
        updateClasses();
    });
});

function updateClasses(){
    let classesId = document.getElementById('update-form').name
    let mainTeacher = document.getElementById('update-mainTeacherID').value
    let mainTeacherID = JSON.parse(mainTeacher).id === null ? "" : JSON.parse(mainTeacher).id
    let data = {
        classesId : classesId,
        name: $('#update-name').val(),
        mainTeacherID: mainTeacherID
    }
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/classes/update.php'
    $.post(url, data)
}
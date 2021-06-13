$(document).ready(function() {
    $('#btn-update-classes').click(() => {
        updateClasses();
    });
});

function updateClasses(){
    let classesId = document.getElementById('update-form').name
    let data = {
        classesId : classesId,
        name: $('#update-name').val(),
        mainTeacherID: $('#update-mainClassesID').val()
    }
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/classes/update.php'
    $.post(url, data)
}
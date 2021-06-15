$(document).ready(function() {
    $('#btn-create-classes').click(() => {
        create();
    });
});

function create() {
    let mainTeacher = document.getElementById('create-mainTeacherID').value
    let mainTeacherID = JSON.parse(mainTeacher).id
    // alert(mainTeacher)
    // alert(JSON.parse(mainTeacher))
    let formData = {
        name: $('#create-name').val(),
        mainTeacherID: mainTeacherID
    }
    let url="http://localhost/TinfProject-2nd-Semester/api/object_functions/classes/create.php"
    $.post(url, formData)
}

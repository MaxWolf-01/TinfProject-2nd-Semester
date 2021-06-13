$(document).ready(function() {
    $('#btn-create-classes').click(() => {
        create();
    });
});

function create() {
    let formData = {
        name: $('#create-name').val(),
        mainTeacherID: $('#create-mainClassesID').val(),
    }
    let url="http://localhost/TinfProject-2nd-Semester/api/object_functions/classes/create.php"
    $.post(url, formData)
}

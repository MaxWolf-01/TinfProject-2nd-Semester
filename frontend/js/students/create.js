$(document).ready(function() {
    $('#btn-create-student').click(() => {
        create();
    });
});

function create() {
    let formData = {
        name: $('#create-name').val(),
        class: $('#create-class').val(),
        gpa: $('#create-gpa').val()
    }
    let url="http://localhost/TinfProject-2nd-Semester/api/object_functions/students/create.php"
    $.post(url, formData)
}

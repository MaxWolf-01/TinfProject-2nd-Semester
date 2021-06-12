$(document).ready(function() {
    $('#btn-create-teacher').click(() => {
        create();
    });
});

function create() {
    let formData = {
        name: $('#create-name').val(),
        abbreviation: $('#create-abbreviation').val(),
    }
    let url="http://localhost/TinfProject-2nd-Semester/api/object_functions/teachers/create.php"
    $.post(url, formData)
}

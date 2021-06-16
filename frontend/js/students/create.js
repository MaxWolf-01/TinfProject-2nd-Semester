$(document).ready(function() {
    $('#btn-create-student').click(() => {
        create();
    });
});

function create() {
    let classID = document.getElementById('create-class').value
    classID = JSON.parse(classID).id
    let formData = {
        name: $('#create-name').val(),
        class: classID,
        gpa: $('#create-gpa').val()
    }
    alert(formData)
    let url="http://localhost/TinfProject-2nd-Semester/api/object_functions/students/create.php"
    $.post(url, formData)
}

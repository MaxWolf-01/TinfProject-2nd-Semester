$(document).ready(function() {
    fillTeacherSelect()
    $('#btn-create-classes').click(() => {
        create();
    });
});

function fillTeacherSelect() {
    let url = "http://localhost/tinfProject-2nd-Semester/api/object_functions/teachers/read.php"

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            appendTeachersToSelectBox(data)
        })
        .catch(function (err) {
            console.log(err)
        });

    function appendTeachersToSelectBox(data) {
        let selectBox = document.getElementById('create-mainTeacherID');
        selectBox.innerHTML = null;
        let records = data.records;
        console.log(records)
        let def = document.createElement('option');
        def.innerHTML = 'Null'
        selectBox.appendChild(def)
        for (let i = 0; i < records.length; i++) {
            let option = document.createElement('option');
            console.log(JSON.stringify(records[i]))
            option.value = JSON.stringify(records[i]);
            option.innerHTML = `${records[i].abbreviation}`;
            selectBox.appendChild(option);
        }
    }
}

function create() {
    let mainTeacher = document.getElementById('#create-mainTeacherID')
    console.log(mainTeacher)
    let mainTeacherID = mainTeacher === undefined || mainTeacher === null ? null : mainTeacher.value.id
    let formData = {
        name: $('#create-name').val(),
        mainTeacherID: mainTeacherID
    }
    console.log(formData)
    let url="http://localhost/TinfProject-2nd-Semester/api/object_functions/classes/create.php"
    $.post(url, formData)
}

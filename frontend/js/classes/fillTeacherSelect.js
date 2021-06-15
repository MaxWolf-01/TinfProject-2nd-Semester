$(document).ready(function (){
    if (document.getElementById('create-mainTeacherID') !== null) {
        fillTeacherSelect(document.getElementById('create-mainTeacherID'))
    }
    else{
        fillTeacherSelect(document.getElementById('search-mainTeacherID'))
        fillTeacherSelect(document.getElementById('update-mainTeacherID'))
    }
});

function fillTeacherSelect(selectBox) {
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
        selectBox.innerHTML = null;
        let records = data.records;
        console.log(records)
        let def = document.createElement('option');
        def.innerHTML = 'NULL'
        def.value = JSON.stringify({id : null})
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
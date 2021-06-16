$(document).ready(function (){
    if (document.getElementById('create-class') !== null) {
        fillClassesSelect(document.getElementById('create-class'))
    }
    else{
        fillClassesSelect(document.getElementById('search-class'))
        fillClassesSelect(document.getElementById('update-class'))
    }
});

function fillClassesSelect(selectBox) {
    let url = "http://localhost/tinfProject-2nd-Semester/api/object_functions/classes/read.php"

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            appendClassesToSelectBox(data)
        })
        .catch(function (err) {
            console.log(err)
        });

    function appendClassesToSelectBox(data) {
        selectBox.innerHTML = null;
        let records = data.records;
        let def = document.createElement('option');
        def.innerHTML = 'NULL'
        def.value = JSON.stringify({id : null})
        selectBox.appendChild(def)

        for (let i = 0; i < records.length; i++) {
            let option = document.createElement('option');
            console.log(JSON.stringify(records[i]))
            option.value = JSON.stringify(records[i]);
            option.innerHTML = `${records[i].name}`;
            selectBox.appendChild(option);
        }
    }
}
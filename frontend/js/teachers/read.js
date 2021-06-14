$(document).ready(function () {
    showAllTeachers()
    $('.scrollToForm').click(() => scrollToForm())
    $('#show-teachers').click(() => scrollToTable())
});

if(typeof(Storage) !== "undefined") {}
else{
    alert("Your browser does not support Web Storage")
}

function showAllTeachers() {
    let url = "http://localhost/tinfProject-2nd-Semester/api/object_functions/teachers/read.php"
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            appendTeachers(data)
        })
        .catch(function (err) {
            console.log(err)
        });
}

function appendTeachers(data) {
    let table = document.getElementById('tbody');
    table.innerHTML = null;
    let records = data.records;
    sessionStorage.setItem('teachers', JSON.stringify(records))
    for (let i = 0; i < records.length; i++){
        let tr = document.createElement('tr');
        let teacherID =  `${records[i].id}`;
        tr.innerHTML =
        `
        <script src="read.js"></script>
        <td>${records[i].id}</td>
        <td>${records[i].name}</td>
        <td>${records[i].abbreviation}</td>
        <td>
            <button class='btn btn-danger btn-update' id='${teacherID}' name="btn-update" onclick="displayUpdateForm(this.id);scrollToForm()">Update</button> 
        </td>
        <td>
            <button class='btn btn-danger btn-delete' id='${teacherID}' name="btn-delete" onclick="deleteTeacher(this.id)">Delete</button>
        </td>
        `
        table.appendChild(tr);
    }
}

function displayUpdateForm(id){
    hideSearchForm()
    let updateForm = document.getElementById('update-form')
    updateForm.style.display = 'block'
    document.getElementById('btn-update-teacher-cancel').style.display = 'block';
    document.getElementById('btn-update-teacher').style.display = 'block';
    updateForm.name = id
    let teacher
    JSON.parse(sessionStorage.getItem('teachers'))
        .forEach(element => {if(element.id === id) teacher = element}) //binary search for larger db??
    document.getElementById('update-name') .value = teacher.name
    document.getElementById('update-abbreviation')  .value = teacher.abbreviation
}

function hideUpdateForm(){
    document.getElementById('update-form').style.display = 'none';
    document.getElementById('btn-update-teacher-cancel').style.display = 'none';
    document.getElementById('btn-update-teacher').style.display = 'none';
}






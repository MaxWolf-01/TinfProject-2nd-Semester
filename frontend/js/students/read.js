$(document).ready(function () {
    showAllStudents()
    $('.scrollToForm').click(() => scrollToForm())
    $('#show-students').click(() => scrollToTable())
});

if(typeof(Storage) !== "undefined") {}
else{
    alert("Your browser does not support Web Storage")
}

function showAllStudents() {
    let url = "http://localhost/tinfProject-2nd-Semester/api/object_functions/students/read.php"
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            appendStudents(data)
        })
        .catch(function (err) {
            console.log(err)
        });
}

function appendStudents(data) {
    let table = document.getElementById('tbody');
    table.innerHTML = null;
    let records = data.records;
    sessionStorage.setItem('students', JSON.stringify(records))
    for (let i = 0; i < records.length; i++){
        let tr = document.createElement('tr');
        let studentID =  `${records[i].id}`;
        tr.innerHTML =
       `
        <script src="read.js"></script>
        <td>${records[i].id}</td>
        <td>${records[i].name}</td>
        <td>${records[i].class}</td>
        <td>${records[i].gpa}</td>
        <td>
            <button class='btn btn-danger btn-update' id='${studentID}' name="btn-update" onclick="displayUpdateForm(this.id);scrollToForm()">Update</button> 
        </td>
        <td>
            <button class='btn btn-danger btn-delete' id='${studentID}' name="btn-delete" onclick="deleteStudent(this.id)">Delete</button>
        </td>
        `
        table.appendChild(tr);
    }
}

function displayUpdateForm(id){
    hideSearchForm()
    let updateForm = document.getElementById('update-form')
    updateForm.style.display = 'block'
    document.getElementById('btn-update-student-cancel').style.display = 'block';
    document.getElementById('btn-update-student').style.display = 'block';
    updateForm.name = id
    let student
    JSON.parse(sessionStorage.getItem('students'))
        .forEach(element => {if(element.id === id) student = element}) //binary search for larger db??
    document.getElementById('update-name') .value = student.name
    document.getElementById('update-class').value = student.class
    document.getElementById('update-gpa')  .value = student.gpa
}

function hideUpdateForm(){
    document.getElementById('update-form').style.display = 'none';
    document.getElementById('btn-update-student-cancel').style.display = 'none';
    document.getElementById('btn-update-student').style.display = 'none';
}

function displaySearchForm(){
    hideUpdateForm();
    document.getElementById('search-form').style.display = 'block';
}

function hideSearchForm(){
    document.getElementById('search-form').style.display = 'none';
}

function scrollToForm(){
    $('html, body').animate({
        scrollTop: $('#scrollTo').offset().top
    }, 300)
}

function scrollToTable(){
    $('html, body').animate({
        scrollTop: $('#scrollToTable').offset().top
    }, 300)
}






$(document).ready(function () {
    showAllClasses()
    $('.scrollToForm').click(() => scrollToForm())
    $('#show-classes').click(() => scrollToTable())
});

if(typeof(Storage) !== "undefined") {}
else{
    alert("Your browser does not support Web Storage")
}

function showAllClasses() {
    let url = "http://localhost/tinfProject-2nd-Semester/api/object_functions/classes/read.php"
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            appendClasses(data)
        })
        .catch(function (err) {
            console.log(err)
        });
}

function appendClasses(data) {
    let table = document.getElementById('tbody');
    table.innerHTML = null
    let records = data.records;
    // alert(JSON.stringify(data))
    sessionStorage.setItem('classes', JSON.stringify(records))
    for (let i = 0; i < records.length; i++){
        let tr = document.createElement('tr');
        let classesID =  `${records[i].id}`;
        tr.innerHTML =
        `
        <script src="read.js"></script>
        <td>${records[i].id}</td>
        <td>${records[i].name}</td>
        <td>${records[i].mainTeacherID}</td>
        <td>
            <button class='btn btn-danger btn-update' id='${classesID}' name="btn-update" onclick="displayUpdateForm(this.id);scrollToForm()">Update</button> 
        </td>
        <td>
            <button class='btn btn-danger btn-delete' id='${classesID}' name="btn-delete" onclick="deleteClasses(this.id)">Delete</button>
        </td>
        `
        table.appendChild(tr);
    }
}

function displayUpdateForm(id){
    hideSearchForm()
    let updateForm = document.getElementById('update-form')
    updateForm.style.display = 'block'
    document.getElementById('btn-update-classes-cancel').style.display = 'block';
    document.getElementById('btn-update-classes').style.display = 'block';
    updateForm.name = id
    let classes
    JSON.parse(sessionStorage.getItem('classes'))
        .forEach(element => {if(element.id === id) classes = element}) //binary search for larger db??
    document.getElementById('update-name') .value = classes.name
    document.getElementById('update-mainClassesID')  .value = classes.mainTeacherID
}

function hideUpdateForm(){
    document.getElementById('update-form').style.display = 'none';
    document.getElementById('btn-update-classes-cancel').style.display = 'none';
    document.getElementById('btn-update-classes').style.display = 'none';
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






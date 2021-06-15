$(document).ready(function() {
    $('#btn-search-classes').click(() => {
        searchClasses();
    });
});

function searchClasses(){
    let mainTeacher = document.getElementById('search-mainTeacherID').value
    let mainTeacherID = JSON.parse(mainTeacher).id === null ? "" : JSON.parse(mainTeacher).id
    let data = new FormData();
    data.append('name', $('#search-name').val())
    data.append('mainTeacherID', mainTeacherID)
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/classes/search.php'
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            appendClasses(data) // TODO
        })
        .catch(function (err) {
            console.log(err)
            alert('No such classes found')
        });

}


$(document).ready(function() {
    $('#btn-search-student').click(() => {
        searchStudent();
    });
});

function searchStudent(){
    let data = new FormData();
        data.append('name', $('#search-name').val())
        data.append('class', $('#search-class').val())
        data.append('gpa', $('#search-gpa').val())
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/students/search.php'
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            appendStudents(data)
        })
        .catch(function (err) {
            console.log(err)
            alert('No such student found')
        });

}


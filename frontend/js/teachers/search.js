$(document).ready(function() {
    $('#btn-search-teacher').click(() => {
        searchTeacher();
    });
});

function searchTeacher(){
    let data = new FormData();
        data.append('name', $('#search-name').val())
        data.append('abbreviation', $('#search-abbreviation').val())
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/teachers/search.php'
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            appendTeachers(data)
        })
        .catch(function (err) {
            console.log(err)
            alert('No such teacher found')
        });

}


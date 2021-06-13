$(document).ready(function() {
    $('#btn-search-classes').click(() => {
        searchClasses();
    });
});

function searchClasses(){
    let data = new FormData();
    data.append('name', $('#search-name').val())
    data.append('mainTeacherID', $('#search-mainClassesID').val())
    let url = 'http://localhost/TinfProject-2nd-Semester/api/object_functions/classes/search.php'
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            appendClasses(data)
        })
        .catch(function (err) {
            console.log(err)
            alert('No such classes found')
        });

}


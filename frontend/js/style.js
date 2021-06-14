function displaySearchForm() {
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

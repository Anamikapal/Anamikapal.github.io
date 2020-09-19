
function scrollToTop (e) {
    e.preventDefault();
    var destination = document.getElementById('header');

    destination.scrollIntoView({
        behavior:"smooth"
    });
}


function scrollToWork (e) {
    e.preventDefault();
    var destination = document.getElementById('work');

    destination.scrollIntoView({
        behavior:"smooth"
    });
    
}

function scrollToContact (e) {
    e.preventDefault();
    var destination = document.getElementById('contact');

    destination.scrollIntoView({
        behavior:"smooth"
    });
}
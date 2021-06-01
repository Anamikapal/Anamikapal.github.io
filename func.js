
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


function toggleVis (e) {
    e.preventDefault();
    var x = document.getElementById('extraWork');
    
    if (x.style.display === "none" || !x.style.display) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
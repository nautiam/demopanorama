// Close the Modal
function closeOssoModal(modal) {
    var videos = document.getElementsByTagName("video");
    for (i = 0; i < videos.length; i++) {
        videos[i].pause();
        videos[i].currentTime = 0;
    }
    document.getElementById(modal).style.display = "none";
    playSound(isPlaying());
}

// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function ossoPlusSlides(n) {
    showOssoSlides(slideIndex += n);
}

// Thumbnail image controls
function ossoCurrentSlide(n) {
    showOssoSlides(slideIndex = n);
}

function showOssoSlides(n) {
    playSound(false);
    var i;
    var slides = document.getElementsByClassName("ossoSlides");
    var dots = document.getElementsByClassName("ossodemo");
    var captionText = document.getElementById("ossoCaption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    var ossoModal = document.getElementById("ossoModal");
    var videos = ossoModal.getElementsByTagName("video");
    for (i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    var element = slides[slideIndex - 1];
    var children = element.getElementsByTagName('video');
    for (var i = 0; i < children.length; i++) {
        children[i].play();
    }

    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
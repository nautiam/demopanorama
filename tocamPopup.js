// Close the Modal
function closeTocamModal(modal) {
    var videos = document.getElementsByTagName("video");
    for (i = 0; i < videos.length; i++) {
        videos[i].pause();
        videos[i].currentTime = 0;
    }
    document.getElementById(modal).style.display = "none";
}

// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function tocamPlusSlides(n) {
    showTocamSlides(slideIndex += n);
}

// Thumbnail image controls
function tocamCurrentSlide(n) {
    showTocamSlides(slideIndex = n);
}

function showTocamSlides(n) {
    var i;
    var slides = document.getElementsByClassName("tocamSlides");
    var dots = document.getElementsByClassName("tocamdemo");
    var captionText = document.getElementById("tocamCaption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    var tocamModal = document.getElementById("tocamModal");
    var videos = tocamModal.getElementsByTagName("video");
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
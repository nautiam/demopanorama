// var slideIndex = 1;
// showSlides(slideIndex);
// Close the Modal
function closeNgoinhaModal(modal) {
    var videos = document.getElementsByTagName("video");
    for (i = 0; i < videos.length; i++) {
        videos[i].pause();
        videos[i].currentTime = 0;
    }
    document.getElementById(modal).style.display = "none";
    playSound(isPlaying());
}

// Next/previous controls
function ngoinhaPlusSlides(n) {
    showNgoinhaSlides(slideIndex += n);
}

// Thumbnail image controls
function ngoinhaCurrentSlide(n) {
    showNgoinhaSlides(slideIndex = n);
}

function showNgoinhaSlides(n) {
    playSound(false);
    var i;
    var slides = document.getElementsByClassName("ngoinhaSlides");
    var dots = document.getElementsByClassName("ngoinhademo");
    var captionText = document.getElementById("ngoinhaCaption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    var ngoinhaModal = document.getElementById("ngoinhaModal");
    var videos = ngoinhaModal.getElementsByTagName("video");
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
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
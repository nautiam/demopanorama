// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function cunglentiengPlusSlides(n) {
    showCunglentiengSlides(slideIndex += n);
}

// Thumbnail image controls
function cunglentiengCurrentSlide(n) {
    showCunglentiengSlides(slideIndex = n);
}

function showCunglentiengSlides(n) {
    playSound(false);
    var i;
    var slides = document.getElementsByClassName("cunglentiengSlides");
    var dots = document.getElementsByClassName("cunglentiengdemo");
    var captionText = document.getElementById("cunglentiengCaption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    var cunglentiengModal = document.getElementById("cunglentiengModal");
    var videos = cunglentiengModal.getElementsByTagName("video");
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
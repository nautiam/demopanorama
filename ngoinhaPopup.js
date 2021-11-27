// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function ngoinhaPlusSlides(n) {
    showNgoinhaSlides(slideIndex += n);
}

// Thumbnail image controls
function ngoinhaCurrentSlide(n) {
    showNgoinhaSlides(slideIndex = n);
}

function showNgoinhaSlides(n) {
    var i;
    var slides = document.getElementsByClassName("ngoinhaSlides");
    var dots = document.getElementsByClassName("ngoinhademo");
    var captionText = document.getElementById("ngoinhaCaption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
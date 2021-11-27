// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function danhbaPlusSlides(n) {
    showDanhbaSlides(slideIndex += n);
}

// Thumbnail image controls
function danhbaCurrentSlide(n) {
    showDanhbaSlides(slideIndex = n);
}

function showDanhbaSlides(n) {
    var i;
    var slides = document.getElementsByClassName("danhbaSlides");
    var dots = document.getElementsByClassName("danhbademo");
    var captionText = document.getElementById("danhbaCaption");
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
// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function baolucPlusSlides(n) {
    showBaolucSlides(slideIndex += n);
}

// Thumbnail image controls
function baolucCurrentSlide(n) {
    showBaolucSlides(slideIndex = n);
}

function showBaolucSlides(n) {
    var i;
    var slides = document.getElementsByClassName("baolucSlides");
    var dots = document.getElementsByClassName("baolucdemo");
    var captionText = document.getElementById("baolucCaption");
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
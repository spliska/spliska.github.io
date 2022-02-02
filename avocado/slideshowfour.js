var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    var i;
    var slides4 = document.getElementsByClassName("mySlides4");
    var dots4 = document.getElementsByClassName("dot4");
    if (n > slides4.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides4.length}
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }
    slides4[slideIndex4-1].style.display = "block";
    dots4[slideIndex4-1].className += " active";}
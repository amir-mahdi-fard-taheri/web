let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {slideIndex = 1}    
  
    slides[slideIndex - 1].style.display = "block";  
   
    setTimeout(showSlides, 10000); // ÊÛííÑ ÊÕæíÑ åÑ Óå ËÇäíå
}

// Ï˜ãååÇí ÞÈáí æ ÈÚÏí
function plusSlides(n) {
   slideIndex += n -1; // ÈÑÇí ÊäÙíã ÇíäÏ˜Ó ÕÍíÍ
   showSlides();
}

// ÔÑæÚ ÇÓáÇíÏ Ôæ
showSlides();


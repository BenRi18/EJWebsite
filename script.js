let currentSlide = 0;

function showSlide(index){
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = Math.ceil(slides.length - 2); 

    if(index >= totalSlides){
        currentSlide = 0;
    } else if(index < 0){
        currentSlide = totalSlides - 1; 
    } else{
        currentSlide = index; 
    }

    const offset = -currentSlide * 100 / 3;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide(){
    showSlide(currentSlide + 1); 
}
function prevSlide(){
    showSlide(currentSlide - 1); 
}

setInterval(() => {
    nextSlide();
}, 10000);
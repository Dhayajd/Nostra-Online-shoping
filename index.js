const popup=document.querySelector(".popup")
const xbar=document.getElementById("xbar")
xbar.addEventListener("click",function(){
    popup.classList.add("hide")
})
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const prevButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
         slider.style.transform = `translateX(${offset}%)`;
    }

  
prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});


nextButton.addEventListener('click', function() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

    
   
});
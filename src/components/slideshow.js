

const showSlider = (n, classNam) => {
    let slideIndex = 1
    let i;
    let slides = document.getElementsByClassName(classNam);
    console.log(slides)
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length;      
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    }
    


    // export { showSlider };
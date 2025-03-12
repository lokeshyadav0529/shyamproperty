
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 500000); // Change slide every 3 seconds
    }

    function moveSlide(n) {
        slideIndex += n;
        let slides = document.getElementsByClassName("slide");
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        showSlides();
    }

    showSlides(); // Initialize the slide show

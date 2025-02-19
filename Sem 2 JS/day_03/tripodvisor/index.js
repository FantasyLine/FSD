document.addEventListener('DOMContentLoaded', function() {
    let theme = document.querySelector('#theme-switch');
    let body = document.querySelector('body');
    let red = document.querySelector('#theme-red');
    let blue = document.querySelector('#theme-blue');
    let green = document.querySelector('#theme-green');
    let logoImg = document.querySelector('.logo__image');
    let sliderSection = document.querySelector('.slider');
    let previous = document.querySelector('#slider-previous');
    let next = document.querySelector('#slider-next');
    let currentIndex = 0;
    let newsLetterInput= document.querySelector('#inputNewsletter');
    let newsLetter = document.querySelector('.newsletter');
    
    
    const slides = [
        'img/ocean.jpg',
        'img/ski.jpg',
        'img/city.jpg',
    ];
    
    theme.addEventListener('click', () => {
        body.classList.toggle('theme-dark');
    });

    red.addEventListener('click', () => {
        logoImg.src = 'img/logo-theme-red.png';
        body.classList.add('theme-red');
        body.classList.remove('theme-blue');
        body.classList.remove('theme-green');
    });

    green.addEventListener('click', () => {
        logoImg.src = 'img/logo-theme-green.png';
        body.classList.add('theme-green');
        body.classList.remove('theme-blue');
        body.classList.remove('theme-red');
    });

    blue.addEventListener('click', () => {
        logoImg.src = 'img/logo-theme-blue.png';
        body.classList.add('theme-blue');
        body.classList.remove('theme-red');
        body.classList.remove('theme-green');
    });

    slides.forEach((slide, index) => {
        const img = document.createElement('img');
        img.classList.add('slider__img');
        if (index === 0) {
            img.classList.add('slider__img--current');
        }
        img.src = slide;
        img.alt = `Image ${index + 1}`;
        sliderSection.insertBefore(img, previous);
    });

    function updateSlider(newIndex){
    const pics = document.querySelectorAll('.slider__img');
    pics[currentIndex].classList.remove('slider__img--current');
    currentIndex = (newIndex + pics.length) % pics.length;
    pics[currentIndex].classList.add('slider__img--current');
    }

    previous.addEventListener('click', () => {
        updateSlider(currentIndex - 1);
    });

    next.addEventListener('click', () => {
        updateSlider(currentIndex + 1);
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 300) {
            newsLetter.classList.add('newsletter--on');
        }
    });
    
    newsLetterInput.addEventListener('click', (e) => {
        e.preventDefault();
        newsLetter.classList.add('newsletter--on');
    });
    
});



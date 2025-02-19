let rectangle = document.querySelector('.rectangle');
let toggleRectangle = document.querySelector('#toggle-rectangle');


toggleRectangle.addEventListener('click', function() {

    if (rectangle.style.display === 'none') {
        rectangle.style.display = 'block';
    } else {
        rectangle.style.display = 'none';
    }
    
});

rectangle.addEventListener('mouseover', function() {
    rectangle.classList.add('important');
});

rectangle.addEventListener('mouseout', function() {
    rectangle.classList.remove('important');
});

rectangle.addEventListener('click', function() {
    rectangle.addEventListener('click', function() {
        if(rectangle.classList.contains('good')) {
            rectangle.classList.remove('good');
        } else {
            rectangle.classList.add('good');
        }
    });
});


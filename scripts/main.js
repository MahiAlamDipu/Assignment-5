const colorPicker = getElementById('colorPicker');
const body = getElementById('body');

colorPicker.addEventListener('click', function() {
    const randomColor = randomColorPicker(); 
    body.style.backgroundColor = randomColor;
});

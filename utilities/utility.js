function randomColorPicker() {
    let r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`; 
}


function getElementById(id){
    return document.getElementById(id);
}
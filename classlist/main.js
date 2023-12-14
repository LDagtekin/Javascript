function toggleErrorClass() {
    let boxElement = document.getElementById("myBox");
    boxElement.classList.toggle("error");
}

function toggleAnimation() {
    let boxElement = document.getElementById("myBox2");
    boxElement.classList.toggle("blinker"); 
    boxElement.classList.toggle("custom-font");
}
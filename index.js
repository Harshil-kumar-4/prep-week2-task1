let currentImage = "images/BulpOn.png";
let imageOn = "images/BulpOn.png";
let imageOff = "images/BulpOff.png";

function changeImage() {
    if (currentImage === imageOn) {
        document.getElementById("image").src = imageOff;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector('nav').style.backgroundColor = "black";
        currentImage = imageOff;
    } else {
        document.getElementById("image").src = imageOn;
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.querySelector('nav').style.backgroundColor = "";
        currentImage = imageOn;
    }
}

const gallery = [
    "./images/maharaj.jpeg",
    "./images/shivneri.webp",
    "./images/lohagad.jpg",
    "./images/sinhagad.webp",
    "./images/rajgad.jpg",
    "./images/raigad.jpg",
    "./images/Purandar.jpg"
];
let imgIndex = 0;

function prev() {
    imgIndex = imgIndex === 0 ? gallery.length - 1 : imgIndex - 1;
    updateImage();
}

function next() {
    imgIndex = imgIndex === gallery.length - 1 ? 0 : imgIndex + 1;
    updateImage();
}

function updateImage() {
    const imgElement = document.getElementById("img1");
    imgElement.style.opacity = '0';
    setTimeout(() => {
        imgElement.src = gallery[imgIndex];
        imgElement.style.opacity = '1';
    }, 500);
}

setInterval(next, 3000);

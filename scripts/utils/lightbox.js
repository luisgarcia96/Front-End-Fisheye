//Helper functions
function displayLightbox() {

}

function closeLightbox() {
    const lightbox = document.querySelector(".lightbox>header");
    lightbox.addEventListener('click', () => {
        lightbox.style.display = "none";
    })
}

//Main function of the file
function init() {
    displayLightbox();
    closeLightbox();
}

init();
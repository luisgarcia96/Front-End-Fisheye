import { Image } from "../../models/imageModel.js";
import { Video } from "../../models/videoModel.js";

//Lightbox elements
const lightbox = document.querySelector('.lightbox');
const closeIcon = lightbox.querySelector('.lightbox-top');
const mediaContainer = lightbox.querySelector('.lightbox-media-container');
const lightboxImage = mediaContainer.querySelector('.lightbox-image');
const lightboxVideo = mediaContainer.querySelector('.lightbox-video');
const lightboxMediaName = mediaContainer.querySelector('.lightbox-media-name'); 
const previousButton = document.querySelector('.previous'); 
const nextButton = document.querySelector('.next');

//LightboxCurrentIndex
let photographerPageMedias;
let currentIndex;

function setUpLightbox(medias) {

    photographerPageMedias = medias;

    //Add listener to thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail-container');

    thumbnails.forEach((thumbnail, index) => {

        //Click
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            displayLightbox();
        })

        //Keydown
        thumbnail.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                currentIndex = index;
                displayLightbox();
            }
        })
    })

    // Add event listener to close lightbox when escape key is pressed
    lightbox.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
        closeLightbox();
        }
    });

    closeLightbox(thumbnails);

}

function displayLightbox() {

    const selectedMedia = photographerPageMedias[currentIndex];

    if (!selectedMedia) {
        console.error('Media not found');
        return;
    }
    
    //Set image or video source and display
    setLightboxMedia(selectedMedia);

    //Change the display of the lightbox to flex
    lightbox.style.display = "flex";
    lightbox.setAttribute('tabindex', '0'); 
    lightbox.focus();

    //Previous & Next Buttons logic
    setPreviousButton();
    setNextButton();
}

function setLightboxMedia(media) {
    if (media instanceof Image) {
        lightboxVideo.style.display = "none"
        lightboxImage.style.display = "initial";
        lightboxImage.setAttribute('src', media.source)
        lightboxMediaName.innerHTML = media.title;
    } else if (media instanceof Video) {
        lightboxImage.style.display = "none";
        lightboxVideo.style.display = "initial"
        lightboxVideo.setAttribute('src', media.source)
        lightboxMediaName.innerHTML = media.title;
    }
}

function setPreviousButton() {

    // Remove any existing event listeners
    previousButton.removeEventListener('click', previousButtonClickListener);
    previousButton.removeEventListener('keydown', previousButtonKeydownListener);

    previousButton.addEventListener('click', previousButtonClickListener);
    previousButton.addEventListener('keydown', previousButtonKeydownListener);
}

function setNextButton() {

    // Remove any existing event listeners
    nextButton.removeEventListener('click', nextButtonClickListener);
    nextButton.removeEventListener('keydown', nextButtonKeydownListener);

    nextButton.addEventListener('click', nextButtonClickListener);
    nextButton.addEventListener('keydown', nextButtonKeydownListener);
}

function closeLightbox(thumbnails) {
    
    closeIcon.addEventListener('click', () => {
        lightboxImage.setAttribute('src', '');
        lightboxVideo.setAttribute('src', '');
        lightbox.style.display = "none";
        thumbnails[currentIndex].focus();
        // currentIndex = -1; // reset currentIndex when closing the lightbox
        
    })

    closeIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            lightboxImage.setAttribute('src', '');
            lightboxVideo.setAttribute('src', '');
            lightbox.style.display = "none";
            thumbnails[currentIndex].focus();
            // currentIndex = -1; // reset currentIndex when closing the lightbox
        }
    })

}

//Listeners
function previousButtonClickListener() {
    if (currentIndex === 0) {
        currentIndex = photographerPageMedias.length - 1;
    } else {
        currentIndex--;
    }
    setLightboxMedia(photographerPageMedias[currentIndex]);
}
function previousButtonKeydownListener(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (currentIndex === 0) {
            currentIndex = photographerPageMedias.length - 1;
        } else {
            currentIndex--;
        }
        setLightboxMedia(photographerPageMedias[currentIndex]);
    }
}

function nextButtonClickListener() {
    if (currentIndex === photographerPageMedias.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setLightboxMedia(photographerPageMedias[currentIndex]);
}
function nextButtonKeydownListener(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (currentIndex === photographerPageMedias.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        setLightboxMedia(photographerPageMedias[currentIndex]);
    }
}

//Main function of the file
export function enableLightbox(photographerMedias) {
    setUpLightbox(photographerMedias);
}


//Helper functions
function getMediasSources() {

    let currentIndex = 0;

    const thumbnails = document.querySelectorAll('.single-media');
    const previousButton = document.querySelector('.previous'); 
    const nextButton = document.querySelector('.next');
    let mediasSources = [];

    //Create the array of medias
    thumbnails.forEach(function(thumbnail,index) {

        const image = thumbnail.querySelector("img");
        const mediaName = thumbnail.querySelector('.single-media-title').innerText;
        const video = thumbnail.querySelector("video");

        if (image !== null ) {
            const mediaObj = {
                type: 'image',
                name: mediaName,
                source: image.src
               }

           mediasSources.push(mediaObj);
           image.addEventListener('click', () => {
                currentIndex = index;
                displayLightbox(mediaObj)
            });

        } else if (video !== null) {
            const mediaObj = {
                type: 'video',
                name: mediaName,
                source: video.src
               }

           mediasSources.push(mediaObj);
           video.addEventListener('click', () => {
                currentIndex = index;
                displayLightbox(mediaObj)
            });

        }
    })

    //Create logic for previous button
    previousButton.addEventListener('click', () => {
        if(currentIndex === 0) {
            currentIndex = mediasSources.length - 1;
            displayLightbox(mediasSources[currentIndex]);
        } else {
            currentIndex--;
            displayLightbox(mediasSources[currentIndex]);
        }
    })

    //Create logic for next button
    nextButton.addEventListener('click', () => {
        if (currentIndex === mediasSources.length-1) {
            currentIndex = 0;
            displayLightbox(mediasSources[currentIndex]);
        } else {
            currentIndex++;
            displayLightbox(mediasSources[currentIndex]);
        }
    })

    return mediasSources;
}

function displayLightbox(media) {

    const lightbox = document.querySelector('.lightbox');
    const mediaContainer = lightbox.querySelector('.lightbox-media-container');
    const lightboxImage = mediaContainer.querySelector('.lightbox-image');
    const lightboxVideo = mediaContainer.querySelector('.lightbox-video');
    const lightboxMediaName = mediaContainer.querySelector('.lightbox-media-name'); 
    
    //Create image or video depending on the media type and set its source
    if (media.type === 'image') {
        lightboxVideo.style.display = "none"
        lightboxImage.style.display = "initial";
        lightboxImage.setAttribute('src', media.source)
        lightboxMediaName.innerHTML = media.name;
    } else if (media.type === 'video') {
        lightboxImage.style.display = "none";
        lightboxVideo.style.display = "initial"
        lightboxVideo.setAttribute('src', media.source)
        lightboxMediaName.innerHTML = media.name;
    }

    //Change the display of the lightbox to flex
    lightbox.style.display = "flex";

}

function closeLightbox() {
    const lightbox = document.querySelector(".lightbox");
    const closeIcon = lightbox.querySelector('.lightbox-top');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxVideo = lightbox.querySelector('.lightbox-video');

    closeIcon.addEventListener('click', () => {
        lightboxImage.setAttribute('src', '');
        lightboxVideo.setAttribute('src', '');
        lightbox.style.display = "none";
    })
}



//Main function of the file
export function enableLightbox() {
    getMediasSources();
    closeLightbox();
}

window.addEventListener('load', () => {
    setTimeout(enableLightbox ,100);
});


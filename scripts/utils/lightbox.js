//Helper functions
function getMediaSources() {
    const thumbnails = document.querySelectorAll('.thumbnail-container');
    let mediasSources = [];

    thumbnails.forEach(function(thumbnail) {

        const image = thumbnail.querySelector("img");
        const video = thumbnail.querySelector("video");

        if (image !== null ) {
            const mediaObj = {
                type: 'image',
                source: image.src
               }

           mediasSources.push(mediaObj);
           thumbnail.addEventListener('click', () => displayLightbox(mediaObj));

        } else if (video !== null) {
            const mediaObj = {
                type: 'video',
                source: video.src
               }

           mediasSources.push(mediaObj);
           thumbnail.addEventListener('click', () => displayLightbox(mediaObj));

        }
        console.log(mediasSources);
        return mediasSources;
    })
}

function displayLightbox(media) {
    const lightbox = document.querySelector('.lightbox');
    const mediaContainer = lightbox.querySelector('.lightbox-media-container');
    const lightboxImage = mediaContainer.querySelector('.lightbox-image');
    const lightboxVideo = mediaContainer.querySelector('.lightbox-video'); 
    
    //Create image or video depending on the media type and set its source
    if (media.type === 'image') {
        lightboxVideo.style.display = "none"
        lightboxImage.style.display = "initial";
        lightboxImage.setAttribute('src', media.source)
    } else if (media.type === 'video') {
        lightboxImage.style.display = "none";
        lightboxVideo.style.display = "initial"
        lightboxVideo.setAttribute('src', media.source)
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
function init() {
    getMediaSources();
    closeLightbox();
}

window.addEventListener('load', () => {
    init();
});


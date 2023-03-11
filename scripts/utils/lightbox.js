//Helper functions
function setUpLightbox(photographerMedias) {
    console.log(photographerMedias);

    //Add listener to thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail-container');
    console.log(thumbnails);

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            console.log('Index is : ', index);
            console.log('Media is: ', photographerMedias[index]);
            console.log(`Source will be: ${photographerMedias[index].source}`);
        })
    })

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('keydown', (event) => {
            console.log(event.key);
        })
    })
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
    lightbox.setAttribute('tabindex', '0'); 
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

    closeIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            lightboxImage.setAttribute('src', '');
            lightboxVideo.setAttribute('src', '');
            lightbox.style.display = "none";
        }
    })
}



//Main function of the file
export function enableLightbox(photographerMedias) {
    setUpLightbox(photographerMedias);
    closeLightbox();
}

// window.addEventListener('load', () => {
//     setTimeout(enableLightbox ,100);
// });


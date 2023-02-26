export function getProfileMediasTemplate(photographer, photographerMedia) {

    let mediasContainer = document.createElement('div');
    mediasContainer.classList.add('medias-container');


    for (const media of photographerMedia) {
        const { title, likes, generateContent } = media;

        let singleMediaTemplate = `
            <div class="single-media">
                <div class="thumbnail-container" tabindex="0">
                    ${generateContent}
                </div>
                <div class="info-container">
                    <p class="single-media-title" tabindex="0">${title}</p>
                    <p class="single-media-likes">${likes}</p>
                    <div class="like-button-container" tabindex="0">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        `;

        mediasContainer.insertAdjacentHTML('beforeend', singleMediaTemplate);
    }
    
    let profilePageMediasTemplate = `             

            ${mediasContainer.outerHTML}   
    `;

    return profilePageMediasTemplate;
}
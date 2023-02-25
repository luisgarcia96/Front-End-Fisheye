export function getProfileMediasTemplate(photographer, photographerMedia) {

    let mediasContainer = document.createElement('div');
    mediasContainer.classList.add('medias-container');

    let likesCounter = 0;

    for (const media of photographerMedia) {
        const { title, likes, generateContent } = media;

        likesCounter += likes;

        let singleMediaTemplate = `
            <div class="single-media">
                <div class="thumbnail-container">
                    ${generateContent}
                </div>
                <div class="info-container">
                    <p class="single-media-title">${title}</p>
                    <p class="single-media-likes">${likes}</p>
                    <div class="like-button-container">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        `;

        mediasContainer.insertAdjacentHTML('beforeend', singleMediaTemplate);
    }
    
    let profilePageMediasTemplate = `             
            <div class="price-likes-bottom-container" tabindex="0">
                <div class="total-likes-container">
                    <p class="total-likes">${likesCounter}</p>
                    <i class="fa-solid fa-heart"></i>
                </div>
                <p class="price">${photographer.price}€ / jour</p>
            </div>
            ${mediasContainer.outerHTML}   
    `;

    return profilePageMediasTemplate;
}
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
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        `;

        mediasContainer.insertAdjacentHTML('beforeend', singleMediaTemplate);
    }
    
    let profilePageHeaderTemplate = `
        <section class="photographer-medias">
            <div class="filter-bar-container">
                <p class="filter-message">Trier par: </p>
                <div class="filter-modal">
                    <ul class="filters">
                    <li class="filter">Popularité</li>
                    <li class="filter">Date</li>
                    <li class="filter">Titre</li>
                    </ul>
                </div>
            </div>
            ${mediasContainer.outerHTML}
            <div class="price-likes-bottom-container">
                <div class="total-likes-container">
                    <p class="total-likes">${likesCounter}</p>
                    <i class="fa-solid fa-heart"></i>
                </div>
                <p class="price">${photographer.price}€ / jour</p>
            </div>
        </section>   
    `;

    return profilePageHeaderTemplate;
}
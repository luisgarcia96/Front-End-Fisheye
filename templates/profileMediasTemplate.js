export function getProfileMediasTemplate(photographerMedia) {

    let mediasContainer = document.createElement('div');
    mediasContainer.classList.add('medias-container');

    for (const media of photographerMedia) {
        const { id, photographerId, title, name, likes, date, price, generateContent } = media;

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
        </section>   
    `;

    return profilePageHeaderTemplate;
}
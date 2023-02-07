export function getProfileMediasTemplate(photographerMedia) {

    for (const media of photographerMedia) {
        const { id, photographerId, title, name, likes, date, price } = media;

        console.log(name);
    }
    
    
    let profilePageHeaderTemplate = `
        <section class="photographer-medias">

            <img src="${name}" class="photographer-medias-picture" alt="Photographer Picture">
        </section>
    `;
    
    return profilePageHeaderTemplate;
}

export function getProfileHeaderTemplate(photographer) {
    
    const { id, name, portrait, city, country, tagline } = photographer;
    
    let profilePageHeaderTemplate = `
        <section class="photograph-header">
            <div class="photograph-header-info">
                <h2>${name}</h2>
                <p class="city">${city}, ${country}</p>
                <p class="tagline">${tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div class="photograph-header-picture">
                <img src="${portrait}"  alt="Photographer Picture">
            </div>
        </section>
    `;
    
    return profilePageHeaderTemplate;
}

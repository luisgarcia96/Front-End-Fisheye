
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
            <img src="${portrait}" class="photograph-header-picture" alt="Photographer Picture">
        </section>
    `;
    
    return profilePageHeaderTemplate;
}

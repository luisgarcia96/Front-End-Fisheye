
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
            <div class="filter-bar-container">
                <p class="filter-message">Trier par: </p>
                <div class="filter-container">
                    <div class="filters filter-selected">
                        <div class="filter filter-1"></div>
                        <div class="chevron-up">
                            <i class="fa-solid fa-chevron-up"></i>
                        </div>
                        <div class="chevron-down">
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div class="filters filters-not-selected">
                        <hr>
                        <div class="filter filter-2"></div>
                        <hr>
                        <div class="filter filter-3"></div>
                    </div>
                </div>
            </div>
    `;
    
    return profilePageHeaderTemplate;
}

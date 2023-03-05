
export function getProfileHeaderTemplate(photographer) {
    
    const { name, portrait, city, country, tagline, totalLikes, price } = photographer;
    


    let profilePageHeaderTemplate = `
        <section class="photograph-header">
            <div class="photograph-header-info">
                <h2 tabindex="0 ">${name}</h2>
                <div tabindex="0    ">
                    <p class="city">${city}, ${country}</p>
                    <p class="tagline">${tagline}</p>
                </div>
            </div>
            <button class="contact_button" id="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div class="photograph-header-picture" tabindex="0" aria-label="${name}">
                <img src="${portrait}"  alt="">
            </div>
            </section>

            <div class="price-likes-bottom-container" tabindex="0">
                <div class="total-likes-container">
                    <p class="total-likes">${totalLikes}</p>
                    <i class="fa-solid fa-heart"></i>
                </div>
                <p class="price">${price}€ / jour</p>
            </div>

            <div class="filter-bar-container">
                <label class="filter-message" id="filter-label" tabindex="0">Trier par: </label>
                <div class="filter-container" tabindex="0" role="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="filter-label">
                    <div class="filters filter-selected" id="selected-filter" aria-activedescendant="filter-1" aria-labelledby="filter-label">
                        <button class="filter filter-1" role="option" aria-selected="true"></button>
                        <div class="chevron-up">
                            <i class="fa-solid fa-chevron-up"></i>
                        </div>
                        <div class="chevron-down">
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div class="filters filters-not-selected" id="filter-list" role="listbox" aria-labelledby="filter-label">
                        <hr>
                        <button class="filter filter-2" role="option" aria-selected="false"></button>
                        <hr>
                        <button class="filter filter-3" role="option" aria-selected="false"></button>
                    </div>
                </div>
            </div>
    `;
    
    return profilePageHeaderTemplate;
}

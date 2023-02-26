
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
                <p class="filter-message" tabindex="0">Trier par: </p>
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

/**
 * Generate an article html tag containing the 
 * photographer's info for the home page
 * 
 * @param {Photographer} photographer 
 * @returns An article html tag
 */
export function getHomeCardTemplate(photographer) {

    const { id, name, portrait, price, city, country, tagline } = photographer;

    let homeCardTemplate = `
        <article>
            <a href="../photographer.html?id=${id}&name=${name}" class="profile_link" tabindex="0" aria-label="${name}">
                <img src="${portrait}" alt="">
                <h2>${name}</h2>
            </a>
            <div class="homecard_info" tabindex="0">
                <p class="city">${city}, ${country}</p>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}€/jour</p>
            </div>
        </article>
    `;

    return homeCardTemplate;
}
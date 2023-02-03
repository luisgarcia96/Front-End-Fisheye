/**
 * Generate an article html tag containing the 
 * photographer's info for the home page
 * 
 * @param {Photographer} photographer 
 * @returns An article html tag
 */
export function gethomeCard(photographer) {

    const { id, name, portrait, price, city, country, tagline } = photographer;

    let homeCardTemplate = `
        <article>
            <a href="../photographer.html?id=${id}&name=${name}" class="profile_link">
                <img src="${portrait}" alt="Photographer Profile">
                <h2>${name}</h2>
            </a>
            <p class="city">${city}, ${country}</p>
            <p class="tagline">${tagline}</p>
            <p class="price">${price}€/jour</p>
        </article>
    `;

    return homeCardTemplate;
}
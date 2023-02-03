/**
 * Generate an article html tag containing the 
 * photographer's info for the photographer's profile page
 * 
 * @param {Photographer} photographer 
 * @returns An article html tag
 */
export function getUserCardHome(photographer) {

    const { id, name, portrait, price, city, country, tagline } = photographer;

    const article = document.createElement( 'article' );

    const img = document.createElement( 'img' );
    img.setAttribute("src", portrait);
    img.setAttribute("alt", "Photographer Profile");

    const h2 = document.createElement( 'h2' );
    h2.textContent = name;

    const p1 = document.createElement( 'p' );
    p1.textContent = `${city}, ${country}`
    p1.classList.add('city')

    const p2 = document.createElement( 'p' );
    p2.textContent = tagline;
    p2.classList.add('tagline')

    const p3 = document.createElement( 'p' );
    p3.textContent = `${price}€/jour`
    p3.classList.add('price')
    
    article.appendChild(anchor);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    return (article);
}
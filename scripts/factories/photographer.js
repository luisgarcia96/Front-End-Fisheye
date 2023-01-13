function photographerFactory(data) {
    const { name, portrait, price, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

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
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
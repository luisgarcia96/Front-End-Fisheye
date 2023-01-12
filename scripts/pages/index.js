    async function getPhotographers() {
        // We get the photographers from the JSON file
        const response = await fetch('../../data/photographers.json');
        
        if (response.ok) {
            const jsonResponse = await response.json();
            const photographers = jsonResponse.photographers;
            return ({
                photographers: [...photographers]})
        } else {
            console.log('An error occurred');
        }
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    

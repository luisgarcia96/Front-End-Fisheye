//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerContent() {
    const params = new URLSearchParams(window.location.search);
    const photographerId = parseInt(params.get('id'));

    const photographer = await getPhotographerById(photographerId);
    console.log(photographer);
}

async function getPhotographerById(id) {
    // We get the photographers from the JSON file
    const response = await fetch('../../data/photographers.json');

    if (response.ok) {
        const jsonResponse = await response.json();
        const photographers = jsonResponse.photographers;

        //Find the corresponding photographer by Id
        const photographer = photographers.find(photographer => photographer.id === id);
        return photographer;
    } else {
        console.log('An error occurred');
    }
}

getPhotographerContent();
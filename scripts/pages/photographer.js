import { ApiJson } from "../../api/apiJson.js";
import { photographerFactory } from "../factories/photographerFactory.js";

async function getPhotographerContent() {
    const params = new URLSearchParams(window.location.search);
    const photographerId = parseInt(params.get('id'));

    const photographer = await getPhotographerById(photographerId);
    console.log(photographer);
    displayData(photographer);

}

async function getPhotographerById(id) {

    const api = new ApiJson('../../data/photographers.json');
    const data = await api.getData();
    const photographers = data.photographers;

    const photographer = photographers.find(photographer => photographer.id === id);
    
    return photographer;
}

async function getPhotographerMedia() {
    
}

function displayData(photographer) {
    const profileMainTag = document.querySelector("#main");
    const photographerModel = photographerFactory(photographer);
    const photographerHeader = photographerModel.generateProfileHeader();

    profileMainTag.insertAdjacentHTML("beforeend", photographerHeader);
}


getPhotographerContent();
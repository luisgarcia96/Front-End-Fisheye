import { ApiJson, MediaApi } from "../../api/apiJson.js";
import { photographerFactory } from "../factories/photographerFactory.js";
import { getProfileHeaderTemplate } from "../../templates/profilePageHeaderTemplate.js";
import { mediaFactory } from "../factories/mediaFactory.js";
import { getProfileMediasTemplate } from "../../templates/profileMediasTemplate.js";

async function getPhotographerContent() {
    const params = new URLSearchParams(window.location.search);
    const photographerId = parseInt(params.get('id'));

    const photographer = await getPhotographerById(photographerId);
    const photographerMedia = await getPhotographerMedia(photographerId);

    displayData(photographer, photographerMedia);

}

async function getPhotographerById(id) {

    const api = new ApiJson('../../data/photographers.json');
    const data = await api.getData();
    const photographers = data.photographers;

    const photographer = photographerFactory(
        photographers.find(photographer => photographer.id === id)
    );
    
    return photographer;
}

async function getPhotographerMedia(id) {
    const mediaApi = new MediaApi('../../data/photographers.json');
    const medias = await mediaApi.getMedia();

    //Filter the medias
    const photographerMediaById = medias.filter(media => {
        return media.photographerId === id;
    })

    //Create corresponding model
    const photographerMedia = [];
    for (const media of photographerMediaById) {
        photographerMedia.push(mediaFactory(media))
    }

    return photographerMedia;
}

function displayData(photographer, photographerMedia) {
    const profileMainTag = document.querySelector("#main");

    //Generate the Header
    const photographerHeader = getProfileHeaderTemplate(photographer);

    //Generate the media part
    const profileMediaSection = getProfileMediasTemplate(photographerMedia);

    profileMainTag.insertAdjacentHTML("beforeend", photographerHeader);
    profileMainTag.insertAdjacentHTML("beforeend", profileMediaSection);
}


getPhotographerContent();
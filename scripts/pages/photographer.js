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

    return [photographer, photographerMedia];
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

function displayHeader(photographer) {
    
    //Generate the Header
    const photographerHeader = getProfileHeaderTemplate(photographer);
    
    const profileMainTag = document.querySelector("#main");

    profileMainTag.insertAdjacentHTML("beforeend", photographerHeader);
}

function displayMedias(photographer, photographerMedia) {

    //Generate the media part
    const profileMediaSection = getProfileMediasTemplate(photographer, photographerMedia);

    const profileMainTag = document.querySelector("#main");

    profileMainTag.insertAdjacentHTML("beforeend", profileMediaSection);
}

export function updateMediasOrder(filter) {
    console.log('this is the filter: ', filter);
    const mediasContainer = document.querySelector('.medias-container');
    console.log(mediasContainer);
    
}


getPhotographerContent();

async function init() {
    const [photographer, photographerMedia] = await getPhotographerContent();

    displayHeader(photographer);

    photographerMedia.sort((a, b) => b._likes - a._likes); //By default the first view is sorted by popularity
    displayMedias(photographer, photographerMedia);   
}

init();
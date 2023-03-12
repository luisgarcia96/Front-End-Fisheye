import { ApiJson, MediaApi } from "../../api/apiJson.js";
import { photographerFactory } from "../factories/photographerFactory.js";
import { getProfileHeaderTemplate } from "../../templates/profilePageHeaderTemplate.js";
import { mediaFactory } from "../factories/mediaFactory.js";
import { getProfileMediasTemplate } from "../../templates/profileMediasTemplate.js";
import { enableLightbox } from "../utils/lightBox.js";
import { enableLikesCounter } from "../utils/likesGestion.js";

let photographerInfo;
let photographerMediaArray;

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
    const photographerMedia = await getPhotographerMedia(id);

    const photographer = photographerFactory(
        photographers.find(photographer => photographer.id === id),
        photographerMedia
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

    profileMainTag.insertAdjacentHTML("beforebegin", photographerHeader);
}

function displayMedias(photographer, photographerMedia) {

    //Generate the media part
    const profileMediaSection = getProfileMediasTemplate(photographer, photographerMedia);

    const mediasSection = document.querySelector(".photographer-medias");
    mediasSection.innerHTML = '';
    mediasSection.insertAdjacentHTML("beforeend", profileMediaSection);
}

export function updateMediasOrder(filter) {
    switch (filter) {
        case 'date':
            photographerMediaArray.sort(function (a, b) {
                let dateA = new Date(a._date), dateB = new Date(b._date)
                return dateA - dateB
            });
            break;
        case 'title' :
            photographerMediaArray.sort(function(a, b) {
                return a._title.localeCompare(b._title);
            });
            break;
        default:
            photographerMediaArray.sort((a, b) => b._likes - a._likes);
            break;
    }

    displayMedias(photographerInfo, photographerMediaArray);
    enableLightbox(photographerMediaArray);
    enableLikesCounter();
}

async function init() {
    [photographerInfo, photographerMediaArray] = await getPhotographerContent();
    
    displayHeader(photographerInfo);

    photographerMediaArray.sort((a, b) => b._likes - a._likes); //By default the first view is sorted by popularity
    displayMedias(photographerInfo, photographerMediaArray); 

    enableLikesCounter();
    
    enableLightbox(photographerMediaArray);
}

init();

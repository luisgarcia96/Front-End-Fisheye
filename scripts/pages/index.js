import { ApiJson } from "../../api/apiJson.js";
import { photographerFactory } from "../factories/photographerFactory.js";
import { getHomeCardTemplate } from "../../templates/homeCardTemplate.js";

    async function getPhotographers() {

        const api = new ApiJson('../../data/photographers.json');
        const data = await api.getData();
        const photographers = data.photographers;

        return photographers;
    }

    function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const photographerHomeCard = getHomeCardTemplate(photographerModel);
            photographersSection.insertAdjacentHTML("beforeend", photographerHomeCard);
        });
    };

    async function init() {
        const photographers = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    

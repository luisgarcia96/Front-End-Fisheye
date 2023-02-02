import { ApiJson } from "../../api/apiJson.js";
import { photographerFactory } from "../factories/photographerFactory.js";

    async function getPhotographers() {
        // We get the photographers from the JSON file
        const api = new ApiJson('../../data/photographers.json');
        const data = await api.getElement();
        const photographers = data.photographers;

        return photographers;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCard = photographerModel.generateUserCard();
            photographersSection.appendChild(userCard);
        });
    };

    async function init() {
        const photographers = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    

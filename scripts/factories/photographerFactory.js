import { Photographer } from "../../models/photographerModel.js";
import { gethomeCard } from "../../templates/homeCardTemplate.js";
import { getProfilePageHeader } from "../../templates/profilePageHeaderTemplate.js";

export function photographerFactory(data) {

    const photographer = new Photographer(data);

    function generateHomeCard() { 
        return gethomeCard(photographer) 
    }

    function generateProfileHeader() {
        return getProfilePageHeader(photographer);
    }

    return { photographer, generateHomeCard, generateProfileHeader}
}
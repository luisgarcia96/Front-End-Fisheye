import { Photographer } from "../../models/photographerModel.js";
import { getUserCardDOM } from "../utils/userCardDOM.js";

export function photographerFactory(data) {

    const photographer = new Photographer(data);

    function generateUserCard() { 
        return getUserCardDOM(photographer) 
    }

    return { photographer, generateUserCard}
}
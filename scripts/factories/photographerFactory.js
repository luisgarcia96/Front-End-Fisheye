import { Photographer } from "../../models/photographerModel.js";


export function photographerFactory(data, medias) {

    const photographer = new Photographer(data, medias);

    return photographer;
}
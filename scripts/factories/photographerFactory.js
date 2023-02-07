import { Photographer } from "../../models/photographerModel.js";


export function photographerFactory(data) {

    const photographer = new Photographer(data);

    return photographer;
}
import { Image } from "../../models/imageModel.js";
import { Video } from "../../models/videoModel.js";

export function mediaFactory(data) {
    if (data.image) {
        return new Image(data);
    } else if (data.video) {
        return new Video(data);
    }
}
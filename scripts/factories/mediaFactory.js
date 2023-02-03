import { Image } from "../../models/imageModel";
import { Video } from "../../models/videoModel";

export function mediaFactory(data) {

    let media = null;

    if (data.image) {
        media = new Image(data);
    } else if (data.video) {
        media = new Video(data);
    }

    return {media}
}
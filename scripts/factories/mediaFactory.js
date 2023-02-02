import { Image } from "../../models/imageModel";
import { Video } from "../../models/videoModel";

export function mediaFactory(data) {
    if (data.image) {
        return new Image(data);
    } else if (data.video) {
        return new Video(data);
    }
}
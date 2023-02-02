export class Video {
    constructor(data) {
        this._name = data.video;
    }

    get name() {
        return this._name;
    }
}
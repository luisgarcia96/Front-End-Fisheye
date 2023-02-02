export class Image {
    constructor(data) {
        this._name = data.image;
    }

    get name() {
        return this._name;
    }
}
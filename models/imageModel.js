export class Image {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._name = data.image;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }

    get id() {
        return this._id;
    }
    get photographerId() {
        return this._photographerId;
    }
    get title() {
        return this._title;
    }
    get name() {
        return this._name;
    }
    get likes() {
        return this._likes;
    }
    get date() {
        return this._date;
    }
    get price() {
        return this._price;
    }

    get generateContent() {
        return `
            <img src="../assets/images/${this._name}"
        `
    }
}
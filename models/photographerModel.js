export class Photographer {
    constructor(data, medias) {
        this._id = data.id;
        this._name = data.name;
        this._portrait = data.portrait;
        this._price = data.price;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._medias = medias;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get portrait() {
        return `assets/photographers/${this._portrait}`;
    }

    get price() {
        return this._price;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    get tagline() {
        return this._tagline;
    }

    get medias() {
        return this._medias;
    }

    get totalLikes() {
        let totalLikes = 0; 
        this._medias.forEach(media => {
            totalLikes += media.likes;
        });

        return totalLikes;
    }
}


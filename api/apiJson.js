class ApiJson {
    constructor(url) {
        this._url = url;
    }

    async getElement() {
        try {
            // We get the photographers from the JSON file
            const response = await fetch(this._url);
            
            if (response.ok) {
                const jsonResponse = await response.json();
                const data = jsonResponse;
                return data;                
            } 
        } catch (error) {
            console.log(error.message);
        }
    }
}

class PhotographerApi extends ApiJson {
    constructor(url) {
        super(url);
    }

    async getPhotographers() {
        const data = await this.getElement();
        return data.photographers;
    }
}

class MediaApi extends ApiJson {
    constructor(url) {
        super(url);
    }

    async getMedia() {
        const data = await this.getElement();
        return data.media;
    }
}

export {ApiJson, PhotographerApi, MediaApi};
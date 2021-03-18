class Album {
    constructor(dataObject) {
        this.id = dataObject.id
        this.name = dataObject.name
        this.artist = dataObject.artist
        this.genre = dataObject.genre 
        this.condition = dataObject.condition
        this.description = dataObject.description
        this.price = dataObject.price 
        this.category_id = dataObject.category_id
    }
    
    formatPrice() {
        return `$${this.price}`;
    }

    renderAlbumDetail() {
        return `
        <div>
            <h3>Album Description:</h3>
            <strong>${this.name}<br>
            by ${this.artist}</strong>
            <p>Genre: ${this.genre}<br>
            Condition: ${this.condition}<br>
            Description: ${this.description}<br>
            Price: ${this.formatPrice()}</p>
        </div>
        `
    }

    renderAlbumsIndex() {
        return `
            <div>
                <a  href="#"><h3 data-id=${this.id} class="text-sm font-medium hover:text-gray-400 album-link">${this.name}<br>
                by ${this.artist}</h3></a><button data-id=${this.id} type="button" class="delete-btn hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">X</button>
            </div>
        `
    } 
}



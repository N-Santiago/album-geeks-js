class Album {
    static all = []
    constructor(dataObject) {
        this.id = dataObject.id
        this.name = dataObject.name
        this.artist = dataObject.artist
        this.genre = dataObject.genre 
        this.condition = dataObject.condition
        this.description = dataObject.description
        this.price = dataObject.price 
        this.category_id = dataObject.category_id
        this.category_name = dataObject.category_name
        Album.all.push(this)
    }
    
    formatPrice() {
        return `$${this.price.toFixed(2)}`;
    }

    renderAlbumDetail() {
        return `
        <div>
            <h3 class="font-bold">Album Description:</h3>
            <p class="font-medium">${this.name}<br>
            by ${this.artist}</p>
            <p>Genre: ${this.genre}<br>
            Condition: ${this.condition}<br>
            Category: ${this.category_name}<br>
            Description: ${this.description}<br>
            Price: ${this.formatPrice()}</p>
        </div>
        `
    }

    renderAlbumsIndex() {
        return `
            <div class="mt-4">
                <a  href="#"><h3 data-id=${this.id} class="font-medium hover:text-gray-400 album-link">${this.name}<br>
                by ${this.artist}</h3></a><button data-id=${this.id} type="button" class="delete-btn hover:bg-gray-100 text-red-800 font-semibold py-1 px-2 border border-red-400 rounded shadow">Bought</button>
            </div>
        `
    } 
}



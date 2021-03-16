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

    renderAlbumsIndex() {
        return `
            <div>
                <h3>${this.name}<br>
                by ${this.artist}</h3>
                <button data-id=${
                    this.id
                  } type="button" class="delete-btn hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">X</button>
                <p>Genre: ${this.genre}<br>
                Condition: ${this.condition}<br>
                Description: ${this.description}<br>
                Price: ${this.formatPrice()}</p>
            </div>
        `
    } 
}



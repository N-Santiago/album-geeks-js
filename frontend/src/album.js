class Album {
    constructor(dataObject) {
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
                <p>Genre: ${this.genre}<br>
                Condition: ${this.condition}<br>
                Description: ${this.description}<br>
                Price: ${this.formatPrice()}</p>
            </div>
        `
    } 
}



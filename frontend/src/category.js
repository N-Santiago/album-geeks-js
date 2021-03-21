class Category {
    constructor(dataObject) {
        this.id = dataObject.id
        this.name = dataObject.name
        this.albums = dataObject.albums
    }
    
    formatPrice() {
        return `$${this.price}`;
    }

    renderCategories() {
        return `
            <div>
                <h3> ${this.name} </h3>
                ${this.albums.length} albums
            </div>
        `
    } 
}
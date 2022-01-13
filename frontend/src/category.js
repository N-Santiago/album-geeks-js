class Category {
    constructor(dataObject) {
        this.id = dataObject.id
        this.name = dataObject.name
        this.albums = dataObject.albums
    }

    renderCategories() {
        return `
            <div>
                <h3 class="font-medium mt-4"> ${this.name}: </h3>
                ${this.albums.length} albums
            </div>
        `
    } 
}
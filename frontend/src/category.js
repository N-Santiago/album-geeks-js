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
                <h3 class="font-medium mt-4"> ${this.name}: </h3>
                ${this.albums.length} albums
            </div>
        `
    } 

    // renderAlbums() {
    //     let i;
    //     for (i = 0; i < this.length; i++) {
    //         `
    //         <div>
    //             <li id="album-${this.id}">
    //             ${this.name} - ${this.artist} - Genre: ${this.genre}</small><button class="delete-btn" data-action="delete" id="delete-btn"> X </button></li>
    //         </div>
    //         `
    //     }
    // }
}
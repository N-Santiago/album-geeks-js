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

    // renderAlbums() {
    //     this.albums.forEach(album => {
    //         mainListEl().innerHTML += `
    //         <div>
    //         <li id="album-${album.id}">
    //         ${album.name} - ${album.artist} - Genre: ${album.genre}</small><button class="delete-btn" data-action="delete" id="delete-btn"> X </button></li>
    //         </div>
    //         `
    //     })
    // }
}
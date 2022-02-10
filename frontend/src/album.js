class Album {
    static all = []
    constructor(dataObject) {
        this.id = dataObject.id
        this.name = dataObject.name
        this.artist = dataObject.artist
        this.image_url = dataObject.image_url
        this.video_url = dataObject.video_url
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
        <div class="bg-gray-200">
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
            <div class="mt-4 border-t-2 border-red-700 flex-auto justify-center">
                <a  href="#"><h3 data-id=${this.id} class="font-medium hover:text-gray-400 album-link">${this.name}<br>
                by ${this.artist}</h3><img src=${this.image_url} onerror="src='./images/noimage.jpeg'" alt="Image Not Available" style="width:250px" /><br><button data-id=${this.id} type="button" class="delete-btn bg-red-500 hover:bg-red-700 text-white py-1 px-2 border border-red-700 rounded">Buy</button>
            </div>
        `
    } 
}



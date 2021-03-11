const BASE_URL = "http://localhost:3000";
const albumEl = document.getElementById("album-list")

const init = () => {
    getAlbums();
};
  
const getAlbums = () => {
fetch(BASE_URL+"/albums")
    .then((res) => res.json())
    .then((data) => renderAlbums(data));
}

const renderAlbums = function (albums) {
    albums.forEach((album) => {
        albumEl.innerHTML += `
        <div>
            <h3>${album.name}<br>
            by ${album.artist}</h3>
            <p>Format: ${album.format}<br>
            Condition: ${album.condition}<br>
            Description: ${album.description}<br>
            Price: ${formatPrice(album.price)}</p>
        </div>
        `;    
    });
};

function formatPrice(price) {
    return `$${price}`;
}

// Have to call init in order to get what I'm calling inside of it. 
init()
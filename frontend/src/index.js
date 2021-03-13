const BASE_URL = "http://localhost:3000";
const albumEl = document.getElementById("album-list")
const albumForm = document.getElementById("new-album")

const init = () => {
    getAlbums();
    bindAlbumFormEventListener();
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
            <p>Genre: ${album.genre}<br>
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

function submitAlbum(data) {
    fetch(BASE_URL+"/albums", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ album: data }),
    })
    .then((res) => res.json)
    .then((album) => {
        albumEl.innerHTML += `
        <div>
            <h3>${album.name}<br>
            by ${album.artist}</h3>
            <p>Genre: ${album.genre}<br>
            Condition: ${album.condition}<br>
            Description: ${album.description}<br>
            Price: ${formatPrice(album.price)}</p>
        </div>
        `;    
    }) 
}

function bindAlbumFormEventListener() {
    albumForm.addEventListener("submit", function(e) {
        e.preventDefault()
        const name = document.getElementById("name").value
        const artist = document.getElementById("artist").value
        const genre = document.getElementById("genre").value
        const condition = document.getElementById("condition").value
        const description = document.getElementById("description").value
        const price = document.getElementById("price").value;
        const data = {
            name,
            artist,
            genre,
            condition,
            description,
            price,
        };
        submitAlbum(data)
    })
}

// Have to call init in order to get what I'm calling inside of it. 
init()
const BASE_URL = "http://localhost:3000";
const mainListEl = document.getElementById("main-list");
const mainListTitleEl = document.getElementById("main-list-title");
const albumEl = document.getElementById("album-list")
const albumForm = document.getElementById("form-container")
const albumsNavEl = document.getElementById("albums-nav");
const categoriesNavEl = document.getElementById("categories-nav");

const init = () => {
    getAlbums();
    bindAlbumFormEventListener();
    bindNavListeners();
};
  
const getAlbums = () => {
    mainListEl.innerHTML = "<strong>Loading the albums...</strong>";
    fetch(BASE_URL+"/albums")
    .then((res) => res.json())
    .then((data) => {
        mainListEl.innerHTML = "";
        mainListTitleEl.innerHTML = "<strong>Albums</strong>";
        data.forEach(albumObject => {
            const newAlbum = new Album(albumObject)
            mainListEl.innerHTML += newAlbum.renderAlbumsIndex()
        })
        document 
            .querySelectorAll(".delete-btn")
            .forEach((btn) => btn.addEventListener("click", deleteAlbum))
    })
}

function deleteAlbum(e) {
    const { id } = e.target.dataset
    fetch(`http://localhost:3000/albums/${id}`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .then((data) => {
        e.target.parentElement.remove();
    });
}

const getCategories = () => {
    mainListTitleEl.innerHTML = "<strong>Categories</strong>";
    mainListEl.innerHTML = "<strong>Loading...</strong>";
}

// const renderAlbums = function (albums) {
//     albums.forEach((album) => {
//         albumEl.innerHTML += `
//         <div>
//             <h3>${album.name}<br>
//             by ${album.artist}</h3>
//             <p>Genre: ${album.genre}<br>
//             Condition: ${album.condition}<br>
//             Description: ${album.description}<br>
//             Price: ${formatPrice(album.price)}</p>
//         </div>
//         `;    
//     });
// };

function submitAlbum(data) {
    fetch(BASE_URL+"/albums", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ album: data }),
    })
    .then((res) => res.json())
    .then((album) => {
        const newAlbum = new Album(album)
        mainListEl.innerHTML += newAlbum.renderAlbumsIndex() 
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

function bindNavListeners() {
    albumsNavEl.addEventListener("click", getAlbums);
    categoriesNavEl.addEventListener("click", getCategories);
}

// Have to call init in order to get what I'm calling inside of it. 
init()
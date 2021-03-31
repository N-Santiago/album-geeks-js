const BASE_URL = "http://localhost:3000";
const mainListEl = document.getElementById("main-list");
const mainListTitleEl = document.getElementById("main-list-title");
const albumEl = document.getElementById("album-list")
const albumForm = document.getElementById("form-container")
const albumsNavEl = document.getElementById("albums-nav");
const categoriesNavEl = document.getElementById("categories-nav");
const albumDetailEl = document.getElementById("album-details")

const init = () => {
    getAlbums();
    bindAlbumFormEventListener();
    bindNavListeners();
};
  
function getAlbums() {
    mainListEl.innerHTML = "<strong>Loading the albums...</strong>";
    fetch(BASE_URL+"/albums")
    .then((res) => res.json())
    .then((data) => {
        mainListEl.innerHTML = "";
        mainListTitleEl.innerHTML = "<h2 class=font-bold>Albums</h2>";
        data.forEach(albumObject => {
            const newAlbum = new Album(albumObject)
            mainListEl.innerHTML += newAlbum.renderAlbumsIndex()
        })
        document
            .querySelectorAll(".album-link")
            .forEach((link) => link.addEventListener("click", showAlbumDetails));
        document 
            .querySelectorAll(".delete-btn")
            .forEach((btn) => btn.addEventListener("click", deleteAlbum))
    })
}

function showAlbumDetails(e) {
    e.preventDefault()
    const { id } = e.target.dataset;
    fetch(`http://localhost:3000/albums/${id}`)
      .then((res) => res.json())
      .then((album) => {
        const newAlbum = new Album(album);
        albumDetailEl.innerHTML = newAlbum.renderAlbumDetail();
      });
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

function getCategories() {
    mainListEl.innerHTML = "<strong>Loading...</strong>";
    fetch(BASE_URL+"/categories")
    .then((res) => res.json())
    .then((data) => {
        mainListEl.innerHTML = "";
        mainListTitleEl.innerHTML = "<h2 class=font-bold>Categories</h2>";
        data.forEach(categoryObject => {
            const newCat = new Category(categoryObject)
            mainListEl.innerHTML += newCat.renderCategories()
        })
        document
            .querySelectorAll(".album-link")
            .forEach((link) => link.addEventListener("click", showAlbumDetails));
        document 
            .querySelectorAll(".delete-btn")
            .forEach((btn) => btn.addEventListener("click", deleteAlbum))
    })
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
    .then((res) => res.json())
    .then((album) => {
        const newAlbum = new Album(album)
        mainListEl.innerHTML += newAlbum.renderAlbumsIndex()
       init()
    }) 
}

function bindAlbumFormEventListener() {
    albumForm.addEventListener("submit", function(e) {
        e.preventDefault()
        const name = document.getElementById("name").value
        const artist = document.getElementById("artist").value
        const genre = document.getElementById("genre").value
        const category_id = document.getElementById("category_id").value
        const condition = document.getElementById("condition").value
        const description = document.getElementById("description").value
        const price = document.getElementById("price").value;
        const data = {
            name,
            artist,
            genre,
            category_id,
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
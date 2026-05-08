
const movies = [
    { title: "Inception", genre: "Sci-Fi" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "Parasite", genre: "Drama" },
    { title: "The Lion King", genre: "Animation" }
];

const suggestBtn = document.getElementById('suggest-btn');
const anotherBtn = document.getElementById('another-btn');
const movieTitle = document.getElementById('movie-title');
const movieGenre = document.getElementById('movie-genre');

function getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomIndex];
    
    movieTitle.innerText = selectedMovie.title;
    movieGenre.innerText = "Genre: " + selectedMovie.genre;
    
    
    anotherBtn.style.display = "inline-block";
    suggestBtn.style.display = "none";
}


suggestBtn.addEventListener('click', getRandomMovie);
anotherBtn.addEventListener('click', getRandomMovie);

// Final connection test for Ghaliaa
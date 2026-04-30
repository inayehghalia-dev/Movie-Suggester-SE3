
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
// برمجة إضافة الأفلام - مهمة فاطمة دياب SS-17
const addBtn = document.getElementById('add-btn');
const movieTitleInput = document.getElementById('new-movie-title');
const movieGenreInput = document.getElementById('new-movie-genre');

addBtn.addEventListener('click', () => {
    const title = movieTitleInput.value;
    const genre = movieGenreInput.value;

    if (title && genre) {
        alert('Movie: ' + title + ' added successfully!');
        // هنا يمكنك لاحقاً إضافة الكود الذي يضع الفيلم في المصفوفة
        movieTitleInput.value = '';
        movieGenreInput.value = '';
    } else {
        alert('Please fill in all fields!');
    }
});
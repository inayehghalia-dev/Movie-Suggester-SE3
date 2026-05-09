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
    
    if (movieTitle) movieTitle.innerText = selectedMovie.title;
    if (movieGenre) movieGenre.innerText = "Genre: " + selectedMovie.genre;
    
    if (anotherBtn) anotherBtn.style.display = "inline-block";
    if (suggestBtn) suggestBtn.style.display = "none";
}

if (suggestBtn) suggestBtn.addEventListener('click', getRandomMovie);
if (anotherBtn) anotherBtn.addEventListener('click', getRandomMovie);

// --- مهمة فاطمة دياب SS-17 (تعديل بسيط ليقبل الاختبار) ---

function addMovie() {
    const movieTitleInput = document.getElementById('new-movie-title');
    const movieGenreInput = document.getElementById('new-movie-genre');

    const title = movieTitleInput.value;
    const genre = movieGenreInput.value;

    if (title && genre) {
        // إضافة الفيلم للمصفوفة (عشان الاختبار يتأكد إنه انضاف)
        movies.push({ title: title, genre: genre });
        
        // مسح الحقول بعد الإضافة
        movieTitleInput.value = '';
        movieGenreInput.value = '';
        return true; // للنجاح
    } else {
        return false; // للفشل
    }
}

const addBtn = document.getElementById('add-btn');
if (addBtn) {
    addBtn.addEventListener('click', () => {
        const result = addMovie();
        if (result) {
            alert('Movie added successfully!');
        } else {
            alert('Please fill in all fields!');
        }
    });
}

// --- تصدير الدالة للاختبار (مهم جداً) ---
if (typeof module !== 'undefined') {
    module.exports = { addMovie, movies };
}
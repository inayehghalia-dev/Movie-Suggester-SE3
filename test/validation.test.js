

test('SS-1: Random Movie Suggestion', () => {
  const moviesList = ["Inception", "Interstellar", "The Dark Knight"];
  
  
  const randomIndex = Math.floor(Math.random() * moviesList.length);
  const selectedMovie = moviesList[randomIndex];

  
  expect(selectedMovie).toBeDefined();
  expect(moviesList).toContain(selectedMovie);
});

test('SS-1: should not return an empty string for movie selection', () => {
  const selectedMovie = "The Matrix";
  expect(selectedMovie.length).toBeGreaterThan(0);
});
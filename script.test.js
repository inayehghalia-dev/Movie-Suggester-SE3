/**
 * @jest-environment jsdom
 */
const { addMovie, movies } = require('./script');

describe('اختبار مهمة فاطمة دياب SS-17', () => {

    test('يجب إضافة الفيلم إلى المصفوفة بنجاح عند إدخال البيانات', () => {
        document.body.innerHTML = ` 
         <input id="new-movie-title" value="The Joker">
        <input id="new-movie-genre" value="Drama">`
          
        ;

        const initialCount = movies.length;
        addMovie();

        expect(movies.length).toBe(initialCount + 1);
        expect(movies[movies.length - 1].title).toBe("The Joker");
    });

    test('يجب عدم الإضافة إذا كانت الحقول فارغة', () => {
        document.body.innerHTML = `
         <input id="new-movie-title" value="">
        <input id="new-movie-genre" value="">
        `
;

        const initialCount = movies.length;
        const result = addMovie();

        expect(result).toBe(false);
        expect(movies.length).toBe(initialCount);
    });
});
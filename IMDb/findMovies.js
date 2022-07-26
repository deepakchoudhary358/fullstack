//const fetch = require('node-fetch');
import fetch from 'node-fetch';
import cheerio from 'cheerio';

const url = 'https://www.imdb.com/find?s=tt&ref_=fn_al_tt_mr&q=';

function findMovies(searchQuery) {
    console.log(`${url}${searchQuery}`);
    return fetch(`${url}${searchQuery}`)
        .then(response => response.text())
        .then(body => {
            const $ = cheerio.load(body);
            let movies = [];
            $('.findResult').each((i, element) => {
                const image = $(element).find('td a img');
                const title = $(element).find('td.result_text a');
                let movie = {
                    image: image.attr('src'),
                    title: title.text()
                }
                movies.push(movie);
            });
            return movies;
        });
};

export default findMovies;
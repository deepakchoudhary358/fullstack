import express from "express";
import * as scraper from "./scrapper";

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Scrapping is fun!'
    });
});

app.get('search/:title', (req, res) => {
    scraper.findMovies(req.params.title)
    .then(movies => {
        res.json(movies);
    });
    
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Linsting on port : ${port}`);
});
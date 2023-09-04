// import getArticles from "./src/data/articles.json";

export function root(app) {
    app.get('/api', (req, res) => {
        // res.json(getArticles);
    })
}

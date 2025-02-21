// const express = require('express');
// const app = express();

// const port = 8000;

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render("home.ejs");

//     });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//     });
const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true}));

app.get("/register", (req, res) => {
    res.send("Register get page");
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("Register post page");
}); 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
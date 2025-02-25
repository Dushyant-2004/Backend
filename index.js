const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));



let posts = [
    {
        username: 'Don',
        content: 'Hello World',
    },
    {
        username: 'Jane',
        content: 'Hi, there!',
    },
    {
        username: 'Doe',
        content: 'Hello, everyone!',
    },
];



app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
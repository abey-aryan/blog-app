const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.redirect('/posts');
});


const readPosts = () => {
    try {
        const data = fs.readFileSync('posts.json');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};


app.get('/posts', (req, res) => {
    const posts = readPosts();
    res.render('home', { posts });
});


app.get('/post', (req, res) => {
    const posts = readPosts();
    const post = posts.find(p => p.id == req.query.id);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    res.render('post', { post });
});


app.get('/add-post', (req, res) => {
    res.render('addPost');
});


app.post('/add-post', (req, res) => {
    const posts = readPosts();
    
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };

    posts.push(newPost);
    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));

    res.redirect('/posts');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

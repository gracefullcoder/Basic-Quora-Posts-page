const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')


app.listen(port, () => {
    console.log("listening on port 8080");
})

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


let posts =
    [
        {   id : uuidv4(),
            username: "vaibhav",
            content: "i am learning backend"
        },
        {   id : uuidv4(),
            username: "akshat",
            content: "i am learning app dev"
        },
        {   id : uuidv4(),
            username: "aditya",
            content: "i am learning python library!"
        }
    ];

app.get("/posts", (req, res) => {
    res.render("main.ejs",{posts});
})


app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
})

app.post("/posts", (req,res) => {
    let id = uuidv4();
    let {username,content} = req.body;
    posts.push({id,username,content});
    res.redirect("/posts")
})

app.get("/posts/show/:id" , (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => (id == p.id));
    // console.log(post);
    res.render("show.ejs",{post});
})

app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => (id == p.id));
    console.log(post);
    res.render("edit.ejs",{post});
    // res.redirect("/posts");
})

app.patch("/posts/:id",(req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => (p.id == id))
    let newContent = req.body.content;
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})

app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    // console.log(posts);
    res.redirect("/posts");
})
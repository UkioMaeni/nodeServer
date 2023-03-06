
import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";

const PORT = 5000;

const DB_URL = 'mongodb+srv://UkioMaeni:none@cluster0.z15fh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json())

app.get('/users', async (req, res) => {
    try {
        const { author, title, content, picture } = req.body;
        const get = await Post.create({ author, title, content, picture });
        res.status(200).json(get);
    } catch (e) {
        res.status(500).json(e);

    }

})

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('server app'));
    } catch (e) {
        console.log(e);

    }
}

startApp();

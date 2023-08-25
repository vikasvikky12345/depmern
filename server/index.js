const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config()
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("databse connected"))
.catch((err)=>console.log(err))

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.get("/", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    UserModel.findByIdAndUpdate({ _id: id }, updateData, { new: true })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.listen(PORT, () => {
    console.log("server is running");
});
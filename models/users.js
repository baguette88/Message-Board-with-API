//Set Up User Schema
// Dependencies

const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

const bcrypt = require('bcrypt');
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');


// Create a new Schema for User
const userSchema = new Schema({
    user:  { type: String, required: true, unique: true }, 
    // location: String,
    level: {type: Number, default: 1},
    password: { type: String, required: true, unique: true },
    // superUser: Boolean,
    // arrayExample: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ],
    // tags: [{type: String}]
}, {timestamps: true});

const userSeed = mongoose.model('userSeed', userSchema)

module.exports = userSeed //use module.exports to export this mongoose.model

module.exports = Users


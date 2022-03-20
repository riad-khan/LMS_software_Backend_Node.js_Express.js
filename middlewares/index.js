const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

module.exports = (app) =>{
    app.use(express.json());
    app.use(cors());
    app.use(morgan('combined'))
}
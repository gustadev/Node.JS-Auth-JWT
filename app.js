require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { json } = require('express')

const app = express()

app.get('/',(req,res) =>{
    res.status(200).json({msg:'Bem Vindo a nossa API!'})
});

app.listen(3000)
const express = require('express');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2')

let app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use(require('./routes'))

app.listen(3001);
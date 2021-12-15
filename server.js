const express = require('express');
const path = require('path');
const fs = require('fs');

let app = express();

app.use(express.static(path.join(__dirname, 'public/')))
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(3001);
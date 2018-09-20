const express= require('express'),
    bodyParser= require('body-parser');

require('dotenv').config();
const app= express();
app.use(bodyParser.json);

const massive = require('massive');


const secret = process.env.SECRET_KEY;

const port= process.env.PORT;

app.listen( port, () => {
    console.log(`Server listening on port ${port}`)
});

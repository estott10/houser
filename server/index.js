const express= require('express'),
    bodyParser= require('body-parser'),
    massive = require('massive'),
    cors = require('cors');

require('dotenv').config();
const app= express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then( dbInstance =>{
    app.set('db', dbInstance)
} ).catch( err => console.log(err) );

const port= process.env.PORT;

app.listen( port, () => {
    console.log(`Server listening on port ${port}`)
});

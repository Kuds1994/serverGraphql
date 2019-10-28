const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
    
//conectar com o banco de dados mlab
//muda para suas configuraçoes
mongoose.connect('mongodb://localhost:27017/exemplo');
mongoose.connection.once('open', () => {
    console.log('conectado'); 
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log("now listen for request on port 400");
})


const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const app = express();
const PORT = 4000;
mongoose.connect("mongodb+srv://veer4221:jonsi4221@cluster0.lagws.mongodb.net/Book?retryWrites=true&w=majority",options);
mongoose.connection.once('open',()=>console.log("Db connected"));
app.use('/graphql',graphqlHTTP({schema:schema,graphiql:true}));
app.get('/',(req,res)=>res.send("home"));
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))
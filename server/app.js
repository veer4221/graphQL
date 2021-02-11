const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const app = express();
const PORT = 4000;
app.use('/graphql',graphqlHTTP({schema:schema,graphiql:true}));
app.get('/',(req,res)=>res.send("home"));
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))
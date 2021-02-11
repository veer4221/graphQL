const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const app = express();
const PORT = 4000;
app.use('/graphql',graphqlHTTP({}));
// app.get('/',(req,res)=>res.send("home"));
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))

const express = require('express')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

//allow cross-origin request
app.use(cors())

// connect to mlab database
mongoose.connect('mongodb://ilbonny:ginger2003@ds211613.mlab.com:11613/gql-ninja')
mongoose.connection.once('open', ()=> {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true
}));

app.listen(4000, () => {
    console.log('litening port 4000')
});



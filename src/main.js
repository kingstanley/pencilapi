const express = require('express'); 
const mongoose = require('mongoose');
const { DEV_PORT, MONGO_URL } = require('./environment');
const questionRoute = require('./routs/question');
const topicRoute = require('./routs/topic'); 




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// register routes
app.use('/', questionRoute);
app.use('/topic', topicRoute);

(async () => {
    try {
        mongoose.connect(`${MONGO_URL}`).then(con =>{console.log("Connected to MongoDB: ")});
    } catch (error) {
         console.log("Mongo Error: ", error.message)
    }
})();
 
// console.log('topics grouped: ',grouped)

const port = process.env.PORT || DEV_PORT;
// console.log('port: ',port, devPort)


app.listen(port,() => {
    console.info(`App running on port: `, port)
})
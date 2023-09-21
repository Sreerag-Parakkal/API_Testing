const dotenv = require("dotenv");
const app = require("./app");
const databaseConnection = require('./config/databaseConnection');

dotenv.config({path:'./config/config.env'});

databaseConnection()

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running On Port ${process.env.PORT}`);
})
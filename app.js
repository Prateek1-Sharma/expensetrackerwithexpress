const express=require("express");
const bodyParser=require("body-parser");
const expense=require("./routes/expense")
const cors=require('cors');
const databaseConnection=require('./utils/database')
const app=express();

app.use(cors());
app.use(bodyParser.json());

app.use(expense)
databaseConnection.sync().then(()=>{
    app.listen(3000);
    console.log("database connection set");
})
.catch((err)=>{
    console.log(err);
})

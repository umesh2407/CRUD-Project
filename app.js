import express from 'express'
import connectDB from './db/connectDB.js'
import {join} from 'path'
import web from "./routes/web.js"

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL || ""

connectDB(DATABASE_URL);


const app = express()
const port = process.env.PORT || '3000'

app.set('view engine', 'ejs'); // Replace 'ejs' with your actual view engine
app.set('views', join(process.cwd(), 'views')); // Adjust the path accordingly


app.use(express.urlencoded({extended:false}));
app.use('/',express.static(join(process.cwd(),"public")))
app.use('/edit',express.static(join(process.cwd(),"public")))

app.set("view engine", "ejs");

app.use("/",web);



app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})
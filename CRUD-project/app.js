import express from 'express'
import connectDB from './db/connectDB.js'
import {join} from 'path'
import web from "./routes/web.js"

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/teacherdb"


connectDB(DATABASE_URL);


const app = express()
const port = process.env.PORT || '3000'


app.use(express.urlencoded({extended:false}));
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))

app.set("view engine", "ejs");

app.use("/student",web);



app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})
import express from "express";
import { env } from './env'
import dotenv from "dotenv";
import { Client } from "pg";
import expressSession from 'express-session'
import path from 'path'
import dayjs from 'dayjs'
import { recipeRouter } from './recipes'




dotenv.config();

export const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD

});

client.once("connect", () => {
    console.log("Connected to the database");
  });
client.connect()



const app = express();

//counter for entering the page // from the file env
app.use(expressSession({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

//for counter // need asking
declare module 'express-session'{
    interface SessionData {
        counter: number;
    }
}

// for types of files be ignored by the counter
let mediaExtnameList = [
    '.js', '.css', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.mp3', '.mp4'
]
function isMediaExtname(extname: string):boolean {   
    return mediaExtnameList.includes(extname) // returns true when extname matches the list 
}
//

//console.log request details need to be before express public // plus implementation of counter
app.use((req,res,next)=>{
    let counter = req.session.counter||0    //counter, the number before the logs
    if (!isMediaExtname(path.extname(req.url))) {  //for prevent counting .js/.css/.jpg etc.
      counter++ 
      req.session.counter = counter 
    }
    let timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss')
    console.log(`[${timestamp}] #${counter} ${req.method} Request ${req.url}`)
    next()
})

//add recipe page
app.use(recipeRouter)

//page load setting
app.use(express.static('public'))


//page port setting
app.listen(env.PORT, ()=>{
    console.log(env.PORT)
})

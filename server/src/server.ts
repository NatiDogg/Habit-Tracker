import cookieParser from 'cookie-parser'
import express from 'express'
import type { Express, Request, Response } from 'express'
import { config } from 'dotenv'
import connectToDb from './config/connectDb.js'
config()

const app:Express = express()
const port = process.env.PORT || 5000



//middlewares
app.use(express.json())
app.use(cookieParser())

//routes





app.get('/health', (req:Request, res:Response)=>{
        res.send("api is connected successfully!")
})

const startServer = async()=>{
      try {
         await connectToDb()
        app.listen(port,()=>{
               console.log("Server has started and listening to port " + port)
        })
      } catch (error) {
         console.log(error)
         process.exit(1)
      }
}

startServer()
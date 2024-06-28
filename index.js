import express from 'express'
import connectionDB from './db/connectionDB.js'
import booksRouter from './src/modules/books/books.routes.js'
import authorRouter from './src/modules/authors/authors.routes.js'

const app = express()
const port = process.env.port || 3000
connectionDB()

app.use(express.json())
app.use("/books", booksRouter)
app.use("/author", authorRouter)

app.use("*" , (req ,res , next)=>{
    res.status(404).json("Page Not Found")
})



app.listen(port , (req ,res , next)=>{
    console.log("Your App is Running... on Port " ,port)
})

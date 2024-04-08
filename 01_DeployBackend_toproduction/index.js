require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

 // (path,callback function)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=> {
    res.send('<h1>hello bro <h1>')
})

app.get('/signup',(req,res)=> {
    res.send('<h2> hello from signup <h2>')
})

app.get('/json',(req,res)=> {
    res.send({
        name : "Abhishek",
        rollNO : "21"
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


require('dotenv').config()
const express = require('express')
const connectedDB = require('./db/connectionDB')
const cors = require('cors')
const app = express()
const book = require('./routers/bookRouter')
const cart = require('./routers/cartRouter')
const user = require('./routers/userRouter')

app.use(express.json({ limit: '50mb' }))

app.use(cors())
app.use('/uploads', express.static('uploads'));

app.use('/api',book)
app.use('/api',cart)
app.use('/api',user)

app.listen(process.env.PORT || 5000 , () => {
    connectedDB()
    console.log(`listening on ${process.env.PORT}`);
})

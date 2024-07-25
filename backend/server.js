require('dotenv').config()
const express = require('express')
const connectedDB = require('./db/connectionDB')
const cors = require('cors')
const user = require('./routers/userRouter')
const app = express()


app.use(express.json({ limit: '50mb' }))

app.use(cors())
app.use('/uploads', express.static('uploads'));

app.use("/api/user",user)


app.listen(process.env.PORT || 5000 , () => {
    connectedDB()
    console.log(`listening on ${process.env.PORT}`);
})

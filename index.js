const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogReouter = require('./controller/blog')
const config = require('./utils/config')

mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogReouter)

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ShortUrl = require('./models/ShortUrls')
const shortUrlController = require('./Controllers/shortUrlController')

mongoose.connect('mongodb://0.0.0.0:27017/urlShortener',{
    useNewUrlParser: true,useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    // const shortUrls = await ShortUrl.find();
    res.render('index')
})

app.post('/crunchLink', async (req, res)=>{
    await ShortUrl.create({
        full: req.body.fullUrl,
        short: shortUrlController.crunch(ShortUrl.length)
    })
    res.redirect('/')
})

app.listen(process.env.PORT || 5000)
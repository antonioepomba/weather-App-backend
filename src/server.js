const express = require('express')
var cors = require('cors')

const bodyParser = require('body-parser')
const app = express()
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 ,// For legacy browser support
  methods: "GET, POST, PUT, DELETE, OPTIONS"
}
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const weatherRoute = require('./routes/weatherRoute')

const port = 5000

app.use('/api/getWeather', weatherRoute)
  
  app.listen(port, () => {
    console.log(`The Server is Connected in port ${port}`)
  })
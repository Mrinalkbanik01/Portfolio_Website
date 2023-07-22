const connectToMongo = require('./data');
const express = require('express')
const cors = require("cors");
connectToMongo();
const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
app.use(express.json())
app.use("/message", require('./routes/message'));
const port = 6969;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


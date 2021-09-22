const express = require('express');
//const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

//conectarDB();

const CorsOptions = {
    //origin: "https://upbeat-volhard-0f49e6.netlify.app/"
  }

app.use(cors());

app.use( express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.use("/api/product", require("./routes/product"))

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
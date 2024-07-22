const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());


// Menu routes
const menuRoutes = require('./routes/menuRoute'); 
app.use('/menu', menuRoutes);

// person
const personRoute = require("./routes/personRoute");
app.use('/person' , personRoute)

app.listen(5000, () => {
  console.log(`app is litnening to the PORT : 5000`);
});
   
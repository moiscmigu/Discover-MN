require("dotenv").config({
    path:"./env"
});

let express = require("express");
let app = express();
let port = process.env.PORT || 4000;
let bodyParser = require("body-parser");

// ROUTES
let index = require("./routes/index");
let events = require("./routes/events");


app.use(express.static('src'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
    console.log("Server up on port", port);
});

app.use("/", index);
app.use("/events", events);
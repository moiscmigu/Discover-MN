let express = require("express");
let router = express.Router();
let path = require("path");


router.get("/", (req, res) => {
    console.log("Main Url Hit");

    res.sendFile(path.resolve("src/index.html"));
});


module.exports = router;
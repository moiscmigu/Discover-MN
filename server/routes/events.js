const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const request = require("request");
const NodeGeocoder = require("node-geocoder");


// PREDICTHQ
const REQUIREHQ_API_KEY = process.env.REQUIREHQ_API_KEY;

headers = {
    Authorization: "Bearer nrH1zNQQZ4zTKOAxb8GcPdWO82BTL3"
};

//MOMENT
const moment = require('moment');
const now = new Date();
const timeNow = moment(now).format("YYYY-MM-DD");
const timeInTwoWeeks = moment().add(2, "weeks");
const timeFromNow = moment(timeInTwoWeeks).format("YYYY-MM-DD");



let options = {
    provider: 'google',
    httpAdapter: 'https', // Default
    apiKey: process.env.GOOGLE_API_KEY, // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};

let geocoder = NodeGeocoder(options);

router.get("/", (req, res) => {
    // [0] IS THE LONGITUDE 
    
   request.get("https://api.predicthq.com/v1/events/?q=minnesota&active.gte="+timeNow+"&active.lte="+timeFromNow+"", {headers}, (err, data) => {
        let results = JSON.parse(data.body).results;

        let geoPromises = [];
        
        for (let i in results) {
            results[i].date = moment(results[i].start).format("ddd MMM DD");
            results[i].fromNow = moment(results[i].start).fromNow();
        }//end of for loop

        for (let i in results) {
            let promise = getGeo(results[i].location[1],   results[i].location[0]);
            geoPromises.push(promise);
        }//end of for loop
        
        Promise.all(geoPromises).then(vs => {
        res.send({address:vs, results});
        });
    
    });// end of request call
});

function getGeo(lat, long) {
    return new Promise(resolve => {
        geocoder.reverse({lat:lat, lon:long}, function(err, res) {
            resolve(res)
          });
    });//end of promise
}//end of getGeo


module.exports = router;
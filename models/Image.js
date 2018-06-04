const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    startdate: String,
    fullstartdate: String,
    enddate: String,
    url: String,
    urlbase: String,
    copyright: String,
    copyrightlink: String,
    quiz: String,
    wp: Boolean,
    hsh: String,
    drk: Number,
    top: Number,
    bot: Number,
    hs: Array
});

module.exports = mongoose.model("Image", ImageSchema);
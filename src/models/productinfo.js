const mongoose = require('mongoose');

const productinfoSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    ImgUrl: {
        type: String,
        required: true
    },
    BrandName: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Productinfo', productinfoSchema);
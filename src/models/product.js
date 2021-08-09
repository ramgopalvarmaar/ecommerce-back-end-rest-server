const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        trim: true
    },
    ImgUrl: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    ProductUrl: {
        type: String,
        required: true
    },
    ProductBrand: {
        type: String,
        required: true,
        trim: true
    },
    vendor: { type: String },
    vendorImg: { type: String },
}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);
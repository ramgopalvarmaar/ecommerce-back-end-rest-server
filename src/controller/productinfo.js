const Productinfo = require("../models/productinfo");

exports.getProductInfoBySearchTerm = (req, res) => {
  const { searchTerm } = req.params;
  console.log(searchTerm);
  Productinfo.find({ "Name": { "$regex": searchTerm, "$options": "i" } }).exec((error, products) => {
      if (error) {
        return res.status(400).json({ error });
      }
    if (products.length > 0) {
          res.status(200).json({
            products,
          });
        }else {
          res.status(400).json({ products });
        }
    });
};
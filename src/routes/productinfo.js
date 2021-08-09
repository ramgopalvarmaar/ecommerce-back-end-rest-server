const express = require("express");

const {
  getProductInfoBySearchTerm,
} = require("../controller/productinfo");

const router = express.Router();

router.get('/productinfo/:searchTerm', getProductInfoBySearchTerm);

module.exports = router;

// Express dahil ediyoruz
const express = require('express');

// Nodejs core kütüphanesinden path modülünü dahil ediyoruz
const path = require("path");

// Express içerisindeki router modülünü çağırıyoruz
const router = express.Router();

router.get('/', (req, res, next) => {
    // __dirname bu dosyanın bulunduğu dizini(path) vermektedir
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

// Export ediyoruz
module.exports = router;
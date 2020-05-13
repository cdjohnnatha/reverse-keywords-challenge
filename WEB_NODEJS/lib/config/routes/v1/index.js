const express = require('express');

const router = express.Router();
const reverseWordsRoutes = require('./reverse-words-routes');

router.use('/reverse-words', reverseWordsRoutes);

module.exports = router;
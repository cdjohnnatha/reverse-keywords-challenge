const express = require('express');

const router = express.Router();
const { reverseWords } = require('../../../api/controllers/v1/reverse-words-controller');

router.get('/', reverseWords);

module.exports = router;

/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
const i18n = require('i18n');

const { reverseString } = require('../../../helpers/reverse-string-helper');
const reverseWords = (req, res) => {
  try {
    const { query } = req;
    let reverse_word = null;
    if ('word' in query === false) {
      res.status(400).send({ error: i18n.__('error.keyword_missing') });
    } else {
      reverse_word = reverseString(query.word);
      res.send({ reverse_word });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = {
  reverseWords,
};

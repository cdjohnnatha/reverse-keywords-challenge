const chai = require('chai');
const chaiHttp = require('chai-http');
const { lorem } = require('faker');

const app = require('../../../app');
const i18n = require('../../../lib/config/i18n');

const { reverseString } = require('../../../lib/helpers/reverse-string-helper');
chai.use(chaiHttp);

const { expect } = chai;

const REVERSE_WORDS_ROUTE = '/v1/reverse-words';
const wordToBeReversed = lorem.word();

describe('Testing reverse-words-controller', () => {
  it(`GET v1/reverse-words?word=${wordToBeReversed} should get a word reverse`, async () => {
    const response = await chai
      .request(app)
      .get(`${REVERSE_WORDS_ROUTE}?word=${wordToBeReversed}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.a.property('reverse_word');
    expect(response.body.reverse_word).to.be.eq(
      reverseString(wordToBeReversed)
    );
    if (response.error) console.error(response.error);
    expect(response.error).to.be.eq(false);
  });
  it('GET v1/reverse-words? should get an error if not send the keyword "word" as ?word=', async () => {
    const response = await chai
      .request(app)
      .get(`${REVERSE_WORDS_ROUTE}?otherKey=${wordToBeReversed}`);
    expect(response).to.have.status(400);
    const errorMessage = JSON.parse(response.error.text).error;
    expect(errorMessage).to.be.eq(i18n.__('error.keyword_missing'));
  });
  it('GET v1/reverse-words not send any word should response an error', async () => {
    const response = await chai
      .request(app)
      .get(`${REVERSE_WORDS_ROUTE}`);
    expect(response).to.have.status(400);
    const errorMessage = JSON.parse(response.error.text).error;
    expect(errorMessage).to.be.eq(i18n.__('error.keyword_missing'));
  });
});

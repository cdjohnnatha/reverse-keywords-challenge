/* eslint-disable import/prefer-default-export */
import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');


const REACT_API_BASE_URL = 'http://localhost:3001';

export const sendWordToReverse = async (wordToBeReversed) => {
  const responseObject = { success: true, data: null, error: null };

  try {
    const { data } = await axios.get(
      `${REACT_API_BASE_URL}/v1/reverse-words?word=${wordToBeReversed}`
    );
    responseObject.data = data;
  } catch (error) {
    responseObject.success = false;
    responseObject.error = error;
  }

  return responseObject;
};

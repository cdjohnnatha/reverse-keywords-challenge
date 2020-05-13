import React from 'react';
import { func, string, shape, arrayOf } from 'prop-types';
import './SendReverseWordButton.css';
import { sendWordToReverse } from '../../../helpers/request-helpers';

const SendReverseWordButton = ({
  typedWords,
  setTypedWords,
  setErrorMessage,
}) => {
  const onChangeHandler = async () => {
    const { data, success, error } = await sendWordToReverse(typedWords.recentInput);
    if (success) {
      typedWords.historyWords.push(data.reverse_word);
      setTypedWords({ ...typedWords });
    } else {
      setErrorMessage(error.message);
      console.error(error);
    }
  };

  return (
    <button className="button-style" onClick={onChangeHandler} type="button">
      Reverse the input text "{typedWords.recentInput}"
    </button>
  );
};

SendReverseWordButton.propTypes = {
  typedWords: shape({
    recentInput: string.isRequired,
    historyWords: arrayOf(string).isRequired,
  }).isRequired,
  setTypedWords: func.isRequired,
  setErrorMessage: func.isRequired,
};

export default SendReverseWordButton;

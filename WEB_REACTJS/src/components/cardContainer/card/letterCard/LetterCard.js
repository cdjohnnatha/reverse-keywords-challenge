import React from 'react';
import { string, func, number, bool } from 'prop-types';
import './LetterCard.css';

const LetterCard = ({
  letter,
  letterIndexPosition,
  onSingleLetterClickHandler,
  isFromWordHistory,
  cardHistoryIndex,
}) => {
  let classList = 'card-class flex-container box-margin';
  if (isFromWordHistory) classList += ' red-bg';
  else classList += ' green-bg';

  return (
    <div
      className={classList}
      onClick={() =>
        onSingleLetterClickHandler(letterIndexPosition, cardHistoryIndex)
      }
    >
      {letter}
    </div>
  );
};

LetterCard.propTypes = {
  letter: string.isRequired,
  onSingleLetterClickHandler: func.isRequired,
  letterIndexPosition: number.isRequired,
  cardHistoryIndex: number,
  isFromWordHistory: bool.isRequired,
};

LetterCard.defaultProps = {
  cardHistoryIndex: null,
};

export default LetterCard;

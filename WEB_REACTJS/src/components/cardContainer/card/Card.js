import React from 'react';
import { string, func, number, bool } from 'prop-types';
import LetterCard from './letterCard/LetterCard';
import './Card.css';

const Card = ({
  typedWords,
  onSingleLetterClickHandler,
  cardHistoryIndex,
  isFromWordHistory,
}) => {
  let lettersArr = null;
  let renderLetters = null;
  if (typedWords && typedWords.length > 0) {
    lettersArr = typedWords.split('');
    renderLetters = lettersArr.map((letter, index) => (
      <LetterCard
        key={`card-letter-${letter}-${index}`}
        letter={letter}
        onSingleLetterClickHandler={onSingleLetterClickHandler}
        letterIndexPosition={index}
        isFromWordHistory={isFromWordHistory}
        cardHistoryIndex={cardHistoryIndex}
      />
    ));
  }

  return <div className="container">{renderLetters}</div>;
};

Card.propTypes = {
  typedWords: string,
  onSingleLetterClickHandler: func.isRequired,
  cardHistoryIndex: number,
  isFromWordHistory: bool,
};

Card.defaultProps = {
  typedWords: 'Kenna',
  isFromWordHistory: false,
  cardHistoryIndex: null,
};

export default Card;

import React, { useState } from 'react';
import Card from './card/Card';
import InputField from './inputField/InputField';
import { removeArrayElement } from '../../helpers/array-helpers';
import SendReverseWordButton from './sendReverseWordButton/SendReverseWordButton';
import ErrorMessage from '../errorMessage/ErrorMessage';

const CardContainer = () => {
  const [typedWords, setTypedWords] = useState({
    recentInput: 'Kenna',
    historyWords: [],
  });

  const [errorMessage, setErrorMessage] = useState();
  let renderWordsHistory = null;

  /**
   * @function onInputFieldChangeHandler
   * @description It will be used to change the input field state and value.
   * @param {Object} event - input event object.
   * @param {Object} event.target - input event target.
   * @param {Object} event.target.value - value typed which it will be used on typedWords state.
   */
  const onInputFieldChangeHandler = ({ target }) => {
    typedWords.recentInput = target.value;
    setTypedWords({ ...typedWords });
  };

  /**
   * @function onSingleLetterCardClickHandler
   * @description It will be used to remove a letter from a word. If the word is considered as
   * a recenpt input then it will be removed from it and update the state for typedWords,
   * if a letter position be considered from typedWords.historyWords then it will retrieve
   * the word from array, remove the right letter and the update the state.
   * @param {Number} letterIndexPosition - Letter position from typedWords.recentInput
   * to be removed.
   * @param {Number|undefined} cardHistoryIndex - This number it will show up when the word belongs
   * to a history and it will identify the history word position to.
   */
  const onSingleLetterCardClickHandler = (
    letterIndexPosition,
    cardHistoryIndex
  ) => {
    let wordToBeLetterRemoved = typedWords.recentInput;
    const isLetterFromWordHistory = typeof cardHistoryIndex === 'number';
    if (isLetterFromWordHistory) {
      wordToBeLetterRemoved = typedWords.historyWords[cardHistoryIndex];
    }
    const newWordAfterRemoval = removeArrayElement(
      wordToBeLetterRemoved,
      letterIndexPosition
    ).join('');

    if (isLetterFromWordHistory) {
      typedWords.historyWords[cardHistoryIndex] = newWordAfterRemoval;
      if (typedWords.historyWords[cardHistoryIndex].length === 0) {
        typedWords.historyWords = removeArrayElement(
          typedWords.historyWords,
          cardHistoryIndex
        );
      }
    } else typedWords.recentInput = newWordAfterRemoval;
    setTypedWords({ ...typedWords });
  };

  if (typedWords.historyWords.length > 0) {
    renderWordsHistory = typedWords.historyWords.map((wordHistory, index) => (
      <Card
        key={`word-history-key-${index}`}
        typedWords={wordHistory}
        onSingleLetterClickHandler={onSingleLetterCardClickHandler}
        cardHistoryIndex={index}
        isFromWordHistory
      />
    ));
    renderWordsHistory = <div id="card-history">{renderWordsHistory}</div>;
  }

  return (
    <div>
      <div>
        <h2>Reverse word</h2>
        <p>
          Hello, welcome to reverse word application. Follow the instructions
          bellow.
        </p>

        <ol>
          <li>
            You can use the input field to type words. Each letter it will be
            shown as a green card.
          </li>
          <li>To reverse a word you can press the button aside.</li>
          <li>
            Each reversed word it will be saved in a history list, e a new line
            after the green cards following the same approach of one letter per
            card but with a red background.
          </li>
          <li>You can also delete letters just clicking on it.</li>
        </ol>
      </div>
      <div>
        <InputField
          onInputFieldChange={onInputFieldChangeHandler}
          value={typedWords.recentInput}
        />
        <SendReverseWordButton
          typedWords={typedWords}
          setTypedWords={setTypedWords}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <div>
        <ErrorMessage
          hideMessage={!!errorMessage}
          message={errorMessage}
          cleanErrorMessageHandler={setErrorMessage}
        />
      </div>
      <div id="current-card-inputs">
        <Card
          typedWords={typedWords.recentInput}
          onSingleLetterClickHandler={onSingleLetterCardClickHandler}
        />
      </div>
      {renderWordsHistory}
    </div>
  );
};

export default CardContainer;

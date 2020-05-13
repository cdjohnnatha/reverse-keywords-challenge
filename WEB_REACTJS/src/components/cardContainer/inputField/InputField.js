import React from 'react';
import { string, func } from 'prop-types';
import './InputField.css';

const InputField = ({ value, customStyle, onInputFieldChange }) => {

  let localStyle = {};
  if (customStyle) localStyle = { ...localStyle, customStyle };

  return (
    <input
      type="text"
      className="field input-style"
      value={value}
      onChange={onInputFieldChange}
      style={localStyle}
    />
  );
};

InputField.propTypes = {
  value: string,
  onInputFieldChange: func.isRequired,
};

InputField.defaultProps = {
  value: 'Kenna',
};

export default InputField;

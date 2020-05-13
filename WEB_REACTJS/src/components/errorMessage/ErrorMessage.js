import React from 'react';
import { number, func } from 'prop-types';

const styles = {
  spanStyle: {
    color: 'red',
  },
  errorMessageContainer: {
    marginTop: '1em',
  },
};

const ErrorMessage = ({
  message,
  hideMessageTimeout,
  cleanErrorMessageHandler,
}) => {
  const { spanStyle, errorMessageContainer } = styles;

  let renderMessageComponent = null;
  if (message) {
    renderMessageComponent = (
      <div style={errorMessageContainer}>
        <span style={spanStyle}>An error happened, {message}</span>
      </div>
    );
    setTimeout(() => {
      cleanErrorMessageHandler(undefined);
    }, hideMessageTimeout);
  }

  return renderMessageComponent;
};

ErrorMessage.propTypes = {
  hideMessageTimeout: number,
  cleanErrorMessageHandler: func.isRequired,
};

ErrorMessage.defaultProps = {
  hideMessageTimeout: 2000,
};

export default ErrorMessage;

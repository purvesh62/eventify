import SimpleReactValidator from 'simple-react-validator';
import React, { useState } from 'react';

const useSimpleReactValidator = (customMessage = {}, customValidator = {}) => {
  const [show, setShow] = useState(false);
  const validator = new SimpleReactValidator({
    messages: customMessage,
    validators: customValidator,
  });

  if (show) {
    validator.showMessages();
  }

  return [validator, setShow];
};

export default useSimpleReactValidator;
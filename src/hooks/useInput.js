import { useState } from 'react';

const useInput = (initalState, validationInfo) => {
  const [value, setValue] = useState(initalState);
  const [validated, setValidated] = useState({
    isOk: false,
    message: '',
  });
  function handleChange(e) {
    const currentValue = e.target.value;
    setValue(currentValue);
    if (validationInfo?.BLANK && !currentValue) {
      setValidated({ isOk: false, message: validationInfo.BLANK });
      return;
    }
    if (!validationInfo?.checkValueValidated(currentValue)) {
      setValidated({ isOk: false, message: validationInfo.INVALID });
      return;
    }
    setValidated({
      isOk: true,
      message: validationInfo.SUCCESS || ' ',
    });
  }

  return [value, validated, handleChange];
};

export default useInput;

import { useEffect, useState } from 'react';

import { Colors } from '../../styles';
import styled from 'styled-components';
import useElementResize from '../../hooks/useElementResize';

// TODO: input, textarea 분기 처리로 하나의 컴포넌트처럼 사용하는 것이 옳은 것인지 고민해볼 것
const PinInput = ({ inputType = 'input', maxSize, value, setValue, isValueInvalid = false, ...props }) => {
  const [leftSize, setLeftSize] = useState(maxSize);
  const { ref } = useElementResize();

  useEffect(() => {
    if (maxSize) {
      setLeftSize(maxSize - value?.length);
    }
  }, [value]);

  return (
    <div style={{ display: 'block' }}>
      {inputType === 'input' && <Input isValueInvalid={!isValueInvalid.isOk} onChange={setValue} {...props} />}
      {inputType === 'textarea' && (
        <TextArea ref={ref} isValueInvalid={!isValueInvalid.isOk} value={value} onChange={setValue} {...props} />
      )}
      <SubDescription isValueInvalid={!isValueInvalid.isOk} value={value}>
        <div>{isValueInvalid.message}</div>
        {maxSize && <div>{leftSize}</div>}
      </SubDescription>
    </div>
  );
};

const Input = styled.input`
  height: 48px;
  width: 100%;
  border: none;
  border-bottom: 1.5px solid ${(props) => (props.isValueInvalid && props.value ? Colors.warning : Colors.grey)};
  :focus {
    outline: none;
    border-bottom: 2px solid ${(props) => (props.isValueInvalid && props.value ? Colors.warning : Colors.blue)};
  }
`;

const TextArea = styled.textarea`
  height: 48px;
  width: 100%;
  border: none;
  resize: none;
  overflow-y: hidden;
  border-bottom: 1.5px solid ${(props) => (props.isValueInvalid && props.value ? Colors.warning : Colors.grey)};
  :focus {
    outline: none;
    border-bottom: 2px solid ${(props) => (props.isValueInvalid && props.value ? Colors.warning : Colors.blue)};
  }
`;

const SubDescription = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${(props) => (props.isValueInvalid && props.value ? Colors.warning : 'rgba(18, 18, 18, 0.8)')};
`;

export default PinInput;

import PinInput from '../../../components/pin/PinInput';
import { useState } from 'react';

export default {
  title: 'components/pin/PinInput',
  component: PinInput,
};

export const Default = () => {
  const [value, setValue] = useState('');
  const [isValueInvalid, setIsValueInvalid] = useState(false);
  return (
    <div style={{ width: '400px' }}>
      <PinInput
        value={value}
        setValue={(e) => setValue(e.target.value)}
        isValueInvalid={isValueInvalid}
        setIsValueInvalid={setIsValueInvalid}
        style={{ fontSize: '38px', fontWeight: '700' }}
        placeholder="제목추가"
        subDescription="처음 40글자는 일반적으로 피드에서 볼 수 있습니다."
        maxSize={40}
      />
    </div>
  );
};

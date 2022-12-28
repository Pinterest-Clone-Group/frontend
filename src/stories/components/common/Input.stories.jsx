import { useEffect, useState } from 'react';

import Input from '../../../components/common/Input';
import Label from '../../../components/common/Label';
import ValidationText from '../../../components/common/ValidationText';

export default {
  title: 'components/common/Input',
  component: Input,
};

export const Default = (args) => {
  const [value, setValue] = useState('');
  const [isValueValid, setIsValueValid] = useState(false);
  useEffect(() => {
    if (value === '안녕') {
      setIsValueValid(true);
      return;
    }
    setIsValueValid(false);
  }, [value]);
  return (
    <div>
      <Label>안녕</Label>
      <Input
        {...args}
        placeholder="'안녕' 을 입력"
        value={value}
        isValueValid={isValueValid}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && !isValueValid && <ValidationText isValueValid={isValueValid}>안녕을 입력하세요</ValidationText>}
    </div>
  );
};

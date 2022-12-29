import Label from '../common/Label';
import styled from 'styled-components';

const MyInfoSelectOption = ({ labelText, children }) => {
  return (
    <>
      <Label>{labelText}</Label>
      <MyInfoSelectOptionLayout style={{ boxShadow: 'none', width: '240px' }}>{children}</MyInfoSelectOptionLayout>
    </>
  );
};

const MyInfoSelectOptionLayout = styled.div`
  margin-bottom: 6px;
`;

export default MyInfoSelectOption;

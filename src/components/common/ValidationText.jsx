import { Colors } from '../../styles';
import Icon from './icons/Icon';
import styled from 'styled-components';

const ValidationText = ({ children, isValueValid }) => {
  return (
    <StyledValidationText isValueValid={isValueValid}>
      {!isValueValid && <Icon.ValidationWarning />}&nbsp;
      {children}
    </StyledValidationText>
  );
};

const StyledValidationText = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 12px 0;
  font-size: 12px;
  color: ${(props) => (props.isValueValid ? Colors.success : Colors.warning)};
`;

export default ValidationText;

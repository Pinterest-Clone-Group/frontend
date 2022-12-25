import { Colors } from '../../styles/colors';
import styled from 'styled-components';

const Input = ({ isValueValid, ...props }) => {
  return <InputLayout {...props} isValueValid={isValueValid} />;
};

const InputLayout = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1.5px solid ${(props) => (props.isValueValid ? Colors.darkgrey : Colors.logo)};
  border-radius: 14px;
  padding: 15px 12px;
  min-width: 120px;
  font-size: 16px;
  :focus {
    box-shadow: 0 0 0 5px #7fc1ff;
  }
  :hover {
    border: 1.5px solid ${(props) => (props.isValueValid ? Colors.black : Colors.logo)};
  }
`;

export default Input;

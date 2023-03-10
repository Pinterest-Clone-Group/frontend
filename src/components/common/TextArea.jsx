import { Colors } from '../../styles';
import styled from 'styled-components';
import useElementResize from '../../hooks/useElementResize';

const TextArea = ({ isValueValid, ...props }) => {
  const { ref } = useElementResize();
  return <TextAreaLayout ref={ref} {...props} isValueValid={isValueValid} />;
};

const TextAreaLayout = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1.5px solid ${(props) => (props.isValueValid ? Colors.darkgrey : Colors.logo)};
  border-radius: 14px;
  padding: 15px 12px;
  min-width: 120px;
  min-height: 40px;
  font-size: 16px;
  resize: none;
  overflow-y: hidden;
  :focus {
    box-shadow: 0 0 0 5px #7fc1ff;
  }
  :hover {
    border: 1.5px solid ${(props) => (props.isValueValid ? Colors.black : Colors.logo)};
  }
`;

export default TextArea;

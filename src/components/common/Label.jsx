import { Colors } from '../../styles';
import styled from 'styled-components';

const Label = ({ children }) => {
  return <LabelLayout>{children}</LabelLayout>;
};

const LabelLayout = styled.label`
  display: block;
  font-size: 14px;
  color: rgba(18, 18, 18, 0.8);
  font-weight: 400;
  letter-spacing: 0.06em;
  color: ${Colors.black};
  margin-bottom: 10px;
  margin-left: 5px;
`;

export default Label;

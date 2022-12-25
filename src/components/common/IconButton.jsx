import { Colors } from '../../styles';
import styled from 'styled-components';

const IconButton = ({ icon, onClick, ...props }) => {
  return (
    <IconButtonLayout onClick={onClick} {...props}>
      {icon}
    </IconButtonLayout>
  );
};

const IconButtonLayout = styled.div`
  padding: 8px 8px 4px 8px;
  border-radius: 100%;
  cursor: pointer;
  :hover {
    background-color: ${Colors.iconHover};
  }
`;

export default IconButton;

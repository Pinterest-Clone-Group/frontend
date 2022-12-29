import { Colors } from '../../styles';
import styled from 'styled-components';
import useClickAway from '../../hooks/useClickAway';

const SelectBox = ({ visible, onClose, children, location = -10, boxMarginTop = 10 }) => {
  const { ref } = useClickAway(onClose);
  return (
    <Wrapper visible={visible}>
      <Box ref={ref} location={location} boxMarginTop={boxMarginTop}>
        {children}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: relative;
  height: 0;
  margin-left: -9px;
`;

const Box = styled.div`
  position: absolute;
  min-width: 100px;
  padding: 12px;
  z-index: 2;
  margin-top: ${(props) => props.boxMarginTop + 'px'};
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(13, 13, 13, 0.3);
  background-color: white;
  left: ${(props) => props.location + 'px'};
  & > div {
    border-radius: 6px;
    padding: 12px;
    min-width: 100px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    :hover {
      box-shadow: 0 0 0 5px #7fc1ff;
      background-color: ${Colors.grey};
    }
  }
`;

export default SelectBox;

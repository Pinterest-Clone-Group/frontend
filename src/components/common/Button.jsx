import { Colors } from '../../styles';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ children, btnColor, btnSize, onClick, ...props }) => {
  return (
    <ButtonLayout btnColor={btnColor} btnSize={btnSize} onClick={onClick} {...props}>
      {children}
    </ButtonLayout>
  );
};

const buttonProps = {
  small: {
    padding: '8px 13.5px',
    height: '38px',
  },
  normal: {
    padding: '12px 16px',
    height: '48px',
  },
  btnColor: {
    // background, hover, font-color
    brand: [Colors.brand, Colors.brand2, Colors.white],
    grey: [Colors.grey, Colors.darkgrey, Colors.black],
    facebook: [Colors.facebook, Colors.facebook, Colors.white],
    white: [Colors.white, Colors.white, Colors.black],
    kakao: [Colors.kakao, Colors.kakao, Colors.black],
  },
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnColor: PropTypes.oneOf(['brand', 'grey', 'facebook', 'white', 'kakao']),
  btnSize: PropTypes.oneOf(['small', 'normal']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnColor: 'brand',
  btnSize: 'normal',
};

const ButtonLayout = styled.button`
  padding: ${(props) => buttonProps[props.btnSize].padding};
  height: ${(props) => buttonProps[props.btnSize].height};
  cursor: pointer;
  font-weight: 600;
  border-radius: 36px;
  border: none;
  box-shadow: ${(props) => (props.btnColor === 'white' ? '0px 0px 2px rgba(0, 0, 0, 0.25)' : 'none')};
  color: ${(props) => buttonProps.btnColor[props.btnColor][2]};
  background-color: ${(props) => buttonProps.btnColor[props.btnColor][0]};
  :hover {
    background-color: ${(props) => buttonProps.btnColor[props.btnColor][1]};
  }
`;

export default Button;

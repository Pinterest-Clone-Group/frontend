import Icon from './icons/Icon';
import IconButton from './IconButton';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import useClickAway from '../../hooks/useClickAway';

const Modal = ({ visible, children, width, hasCloseIcon = true, onClose }) => {
  const { ref } = useClickAway(onClose);
  const portalDiv = document.querySelector('#modal-root');
  if (!portalDiv) {
    return null;
  }
  return (
    <>
      {visible &&
        createPortal(
          <Background visible={visible}>
            <ModalBox ref={ref} style={{ width: width + 'px' }}>
              {hasCloseIcon && (
                <CloseIconButtonBox>
                  <IconButton onClick={onClose} icon={<Icon.Close />} />
                </CloseIconButtonBox>
              )}
              {children}
            </ModalBox>
          </Background>,
          portalDiv,
        )}
    </>
  );
};

const Background = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
  min-height: 100vh;
  padding-right: 15vw;
  padding-left: 15vw;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  background-color: white;
  position: relative;
  z-index: 20;
  min-height: 140px;
  min-width: 340px;
  max-width: 748px;
  max-height: 100vh;
  padding: 30px 58px 30px 58px;
  margin: auto;
  border-radius: 30px;
`;

const CloseIconButtonBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px 30px 0 0;
`;

export default Modal;

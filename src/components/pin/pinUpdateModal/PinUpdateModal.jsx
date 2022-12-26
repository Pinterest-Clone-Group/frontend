import Button from '../../common/Button';
import { Colors } from '../../../styles';
import Input from '../../common/Input';
import Label from '../../common/Label';
import Modal from '../../common/Modal';
import TextArea from '../../common/TextArea';
import styled from 'styled-components';

// TODO: pin 등록과의 input,validation 동작이 중복됨을 리팩터링
const PinUpdateModal = ({ visible, onClose, pin }) => {
  return (
    <Modal visible={visible} onClose={onClose} hasCloseIcon={false} width={747}>
      <div style={{ maxHeight: '70vh', overflow: 'auto' }}>
        <Title>이 핀 수정하기</Title>
        <img src={pin.image} width="240px" />
        <InputsBox>
          <InputFlexBox>
            <InputFlexLeftBox>
              <Label>제목</Label>
            </InputFlexLeftBox>
            <InputFlexRightBox>
              <Input type="text" />
            </InputFlexRightBox>
          </InputFlexBox>
          <InputFlexBox>
            <InputFlexLeftBox>
              <Label>설명</Label>
            </InputFlexLeftBox>
            <InputFlexRightBox>
              <TextArea />
            </InputFlexRightBox>
          </InputFlexBox>
          <InputFlexBox>
            <InputFlexLeftBox>
              <Label>링크</Label>
            </InputFlexLeftBox>
            <InputFlexRightBox>
              <Input type="text" />
            </InputFlexRightBox>
          </InputFlexBox>
        </InputsBox>
      </div>
      <br /> <br />
      <ButtonsGridBox>
        <div>
          <Button btnColor="grey" btnSize="small">
            삭제
          </Button>
        </div>
        <div style={{ display: 'flex', gridColumnGap: '16px' }}>
          <Button btnColor="grey" btnSize="small" onClick={onClose}>
            취소
          </Button>
          <Button btnSize="small">저장</Button>
        </div>
      </ButtonsGridBox>
    </Modal>
  );
};

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
`;

const InputsBox = styled.div`
  padding-top: 30px;
`;

const InputFlexBox = styled.div`
  display: flex;
  border-bottom: 1px solid ${Colors.grey};
  justify-content: baseline;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const InputFlexLeftBox = styled.div`
  min-width: 160px;
`;

const InputFlexRightBox = styled.div`
  & > input,
  textarea {
    min-width: 300px;
  }
  & > input {
    height: 15px;
  }
`;

const ButtonsGridBox = styled.div`
  padding-top: 20px;
  margin-right: -15px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${Colors.darkgrey};
`;

export default PinUpdateModal;

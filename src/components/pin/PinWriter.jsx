import Button from '../common/Button';
import ProfileImage from '../common/ProfileImage';
import styled from 'styled-components';

// TODO: 현재 이용자의 글쓴이 팔로우 상태에 따라 팔로우/언팔로우  버튼이 활성화된다.
const PinWriter = ({ pin }) => {
  console.log(pin);
  return (
    <PinWriterLayout>
      <WriterBox>
        <ProfileImage size={50} imageUrl={pin.userImage} />
        <WriterInfoBox>
          <p style={{ fontWeight: '600' }}>{pin.name}</p>
          <p style={{ opacity: 0.7 }}>팔로워 1,555명</p>
        </WriterInfoBox>
      </WriterBox>
      <FollwerButtonBox>
        <Button btnColor="grey">팔로우</Button>
      </FollwerButtonBox>
    </PinWriterLayout>
  );
};

const PinWriterLayout = styled.div`
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: space-between;
`;

const WriterBox = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: 8px;
`;

const WriterInfoBox = styled.div`
  & > p {
    margin: 0;
    font-size: 14px;
  }
  margin-bottom: 6px;
`;

const FollwerButtonBox = styled.div``;

export default PinWriter;

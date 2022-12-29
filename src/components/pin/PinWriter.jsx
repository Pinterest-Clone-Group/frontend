import Button from '../common/Button';
import ProfileImage from '../common/ProfileImage';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

// TODO: 현재 이용자의 글쓴이 팔로우 상태에 따라 팔로우/언팔로우  버튼이 활성화된다.
const PinWriter = ({ pin }) => {
  const navigate = useNavigate();

  return (
    <PinWriterLayout>
      <WriterBox>
        <div onClick={() => navigate('/users/' + pin.userId)}>
          <ProfileImage size={50} imageUrl={pin.userImage} />
        </div>
        <WriterInfoBox>
          <WriterParagraph style={{ fontWeight: '600' }} onClick={() => navigate('/users/' + pin.userId)}>
            {pin.name}
          </WriterParagraph>
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
  & > div > div > img {
    cursor: pointer;
  }
`;

const WriterInfoBox = styled.div`
  & > p {
    margin: 0;
    font-size: 14px;
  }
  margin-bottom: 6px;
`;

const WriterParagraph = styled.p`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const FollwerButtonBox = styled.div``;

export default PinWriter;

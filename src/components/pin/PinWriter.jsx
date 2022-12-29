import Button from '../common/Button';
import ProfileImage from '../common/ProfileImage';
import styled from 'styled-components';

import userApi from '../../apis/userApi';
import { __getFollowingUsers } from '../../redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


const PinWriter = ({ pin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { followings, userInfo } = useSelector((state) => state.userSlice);

  const handleFollowsClick = () => {
    userApi.updateFollows(pin?.userId).then(() => {
      dispatch(__getFollowingUsers({ userId: userInfo.userId }));
    });
  };

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
          <p style={{ opacity: 0.7 }}>팔로워 {followings.length}명</p>

        </WriterInfoBox>
      </WriterBox>
      {userInfo.userId !== pin.userId ? (
        <FollwerButtonBox>
          {followings.some((following) => following.userId === pin.userId) ? (
            <Button btnColor="grey" onClick={handleFollowsClick}>
              언팔로우
            </Button>
          ) : (
            <Button btnColor="brand" onClick={handleFollowsClick}>
              팔로우
            </Button>
          )}
        </FollwerButtonBox>
      ) : null}
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

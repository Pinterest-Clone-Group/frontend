import Button from '../common/Button';
import ProfileImage from '../common/ProfileImage';
import styled from 'styled-components';
import userApi from '../../apis/userApi';
import { __getFollowingUsers } from '../../redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';

// TODO: 현재 이용자의 글쓴이 팔로우 상태에 따라 팔로우/언팔로우  버튼이 활성화된다.
const PinWriter = ({ pin }) => {
  const dispatch = useDispatch();

  const { followings, userInfo } = useSelector((state) => state.userSlice);

  const handleFollowsClick = () => {
    userApi.updateFollows(pin?.userId).then(() => {
      dispatch(__getFollowingUsers({ userId: userInfo.userId }));
    });
  };

  return (
    <PinWriterLayout>
      <WriterBox>
        <ProfileImage size={50} imageUrl={pin.userImage} />
        <WriterInfoBox>
          <p style={{ fontWeight: '600' }}>{pin.name}</p>
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

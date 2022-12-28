import ProfileImage from '../common/ProfileImage';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MyInfoBox = ({ userInfo, onClose }) => {
  const navigate = useNavigate();

  const handleLayoutClick = () => {
    onClose();
    navigate('/users/' + userInfo.userId);
  };

  return (
    <MyInfoBoxLayout onClick={handleLayoutClick}>
      <div>
        <ProfileImage imageUrl={userInfo.image} size={50} />
      </div>
      <div>
        <h3>{userInfo.name}</h3>
        <span>{userInfo.email}</span>
      </div>
    </MyInfoBoxLayout>
  );
};

const MyInfoBoxLayout = styled.div`
  display: flex;
  grid-column-gap: 16px;
  align-items: center;
`;

export default MyInfoBox;

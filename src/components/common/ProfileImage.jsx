import defaultProfile from '../../assets/images/img_default_profile.png';
import styled from 'styled-components';

const ProfileImage = ({ imageUrl, size = 32 }) => {
  const handleImageError = (e) => {
    e.target.src = defaultProfile;
  };
  return (
    <ProfileImageLayout size={size}>
      <img src={imageUrl || defaultProfile} onError={handleImageError} alt="profile" />
    </ProfileImageLayout>
  );
};

const ProfileImageLayout = styled.div`
  border-radius: 100%;
  & > img {
    width: ${(props) => props.size + 'px'};
    height: ${(props) => props.size + 'px'};
    border-radius: 100%;
  }
`;

export default ProfileImage;

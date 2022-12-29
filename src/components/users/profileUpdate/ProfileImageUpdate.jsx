import React, { useRef, useState } from 'react';

import Button from '../../common/Button';
import ProfileImage from '../../common/ProfileImage';
import styled from 'styled-components';
import useS3Upload from '../../../hooks/useS3Upload';
import { __updateUserInfo } from '../../../redux/modules/userSlice';
import { useDispatch } from 'react-redux';

const ProfileImageUpdate = ({ profileImage, userId }) => {
  const [image, setImage] = useState(profileImage);
  const ref = useRef();
  const dispatch = useDispatch();
  const { uploadProfile } = useS3Upload();

  const handleImageChangeClick = () => {
    ref.current.click();
  };

  const handleUploadedImageChange = (e) => {
    const uploadedFile = e.target?.files?.[0];
    uploadProfile(uploadedFile, userId).then((res) => {
      setImage(res.Location), dispatch(__updateUserInfo({ userId: userId, image: res.Location }));
    });

    //TODO: 프로필 이미지 변경 api 붙이기
  };

  return (
    <ProfileImageUpdateLayout>
      <ProfileImageBox>
        <ProfileImage size={90} imageUrl={image} />
        <div style={{ height: '0px', overflow: 'hidden', width: '0px' }}>
          <input
            ref={ref}
            type="file"
            name="fileInput"
            accept="image/jpeg, image/jpg, image/png image/gif"
            onChange={handleUploadedImageChange}
          />
        </div>
      </ProfileImageBox>
      <Button btnColor="grey" btnSize="small" onClick={handleImageChangeClick}>
        변경
      </Button>
    </ProfileImageUpdateLayout>
  );
};

const ProfileImageUpdateLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const ProfileImageBox = styled.div`
  margin: 16px;
`;

export default ProfileImageUpdate;

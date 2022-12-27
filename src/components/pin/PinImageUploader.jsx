import { Colors } from '../../styles';
import IconButton from '../common/IconButton';
import styled from 'styled-components';
import { useRef } from 'react';

const PinImageUploader = ({ image, setImage, setImageFile }) => {
  const imageUploadRef = useRef();

  const handleOpenImageUploadClick = () => {
    if (!image) {
      imageUploadRef.current.click();
    }
  };

  const handleImageDeleteClick = () => {
    const current = imageUploadRef?.current;
    if (!current) {
      return;
    }
    const uploadedFile = current?.files?.[0];
    URL.revokeObjectURL(uploadedFile);
    setImageFile(undefined);
    setImage(undefined);
  };

  const handleUploadedImageChange = ({ target }) => {
    const uploadedFile = target?.files?.[0];
    setImageFile(uploadedFile);
    URL.revokeObjectURL(uploadedFile);
    if (!uploadedFile) {
      return;
    }
    const formData = new FormData();
    formData.append('image', uploadedFile);
    const imageSrc = URL.createObjectURL(uploadedFile);
    setImage(imageSrc);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ height: '0px', overflow: 'hidden', width: '0px' }}>
        <input
          ref={imageUploadRef}
          type="file"
          name="fileInput"
          accept="image/jpeg, image/jpg, image/png image/gif"
          onChange={handleUploadedImageChange}
        />
      </div>
      {image && (
        <IconButton
          onClick={handleImageDeleteClick}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 3,
            backgroundColor: Colors.iconHover,
          }}
          icon={
            <svg
              className="gUZ R19 U9O kVc"
              height="18"
              width="18"
              viewBox="0 0 24 24"
              aria-hidden="true"
              aria-label=""
              role="img"
            >
              <path d="M4.878 22.116A2 2 0 0 0 6.875 24h10.229a2 2 0 0 0 1.995-1.881L20 7H4l.88 15.116zM22 3.5A1.5 1.5 0 0 1 20.5 5h-17a1.5 1.5 0 0 1 0-3h6V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h6A1.5 1.5 0 0 1 22 3.5z"></path>
            </svg>
          }
        />
      )}
      <ImageUploadBox onClick={handleOpenImageUploadClick}>
        {image && (
          <img
            src={image}
            style={{
              position: 'absolute',
              zIndex: 2,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '10px',
            }}
          />
        )}
        {/* TODO: 등록 이미지 미리보기, 등록된 이미지 삭제, 서버에 업로드 구현 */}
        <div>클릭하여 이미지 업로드</div>
        <p>권장사항: 10MB미만의 JPEG 파일</p>
      </ImageUploadBox>
    </div>
  );
};

const ImageUploadBox = styled.div`
  width: 320px;
  padding: 16px;
  background-color: ${Colors.lightgrey};
  border-radius: 6px;
  position: relative;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  & > div {
    width: 100%;
    min-height: 400px;
    border: 1.5px dashed ${Colors.darkgrey};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
  }
  & > p {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    padding-bottom: 30px;
    color: rgba(18, 18, 18, 0.7);
  }
`;

export default PinImageUploader;

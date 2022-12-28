import Button from '../common/Button';
import { Colors } from '../../styles';
import Icon from '../common/icons/Icon';
import IconButton from '../common/IconButton';
import PinUpdateModal from './pinUpdateModal/PinUpdateModal';
import ProfileImage from '../common/ProfileImage';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const PinCard = ({
  id,
  title,
  content,
  imageUrl,
  profileUrl,
  nickname,
  link,
  hasWriterInfo = true,
  isUpdatable = false,
}) => {
  const navigate = useNavigate();
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const handleNavigateDetailPageClick = () => {
    if (!updateModalVisible) {
      navigate('/pins/' + id);
    }
  };
  return (
    <>
      <PinCardLayout onClick={handleNavigateDetailPageClick}>
        <PinCardShadow>
          <Button btnColor="brand" style={{ position: 'absolute', right: '11px', top: '11px' }}>
            저장
          </Button>
          {link && (
            <PinLink
              icon={
                <div style={{ display: 'flex', alignItems: 'center', gridColumnGap: '4px' }}>
                  <Icon.CopyLink width={16} height={16} />
                  <small style={{ fontWeight: '600', marginBottom: '4px' }}>{link}</small>
                </div>
              }
            />
          )}
          <DownloadButtonLayout icon={<Icon.Download width={20} height={20} />} />
          {isUpdatable && (
            <>
              <ModifyButtonLayout
                onClick={(e) => {
                  e.stopPropagation();
                  setUpdateModalVisible(true);
                }}
                icon={<Icon.Write />}
              />
              {updateModalVisible && (
                <PinUpdateModal
                  visible={updateModalVisible}
                  onClose={() => {
                    setUpdateModalVisible(false);
                  }}
                  pinTitle={title}
                  pinContent={content}
                  pinImage={imageUrl}
                  pinId={id}
                />
              )}
            </>
          )}
        </PinCardShadow>
        <img src={imageUrl} />
      </PinCardLayout>
      <PinCardWriterBox>
        {hasWriterInfo && (
          <>
            <ProfileImage imageUrl={profileUrl} />
            <p style={{ marginBottom: '5px' }}>{nickname}</p>
          </>
        )}
      </PinCardWriterBox>
    </>
  );
};

const PinCardLayout = styled.div`
  border-radius: 16px;
  width: 333px;
  position: relative;
  cursor: zoom-in;
  & > img {
    border-radius: 16px;
    width: 333px;
  }
  :hover {
    & > div {
      display: block;
    }
  }
`;

const PinCardShadow = styled.div`
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: rgba(18, 18, 18, 0.5);
`;

const PinCardWriterBox = styled.div`
  display: flex;
  grid-column-gap: 6px;
  align-items: center;
  padding: 5px;
  margin-bottom: 20px;
`;

const DownloadButtonLayout = styled(IconButton)`
  position: absolute;
  right: 12px;
  bottom: 14px;
  background-color: ${Colors.iconHover};
  :hover {
    background-color: ${Colors.darkgrey};
  }
`;

const ModifyButtonLayout = styled(IconButton)`
  position: absolute;
  right: 56px;
  bottom: 14px;
  background-color: ${Colors.iconHover};
  :hover {
    background-color: ${Colors.darkgrey};
  }
`;

const PinLink = styled(IconButton)`
  position: absolute;
  left: 12px;
  bottom: 14px;
  border-radius: 30px;
  background-color: ${Colors.iconHover};
  :hover {
    background-color: ${Colors.darkgrey};
  }
`;

export default PinCard;

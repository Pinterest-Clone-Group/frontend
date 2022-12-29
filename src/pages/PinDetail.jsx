import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/common/Button';
import CommentList from '../components/comment/CommentList';
import CommentUpload from '../components/comment/CommentUpload';
import Icon from '../components/common/icons/Icon';
import IconButton from '../components/common/IconButton';
import PinWriter from '../components/pin/PinWriter';
import { __getLikedPins } from '../redux/modules/userSlice';
import { __getPinDetailById } from '../redux/modules/pinSlice';
import pinApi from '../apis/pinApi';
import styled from 'styled-components';
import { useParams } from 'react-router';

const PinDetail = () => {
  const { id } = useParams();
  const { pin } = useSelector((state) => state.pinSlice);
  const { likedPins, userInfo } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPinDetailById({ id }));
  }, []);

  const handlePutPinLikeClick = () => {
    pinApi.putLike(pin?.pinId).then(() => {
      dispatch(__getLikedPins({ userId: userInfo.userId }));
    });
  };
  return (
    <>
      {pin && likedPins && userInfo && (
        <PinDetailLayout>
          <DetailsBox>
            <DetailsImageBox>
              <img src={pin.image}></img>
            </DetailsImageBox>
            <DetailsContentsBox>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <IconButton icon={<Icon.Download />} />
                </div>
                <div>
                  {likedPins.some((pin) => pin.pinId === parseInt(id)) ? (
                    <Button btnColor="grey" onClick={handlePutPinLikeClick}>
                      즐겨찾기 해제
                    </Button>
                  ) : (
                    <Button onClick={handlePutPinLikeClick}>저장</Button>
                  )}
                </div>
              </div>
              <div></div>
              <DetailMainTextBox>
                <h1>{pin.title}</h1>
                <p>{pin.content}</p>
                <PinWriter pin={pin} userId={userInfo.userId} />
                <CommentList pinId={pin.pinId} />
              </DetailMainTextBox>
            </DetailsContentsBox>
          </DetailsBox>
          <CommentBox>
            <div style={{ width: '50%' }}>&nbsp;</div>
            <div style={{ width: '50%' }}>
              <CommentUpload pinId={pin.pinId} />
            </div>
          </CommentBox>
        </PinDetailLayout>
      )}
    </>
  );
};

const PinDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto 60px auto;
  border-radius: 34px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  max-width: 1015px;
  min-height: 400px;
`;

const DetailsBox = styled.div`
  display: flex;
`;

const DetailsImageBox = styled.div`
  padding: 20px;
  width: 50%;
  height: auto;
  border-radius: 36px;
  & > img {
    width: 100%;
    border-radius: 36px;
    max-height: 1000px;
  }
`;

const DetailsContentsBox = styled.div`
  width: 50%;
  padding: 10px 30px 10px 30px;
  max-height: 800px;
  overflow-y: scroll;
`;

const DetailMainTextBox = styled.div`
  & > h1 {
    margin-bottom: 6px;
  }
  & > p {
    font-size: 14px;
    line-height: 150%;
  }
`;

const CommentBox = styled.div`
  display: flex;
`;

export default PinDetail;

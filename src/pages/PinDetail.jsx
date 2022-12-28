import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/common/Button';
import CommentList from '../components/comment/CommentList';
import CommentUpload from '../components/comment/CommentUpload';
import Icon from '../components/common/icons/Icon';
import IconButton from '../components/common/IconButton';
import PinWriter from '../components/pin/PinWriter';
import { __getPinDetailById } from '../redux/modules/pinSlice';
import styled from 'styled-components';
import { useParams } from 'react-router';

const PinDetail = () => {
  const { id } = useParams();
  const { pin, error } = useSelector((state) => state.pinSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPinDetailById({ id }));
  }, []);

  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  return (
    <>
      {pin && (
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
                  <Button>저장</Button>
                </div>
              </div>
              <div></div>
              <DetailMainTextBox>
                <h1>{pin.title}</h1>
                <p>{pin.content}</p>
                <PinWriter pin={pin} />
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
  width: 50%;
  border-radius: 36px 0px 0px 36px;
  & > img {
    width: 100%;
    border-radius: 36px 0px 0px 36px;
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

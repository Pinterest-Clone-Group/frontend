import Button from '../components/common/Button';
import CommentList from '../components/comment/CommentList';
import CommentUpload from '../components/comment/CommentUpload';
import Icon from '../components/common/icons/Icon';
import IconButton from '../components/common/IconButton';
import PinWriter from '../components/pin/PinWriter';
import React from 'react';
import styled from 'styled-components';

const PinDetail = () => {
  return (
    <PinDetailLayout>
      <DetailsBox>
        <DetailsImageBox>
          <img src="https://i.pinimg.com/564x/da/d6/86/dad686b244af0f43dabd33f27c3119fc.jpg"></img>
        </DetailsImageBox>
        <DetailsContentsBox>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <IconButton icon={<Icon.Download />} />
            </div>
            <div>
              <Button style={{ width: '64px' }}>저장</Button>
            </div>
          </div>
          <div>
            <a href="#">link.com</a>
          </div>
          <DetailMainTextBox>
            <h1>Hoping that you get it Messi deserves it</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more
            </p>
            <PinWriter />
            <CommentList />
          </DetailMainTextBox>
        </DetailsContentsBox>
      </DetailsBox>
      <CommentBox>
        <div style={{ width: '50%' }}>&nbsp;</div>
        <div style={{ width: '50%' }}>
          <CommentUpload />
        </div>
      </CommentBox>
    </PinDetailLayout>
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

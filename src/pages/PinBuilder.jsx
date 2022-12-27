import { useEffect, useState } from 'react';

import Button from '../components/common/Button';
import { Colors } from '../styles';
import PinImageUploader from '../components/pin/PinImageUploader';
import PinInput from '../components/pin/PinInput';
import styled from 'styled-components';

// TODO: 페이지 복잡도 개선을 위한 컴포넌트 분리 고려
const PinBuilder = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImageUrl] = useState();
  const [imageFile, setImageFile] = useState();
  const [isTitleInValid, setTitleIsInvalid] = useState(true);
  const [isContentInvalid, setIsContentInvalid] = useState(true);
  const [isLinkInvalid, setIsLinkInvalid] = useState(true);

  const areInputValuesInValid = () => {
    return !title || isContentInvalid || isTitleInValid || isLinkInvalid;
  };

  // TODO: 핀 등록 api 붙여 기능 구현
  const handleSubmitButtonClick = () => {
    if (areInputValuesInValid()) {
      alert('입력을 확인하세요');
      return;
    }
    alert('등록완료');
    imageFile;
  };

  const changeLinkInvalidStateByInput = () => {
    if (link === '') {
      setIsLinkInvalid(false);
      return;
    }
    if (link.match(/(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi)) {
      setIsLinkInvalid(false);
      return;
    }
    setIsLinkInvalid(true);
  };

  useEffect(() => {
    changeLinkInvalidStateByInput();
  }, [link]);

  return (
    <PinBuilderLayout>
      <PinBuilderBox>
        <PinBuilderHeaderBox>
          <div>&nbsp;</div>
          <Button btnSize={'small'} onClick={handleSubmitButtonClick}>
            저장
          </Button>
        </PinBuilderHeaderBox>
        <PinBuilderContentsBox>
          <PinImageUploader setImage={setImageUrl} setImageFile={setImageFile} image={imageUrl} />
          <PinSubmitBox>
            <PinInput
              style={{ fontSize: '36px', fontWeight: '700' }}
              placeholder="제목 추가"
              subDescription="처음 40자는 일반적으로 피드에서 볼 수 있습니다."
              warningDescription="저런! 제목이 너무 깁니다. 길이를 조금 줄여보세요."
              value={title}
              maxSize={40}
              setValue={({ target }) => setTitle(target.value)}
              isValueInvalid={isTitleInValid}
              setIsValueInvalid={setTitleIsInvalid}
            />
            <PinInput
              inputType="textarea"
              placeholder="사람들에게 회원님의 핀애 대해 설명해 보세요"
              subDescription="사람들은 핀을 클릭하면 대개 처음 50글자를 읽습니다."
              warningDescription="저런! 설명이 너무 깁니다. 길이를 조금 줄여보세요."
              value={content}
              maxSize={500}
              setValue={({ target }) => setContent(target.value)}
              isValueInvalid={isContentInvalid}
              setIsValueInvalid={setIsContentInvalid}
            />
            <PinInput
              style={{ marginTop: '80px' }}
              placeholder="랜딩페이지 링크 추가"
              subDescription=" "
              warningDescription="유효한 URL이 아닙니다."
              value={link}
              setValue={({ target }) => setLink(target.value)}
              isValueInvalid={isLinkInvalid}
            />
          </PinSubmitBox>
        </PinBuilderContentsBox>
      </PinBuilderBox>
    </PinBuilderLayout>
  );
};

const PinBuilderLayout = styled.div`
  padding-top: 60px;
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.grey};
`;

const PinBuilderBox = styled.div`
  width: 879px;
  margin: 0 auto 0 auto;
  background-color: white;
  border-radius: 20px;
`;

const PinBuilderHeaderBox = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

const PinBuilderContentsBox = styled.div`
  padding: 0 60px 60px 60px;
  display: flex;
  grid-column-gap: 30px;
`;

const PinSubmitBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-row-gap: 60px;
  width: 100%;
  margin-top: 30px;
`;

export default PinBuilder;

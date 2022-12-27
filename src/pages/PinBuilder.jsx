import Button from '../components/common/Button';
import { Colors } from '../styles';
import { PIN_VALIDATION } from '../constants/inputValidation';
import PinImageUploader from '../components/pin/PinImageUploader';
import PinInput from '../components/pin/PinInput';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useState } from 'react';

// TODO: 페이지 복잡도 개선을 위한 컴포넌트 분리 고려
const PinBuilder = () => {
  const [imageUrl, setImageUrl] = useState();
  const [imageFile, setImageFile] = useState();

  const [title, titleValid, handleChangeTitle] = useInput('', PIN_VALIDATION.title);
  const [content, contentValid, handleChangeContent] = useInput('', PIN_VALIDATION.content);
  const [link, linkValid, handleChangeLink] = useInput('', PIN_VALIDATION.link);

  const areInputValuesInValid = () => {
    return !title || !contentValid.isOk || !titleValid.isOk || !linkValid.isOk;
  };

  // TODO: 핀 등록 api 붙여 기능 구현
  const handleSubmitButtonClick = () => {
    if (!imageFile) {
      alert('이미지를 필수로 등록해야 합니다.');
      return;
    }
    if (areInputValuesInValid()) {
      alert('입력을 확인하세요');
      return;
    }
    alert('등록완료');
    imageFile;
  };

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
              value={title}
              maxSize={40}
              setValue={handleChangeTitle}
              isValueInvalid={titleValid}
            />
            <PinInput
              inputType="textarea"
              placeholder="사람들에게 회원님의 핀애 대해 설명해 보세요"
              setValue={handleChangeContent}
              isValueInvalid={contentValid}
              value={content}
              maxSize={500}
            />
            <PinInput
              style={{ marginTop: '80px' }}
              placeholder="랜딩페이지 링크 추가"
              value={link}
              setValue={handleChangeLink}
              isValueInvalid={linkValid}
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

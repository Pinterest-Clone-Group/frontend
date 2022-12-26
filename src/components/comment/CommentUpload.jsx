import { Colors } from '../../styles';
import Icon from '../common/icons/Icon';
import IconButton from '../common/IconButton';
import ProfileImage from '../common/ProfileImage';
import styled from 'styled-components';
import { useRef } from 'react';

const CommentUpload = () => {
  const commentRef = useRef();

  const handleCommentInputBoxClick = () => {
    const style = commentRef.current.style;
    if (style.backgroundColor === 'white') {
      style.backgroundColor = Colors.grey;
      return;
    }
    style.backgroundColor = 'white';
  };

  return (
    <CommentUploadLayout>
      <ProfileImage size={50} />
      <CommentInputBox ref={commentRef} onClick={handleCommentInputBoxClick}>
        <SubmitButton icon={<Icon.Submit />} />
        <CommentInput placeholder="댓글 추가" type="text" />
      </CommentInputBox>
    </CommentUploadLayout>
  );
};

const CommentUploadLayout = styled.div`
  display: flex;
  grid-column-gap: 10px;
  padding: 30px 60px 30px 10px;
`;

const CommentInputBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: 0 solid;
  padding-left: 15px;
  padding-right: 15px;
  border: 1.5px solid ${Colors.grey};
  background-color: ${Colors.grey};
`;

const CommentInput = styled.input`
  height: 48px;
  min-width: 300px;
  border-radius: 24px;
  border: 0 solid;
  padding-left: 8px;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  cursor: pointer;
  :focus {
    cursor: text;
    text-decoration: none;
    border: none;
    outline: 0 solid;
  }
`;

const SubmitButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
  background-color: ${Colors.brand};
  :hover {
    background-color: ${Colors.brand2};
  }
`;
export default CommentUpload;

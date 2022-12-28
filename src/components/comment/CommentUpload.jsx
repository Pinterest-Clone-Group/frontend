import { Colors } from '../../styles';
import CommentInput from './CommentInput';
import CommentInputBox from './CommentInputBox';
import Icon from '../common/icons/Icon';
import IconButton from '../common/IconButton';
import ProfileImage from '../common/ProfileImage';
import { __getCommentList } from '../../redux/modules/commentSlice';
import commentApi from '../../apis/commentApi';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CommentUpload = ({ pinId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const handleCommentSubmitClick = () => {
    if (!comment) {
      return;
    }
    commentApi.register({ pinId, comment }).then(() => {
      setComment('');
      dispatch(__getCommentList({ pinId }));
    });
  };

  return (
    <CommentUploadLayout>
      <ProfileImage size={50} />
      <CommentInputBox>
        <SubmitButton icon={<Icon.Submit />} onClick={handleCommentSubmitClick} />
        <CommentInput
          placeholder="댓글 추가"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </CommentInputBox>
    </CommentUploadLayout>
  );
};

const CommentUploadLayout = styled.div`
  display: flex;
  grid-column-gap: 10px;
  padding: 30px 60px 30px 10px;
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

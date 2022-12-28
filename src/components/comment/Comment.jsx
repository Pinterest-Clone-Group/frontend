import { __deleteComment, __getCommentList, __updateComment } from '../../redux/modules/commentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Button from '../common/Button';
import CommentInput from './CommentInput';
import CommentInputBox from './CommentInputBox';
import Icon from '../common/icons/Icon';
import IconButton from '../common/IconButton';
import { Link } from 'react-router-dom';
import ParentCommenterInfo from './ParentCommenterInfo';
import ProfileImage from '../common/ProfileImage';
import SelectBox from '../common/SelectBox';
import commentApi from '../../apis/commentApi';
import { getTimeForToday } from '../../utils/dateHandler';
import styled from 'styled-components';

// TODO: 드럽게 복잡하고 재사용성이 안좋은 현재 상태를 나중에 잘 재구성해보자!
const Comment = ({ pinId, commentId, parentCommentId, name, image, comment, like, createdAt, userId }) => {
  const { userInfo } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [modifyBoxVisible, setModifyBoxVisible] = useState(false);
  const [updateInputVisible, setUpdateInputVisible] = useState(false);
  const [replyVisible, setReplyVisible] = useState(false);
  const [currentComment, setCurrentComment] = useState(comment);
  const [replyComment, setReplyComment] = useState('');
  const handleCommentDeleteClick = () => {
    dispatch(__deleteComment({ commentId }));
  };

  const handleCommentUpdateClick = () => {
    if (checkCommentUpdatable()) {
      dispatch(__updateComment({ commentId, comment: currentComment }));
      setModifyBoxVisible(false);
      setUpdateInputVisible(false);
    }
  };

  const checkCommentUpdatable = () => {
    return currentComment && comment !== currentComment;
  };

  const handleReplySubmitClick = () => {
    if (!replyComment) {
      return;
    }
    commentApi.register({ pinId, comment: replyComment, parentCommentId: commentId }).then(() => {
      setModifyBoxVisible(false);
      setReplyVisible(false);
      dispatch(__getCommentList({ pinId }));
    });
  };

  useEffect(() => {
    setCurrentComment(comment);
  }, [updateInputVisible]);

  return (
    <CommentLayout>
      {updateInputVisible && (
        <>
          <CommentInputBox style={{ width: '95%', backgroundColor: 'white' }} hasClickEffect={false}>
            <CommentInput
              placeholder="댓글 수정"
              type="text"
              value={currentComment}
              onChange={(e) => setCurrentComment(e.target.value)}
            />
          </CommentInputBox>
          <ModifyButtonFlexBox>
            <Button
              btnColor="grey"
              btnSize="small"
              onClick={() => {
                setUpdateInputVisible(false);
                setModifyBoxVisible(false);
              }}
            >
              취소
            </Button>
            <Button
              btnSize="small"
              btnColor={checkCommentUpdatable() ? 'brand' : 'grey'}
              onClick={handleCommentUpdateClick}
            >
              저장
            </Button>
          </ModifyButtonFlexBox>
        </>
      )}
      {!updateInputVisible && (
        <div style={{ marginLeft: parentCommentId ? '20px' : 0 }}>
          <CommentMainBox>
            <ProfileImage imageUrl={image} />
            <p>
              <span style={{ fontWeight: '700' }}>{name}&nbsp;</span>
              <ParentCommenterInfo parentCommentId={parentCommentId} commentId={commentId} />
              {comment}
            </p>
          </CommentMainBox>
          <CommentSubBox>
            <div>{getTimeForToday(createdAt)}</div>
            <div>
              <CommentIconButton icon={<Icon.Like width={11} height={11} />} />
              {like}
            </div>
            <div>
              <ReplyLink style={{ fontSize: '12px' }} to="" onClick={() => setReplyVisible(true)}>
                답변
              </ReplyLink>
            </div>
            {userInfo?.userId === userId && (
              <div>
                <CommentIconButton
                  onClick={() => setModifyBoxVisible(true)}
                  icon={<Icon.SelectMoreInfo width={11} height={11} fill={'rgba(18, 18, 18, 0.7)'} />}
                />
                <SelectBox visible={modifyBoxVisible} onClose={() => setModifyBoxVisible(false)}>
                  <CommentModifiyLink onClick={() => setUpdateInputVisible(true)}>수정</CommentModifiyLink>
                  <CommentModifiyLink onClick={handleCommentDeleteClick}>삭제</CommentModifiyLink>
                </SelectBox>
              </div>
            )}
          </CommentSubBox>
          {replyVisible && (
            <>
              <CommentInputBox style={{ width: '95%', backgroundColor: 'white' }} hasClickEffect={false}>
                <CommentInput
                  placeholder="댓글 추가"
                  type="text"
                  value={replyComment}
                  onChange={(e) => setReplyComment(e.target.value)}
                />
              </CommentInputBox>
              <ModifyButtonFlexBox>
                <Button
                  btnColor="grey"
                  btnSize="small"
                  onClick={() => {
                    setReplyVisible(false);
                    setModifyBoxVisible(false);
                  }}
                >
                  취소
                </Button>
                <Button btnSize="small" onClick={handleReplySubmitClick}>
                  저장
                </Button>
              </ModifyButtonFlexBox>
            </>
          )}
        </div>
      )}
    </CommentLayout>
  );
};

const CommentLayout = styled.div`
  padding: 5px 0;
`;

const CommentMainBox = styled.div`
  display: flex;
  grid-column-gap: 8px;
  align-items: flex-start;
`;

const CommentSubBox = styled.div`
  display: flex;
  grid-column-gap: 14px;
  letter-spacing: 0;
  padding: 6px 0 10px 10px;
  font-size: 12px;
  color: rgba(18, 18, 18, 0.7);
`;

const CommentModifiyLink = styled.div``;

const CommentIconButton = styled(IconButton)`
  display: inline;
  width: 11px;
  height: 11px;
  padding: 6px;
  margin-top: -5px;
`;

const ModifyButtonFlexBox = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column-gap: 8px;
  margin-top: 20px;
`;

const ReplyLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
`;

export default Comment;

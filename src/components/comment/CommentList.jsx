import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';
import { __getCommentList } from '../../redux/modules/commentSlice';
import styled from 'styled-components';
import { useEffect } from 'react';

const CommentList = ({ pinId }) => {
  const dispatch = useDispatch();
  const { comments, isLoading, error } = useSelector((state) => state.commentSlice);

  useEffect(() => {
    dispatch(__getCommentList({ pinId }));
  }, [pinId]);

  return (
    <CommentListLayout>
      {isLoading && <div>...loading</div>}
      {error && <div>...error</div>}
      {comments && (
        <>
          <h4>댓글 {comments.length}개</h4>
          {comments.map((comment) => (
            <Comment key={comment.commentId} {...comment} />
          ))}
        </>
      )}
    </CommentListLayout>
  );
};

const CommentListLayout = styled.div`
  & > h4 {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export default CommentList;

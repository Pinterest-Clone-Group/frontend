import Comment from './Comment';
import styled from 'styled-components';

const CommentList = () => {
  return (
    <CommentListLayout>
      <h4>댓글 132개</h4>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
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

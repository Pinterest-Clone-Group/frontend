import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ParentCommenterInfo = ({ parentCommentId, commentId }) => {
  const { comments } = useSelector((state) => state.commentSlice);
  if (!parentCommentId || parentCommentId === commentId) {
    return <></>;
  }
  return (
    <ParentCommenterInfoLayout>
      {<span>@{comments?.find((comment) => comment.commentId === parentCommentId)?.name}&nbsp;</span>}
    </ParentCommenterInfoLayout>
  );
};

const ParentCommenterInfoLayout = styled.span`
  color: rgba(13, 13, 13, 0.6);
  font-weight: 700;
`;

export default ParentCommenterInfo;

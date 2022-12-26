import Icon from '../common/icons/Icon';
import ProfileImage from '../common/ProfileImage';
import styled from 'styled-components';

const Comment = () => {
  return (
    <div>
      <CommentMainBox>
        <ProfileImage />
        <p>
          <span style={{ fontWeight: '700' }}>username&nbsp;</span>
          I’m so happy argentina 🇦🇷 won the world cup messi and his teammates deserves it
        </p>
      </CommentMainBox>
      <CommentSubBox>
        <div>14분 전</div>
        <div>
          <Icon.Like width={11} height={11} /> 145
        </div>
      </CommentSubBox>
    </div>
  );
};

const CommentMainBox = styled.div`
  display: flex;
  grid-column-gap: 8px;
  align-items: flex-start;
`;

const CommentSubBox = styled.div`
  display: flex;
  grid-column-gap: 14px;
  letter-spacing: 0;
  padding: 10px 0 10px 36px;
  font-size: 12px;
  color: rgba(18, 18, 18, 0.7);
`;

export default Comment;

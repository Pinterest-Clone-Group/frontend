import styled from 'styled-components';

const CommentInput = ({ ...props }) => {
  return <CommentInputLayout {...props} />;
};

const CommentInputLayout = styled.input`
  height: 48px;
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

export default CommentInput;

import React, { useRef } from 'react';

import { Colors } from '../../styles';
import styled from 'styled-components';

const CommentInputBox = ({ children, hasClickEffect = true, ...props }) => {
  const ref = useRef();

  const handleCommentInputBoxClick = () => {
    const style = ref.current.style;
    if (style.backgroundColor === 'white') {
      style.backgroundColor = Colors.grey;
      return;
    }
    style.backgroundColor = 'white';
  };

  return (
    <CommentInputLayout ref={ref} onClick={() => hasClickEffect && handleCommentInputBoxClick()} {...props}>
      {children}
    </CommentInputLayout>
  );
};

const CommentInputLayout = styled.div`
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

export default CommentInputBox;

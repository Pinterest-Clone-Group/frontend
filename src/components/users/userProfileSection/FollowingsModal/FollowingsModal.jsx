import React, { useState } from 'react';

import FollowingsModalLayout from './FollowingsModalLayout';

import styled from 'styled-components';
import Modal from '../../../common/Modal';

const FollowingsModal = (args) => {
  const [visible, setVisible] = useState(false);

  const followingNumber = 1;

  return (
    <div>
      <FollowingButton onClick={() => setVisible(true)}>팔로잉 {followingNumber}명</FollowingButton>
      <Modal visible={visible} width="400" onClose={() => setVisible(false)} {...args}>
        <FollowingsModalLayout />
      </Modal>
    </div>
  );
};

const FollowingButton = styled.button`
  height: 38px;
  cursor: pointer;
  border-radius: 36px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
`;

export default FollowingsModal;

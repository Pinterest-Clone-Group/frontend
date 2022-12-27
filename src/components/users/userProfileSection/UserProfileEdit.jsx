import React from 'react';

import Button from '../../common/Button';

// import styled from 'styled-components';
// import { Colors } from '../../../styles';

const UserProfileEdit = () => {
  return (
    <div>
      <Button btnColor="grey" btnSize="small">
        프로필 수정
      </Button>
    </div>
  );
};

// const UserProfileLayout = styled.div`
//   width: 100%;
//   height: 300px;
//   border: 2px solid;
//   border-color: black;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 32px;
// `;

// const UserNameBox = styled.h1`
//   color: ${Colors.black};
//   padding-left: 16px;
//   padding-right: 16px;
//   text-align: center;
//   display: block;
//   margin: 5px 0px 5px 0px;
// `;

// const UserEmail = styled.span`
//   color: ${Colors.darkgrey};
//   padding-left: 16px;
//   padding-right: 16px;
//   text-align: center;
//   display: block;
//   font-size: 14px;
//   margin: 5px 0px 5px 0px;
// `;

export default UserProfileEdit;

import React from 'react';

import styled from 'styled-components';

const MainPageImageCard = ({ url }) => {
  return (
    <div>
      <MainPageImageCardBox src={url} />
    </div>
  );
};

const MainPageImageCardBox = styled.img`
  width: 236px;
  height: 350px;
  border-radius: 10px;
  margin: 10px 0px;
`;

export default MainPageImageCard;

import React from 'react';

import MainPageImageCardBlock from './MainPageImageCardBlock';

import styled from 'styled-components';

const MainPageImageCardSinglePage = () => {
  const spaceArrs = [1, 2, 3, 2, 1];

  const ImageBlocks = spaceArrs.map((spaceArr) => <MainPageImageCardBlock space={spaceArr} key={spaceArr} />);

  console.log(ImageBlocks);
  return <SinglePageLayout>{ImageBlocks}</SinglePageLayout>;
};

const SinglePageLayout = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default MainPageImageCardSinglePage;

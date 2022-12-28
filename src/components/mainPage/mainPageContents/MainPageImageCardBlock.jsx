import React from 'react';
import styled from 'styled-components';

import MainPageImageCard from './MainPageImageCard';

const MainPageImageCardBlock = () => {
  const arrs = [
    { id: 1, url: 'https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg' },
    { id: 2, url: 'https://i.pinimg.com/236x/51/97/90/5197905f29a3bf796150506e12cb234c.jpg' },
    { id: 3, url: 'https://i.pinimg.com/236x/9e/42/22/9e422240981aebcbe435c05c26f4bec3.jpg' },
    { id: 4, url: 'https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg' },
  ];

  const ImageCards = arrs.map((arr) => <MainPageImageCard url={arr.url} key={arr.id} />);
  return (
    <ImageCardsLayout>
      <VoidSpace>space</VoidSpace>
      {ImageCards}
    </ImageCardsLayout>
  );
};

const ImageCardsLayout = styled.div`
  width: 252px;
  height: 2230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VoidSpace = styled.div`
  width: 100%;
`;

export default MainPageImageCardBlock;

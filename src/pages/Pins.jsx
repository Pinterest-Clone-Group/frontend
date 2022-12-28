import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import PinCard from '../components/pin/PinCard';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: 임시 UI구성동작을 api로 대체
function getItems(nextGroupKey, count) {
  const navigate = useNavigate();

  const isToken = Boolean(localStorage.getItem('accessToken'));

  useEffect(() => {
    // 로그인한 상태인 경우에만!
    if (isToken !== true) {
      navigate('/');
      window.location.reload();
    }
  }, []);

  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

const Item = ({ num }) => (
  <div>
    <PinCard
      imageUrl={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`}
      nickname={'nickname'}
    />
  </div>
);

export default function App() {
  const [items, setItems] = useState(() => getItems(0, 10));
  return (
    <PinsLayout>
      <MasonryInfiniteGrid
        gap={3}
        onRequestAppend={(e) => {
          const nextGroupKey = (+e.groupKey || 0) + 1;
          setItems([...items, ...getItems(nextGroupKey, 10)]);
        }}
      >
        {items.map((item) => (
          <Item data-grid-groupkey={item.groupKey} key={item.key} num={item.key} />
        ))}
      </MasonryInfiniteGrid>
    </PinsLayout>
  );
}

const PinsLayout = styled.div`
  padding: 30px;
`;

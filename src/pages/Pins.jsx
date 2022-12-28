import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import PinCard from '../components/pin/PinCard';
import { __getPinList } from '../redux/modules/pinSlice';
import pinApi from '../apis/pinApi';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

const Item = ({ pin }) => (
  <div>
    <PinCard id={pin.pinId} imageUrl={pin.image} nickname={pin.name} profileUrl={pin.userImage} />
  </div>
);

// TODO: 이미지 lazyloading 고려
export default function App() {
  const { pins, isLoading, error } = useSelector((state) => state.pinSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPinList({ api: pinApi.getAll }));
  }, []);

  const [items, setItems] = useState(() => getItems(0, 10));
  if (isLoading) {
    return <div>...loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  return (
    <PinsLayout>
      <MasonryInfiniteGrid
        gap={3}
        onRequestAppend={(e) => {
          const nextGroupKey = (+e.groupKey || 0) + 1;
          if (nextGroupKey >= parseInt(pins.length / 10)) {
            return;
          }
          setItems([...items, ...getItems(nextGroupKey, 10)]);
        }}
      >
        {items.map((item) => (
          <Item data-grid-groupkey={item.groupKey} key={item.key} pin={pins[item.key]} />
        ))}
      </MasonryInfiniteGrid>
    </PinsLayout>
  );
}

const PinsLayout = styled.div`
  padding: 30px;
`;

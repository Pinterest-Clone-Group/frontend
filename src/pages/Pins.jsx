import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import PinCard from '../components/pin/PinCard';
import { __getPinList } from '../redux/modules/pinSlice';
import pinApi from '../apis/pinApi';
import styled from 'styled-components';

export function getItems(nextGroupKey, count) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

export const Item = ({ pin, hasWriter, isUpdatable = false }) => (
  <div>
    <PinCard
      id={pin.pinId}
      title={pin.title}
      imageUrl={pin.image}
      nickname={pin.name}
      profileUrl={pin.userImage}
      hasWriterInfo={hasWriter}
      isUpdatable={isUpdatable}
    />
  </div>
);

// TODO: 이미지 lazyloading 고려
export function App() {
  const { pins, isLoading, error } = useSelector((state) => state.pinSlice);
  console.log(pins, isLoading, error);
  const [travelLastItem, setTravelLastItem] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPinList({ api: pinApi.getAll }));
  }, []);
  const [items, setItems] = useState();
  useEffect(() => {
    if (pins) {
      setItems(() => getItems(0, Math.min(10, pins.length)));
    }
  }, [pins]);

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <PinsLayout>
      {items && (
        <MasonryInfiniteGrid
          gap={3}
          onRequestAppend={(e) => {
            if (travelLastItem) {
              return;
            }
            const nextGroupKey = (+e.groupKey || 0) + 1;
            if (nextGroupKey * 10 > parseInt(pins.length)) {
              setTravelLastItem(true);
              return;
            }
            setItems([...items, ...getItems(nextGroupKey, Math.min(10))]);
          }}
        >
          {items.map(
            (item) =>
              pins[item.key] && (
                <Item data-grid-groupkey={item.groupKey} key={item.key} pin={{ ...pins[item.key] }} hasWriter={true} />
              ),
          )}
        </MasonryInfiniteGrid>
      )}
    </PinsLayout>
  );
}

const PinsLayout = styled.div`
  padding: 30px;
`;

export default App;

import { Item, getItems } from '../../../../pages/Pins';
import React, { useEffect, useState } from 'react';

import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import styled from 'styled-components';
import userApi from '../../../../apis/userApi';

const UserPinCardsList = ({ isUserCreatedPin, userId }) => {
  const [likedPins, setLikedPins] = useState([]);
  const [uploadedPins, setUploadedPins] = useState([]);
  const [currentPins, setCurrentPins] = useState([]);
  const [items, setItems] = useState();
  const [travelLastItem, setTravelLastItem] = useState(false);
  useEffect(() => {
    userApi.getLikedPinsByUserId(userId).then((res) => setLikedPins(res.data.data));
  }, []);

  useEffect(() => {
    userApi.getPinsMadeByUser(userId).then((res) => setUploadedPins(res.data.data));
  }, []);

  useEffect(() => {
    if (isUserCreatedPin) {
      setCurrentPins(uploadedPins);
      return;
    }
    setCurrentPins(likedPins);
  }, [isUserCreatedPin]);

  useEffect(() => {
    if (currentPins) {
      setItems(() => getItems(0, currentPins.length));
    }
  }, [currentPins]);

  return (
    <UserPinCardsListsLayout>
      {items && (
        <MasonryInfiniteGrid
          gap={3}
          onRequestAppend={(e) => {
            if (travelLastItem) {
              return;
            }
            const nextGroupKey = (+e.groupKey || 0) + 1;
            if (nextGroupKey * 10 > parseInt(currentPins.length)) {
              setTravelLastItem(true);
              return;
            }
            setItems([...items, ...getItems(nextGroupKey, Math.min(10))]);
          }}
        >
          {items.map(
            (item) =>
              currentPins[item.key] && (
                <Item
                  data-grid-groupkey={item.groupKey}
                  key={item.key}
                  pin={{ ...currentPins[item.key] }}
                  hasWriter={false}
                />
              ),
          )}
        </MasonryInfiniteGrid>
      )}
    </UserPinCardsListsLayout>
  );
};

const UserPinCardsListsLayout = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export default UserPinCardsList;

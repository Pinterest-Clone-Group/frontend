import { Colors } from '../../styles';
import CommentInput from '../comment/CommentInput';
import CommentInputBox from '../comment/CommentInputBox';
import Icon from '../common/icons/Icon';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PinSearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();
  const handleSubmitKeyPress = (e) => {
    if (e.charCode === 13 && searchKeyword) {
      navigate('/pins?searchKeyword=' + searchKeyword);
    }
  };
  return (
    <PinSearchBoxLayout>
      <CommentInputBox hasClickEffect={false} style={{ backgroundColor: Colors.grey }}>
        <Icon.Search fill={'rgba(13,13,13,0.6)'} width={13} height={13} />
        <CommentInput
          placeholder="핀 검색"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyPress={handleSubmitKeyPress}
          style={{ width: '90%' }}
        />
      </CommentInputBox>
    </PinSearchBoxLayout>
  );
};

const PinSearchBoxLayout = styled.div`
  flex: 1;
  margin: 0 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default PinSearchBox;

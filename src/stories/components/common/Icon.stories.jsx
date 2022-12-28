import { Colors } from '../../../styles';
import Icon from '../../../components/common/icons/Icon';

export default {
  title: 'components/common/Icons',
  component: Icon,
};

export const Default = () => {
  return (
    <div style={{ display: 'flex', gridColumnGap: '16px', gridRowGap: '16px' }}>
      <Icon.Alert fill={Colors.darkgrey} />
      <Icon.Close />
      <Icon.CopyLink />
      <Icon.Download />
      <Icon.Like />
      <Icon.Message />
      <Icon.More />
      <Icon.Search />
      <Icon.ValidationWarning />
      <Icon.SelectMoreInfo />
    </div>
  );
};

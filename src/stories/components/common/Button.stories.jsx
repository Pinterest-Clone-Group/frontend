import Button from '../../../components/common/Button';

export default {
  title: 'components/common/Button',
  component: Button,
};

export const Default = (args) => {
  return (
    <div style={{ width: '500px' }}>
      <Button {...args}>회원가입</Button>
    </div>
  );
};

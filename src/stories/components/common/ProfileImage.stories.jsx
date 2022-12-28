import ProfileImage from '../../../components/common/ProfileImage';

export default {
  title: 'components/common/ProfileImage',
  component: ProfileImage,
  argTypes: {
    imageUrl: {
      defaultValue: 'https://avatars.githubusercontent.com/u/76927397?v=4',
      options: ['https://avatars.githubusercontent.com/u/76927397?v=4', 'invalid'],
      control: { type: 'radio' },
    },
    size: {
      defaultValue: 32,
      options: [32, 48, 76],
      control: { type: 'radio' },
    },
  },
};

export const Default = (args) => {
  return (
    <div>
      <ProfileImage {...args} />
    </div>
  );
};

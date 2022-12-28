import Modal from '../../../components/common/Modal';
import { useState } from 'react';

export default {
  title: 'components/common/Modal',
  component: Modal,
  argTypes: {
    width: {
      defaultValue: 200,
      options: [200, 400, 600, 740],
      control: { type: 'radio' },
    },
    hasCloseIcon: {
      defaultValue: true,
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export const Default = (args) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>click!</button>
      <Modal visible={visible} onClose={() => setVisible(false)} {...args}>
        모달모달
      </Modal>
    </div>
  );
};

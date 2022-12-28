export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withProvider = (StoryFn) => {
  return (
    <>
      <StoryFn />
      <div id="modal-root"></div>
    </>
  );
};

export const decorators = [withProvider];

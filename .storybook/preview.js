/** @type { import('@storybook/react').Preview } */
const preview = {
  args: { theme: 'light' },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    globals: {
      theme: 'light',
    },
  },
};

export default preview;

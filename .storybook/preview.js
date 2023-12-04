// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;

import { ThemeProvider } from '../src/ThemeProvider';
import { defaultTheme } from '../src/theme';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider externalTheme={defaultTheme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

const preview = {
  decorators: [withThemeProvider],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

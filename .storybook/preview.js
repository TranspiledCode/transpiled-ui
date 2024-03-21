import { ThemeProvider } from '../src/ThemeProvider';
import { defaultTheme } from '../src/theme';

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={defaultTheme}>
    <Story {...context} />
  </ThemeProvider>
);

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

import ScrollToTop from '../ScrollToTop'; // Adjust the path as needed
import { ThemeProvider } from '../ThemeProvider';
import { theme } from '../theme';

export default {
  component: ScrollToTop,
  title: 'Components/ScrollToTop',
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    iconColor: { control: 'color' },
    hoverBackgroundColor: { control: 'color' },
    hoverIconColor: { control: 'color' },
    shadowColor: { control: 'color' },
  },
};

export const Default = {
  args: {},
};

export const UserProps = {
  args: {
    backgroundColor: '#f6b800',
    iconColor: '#fff',
    hoverBackgroundColor: '#dbdbdb',
    hoverIconColor: '#000',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
  },
};

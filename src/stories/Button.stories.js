import { Button } from './Button';

export default {
  component: Button,
  title: 'Example/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export const Default = {
  args: {
    label: 'Button',
  },
};

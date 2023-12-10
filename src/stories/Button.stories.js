import Button from '../components/Button';

export default {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      name: 'background color',
      description: 'background color of the button',
    },
    color: {
      control: 'color',
      name: 'text color',
      description: 'text color of the button',
    },
    border: {
      control: 'text',
      name: 'border',
      description: 'border of the button',
    },
    hoverColor: {
      control: 'color',
      name: 'hover color',
      description: 'hover color of the button',
    },
    ariaLabel: {
      control: 'text',
      name: 'aria-label',
      description: 'aria-label of the button',
    },
    children: {
      control: 'text',
      name: 'children',
      description: 'button text',
    },
  },
  args: {
    backgroundColor: '#000',
    color: '#fff',
    ariaLabel: 'button',
    children: 'Click Me!',
    hoverColor: '#333',
    border: 'none',
  },
};

export const Primary = {
  args: {
    backgroundColor: '#000',
    color: '#fff',
    ariaLabel: 'button',
    children: 'Click me!',
  },
};

export const Seconday = {
  args: {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #000',
    ariaLabel: 'button',
    children: 'Click me!',
    hoverColor: '#eee',
  },
};

export const Shadow = {
  args: {
    backgroundColor: '#fff',
    color: '#000',
    ariaLabel: 'button',
    children: 'Click me!',
    hoverColor: '#eee',
  },
};

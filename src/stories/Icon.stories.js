import React from 'react';
import Icon from '../components/Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'text',
      defaultValue: 'coffee',
    },
    size: {
      control: { type: 'select', options: ['1x', '2x', '3x', '4x'] },
      defaultValue: '2x',
    },
    iconType: {
      control: { type: 'select', options: ['solid', 'brand'] },
      defaultValue: 'solid',
    },
    url: {
      control: 'text',
    },
    ariaLabel: {
      control: 'text',
      defaultValue: 'Icon',
    },
  },
};
const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: 'coffee',
  size: '1x',
  iconType: 'solid',
  ariaLabel: 'Icon',
};

export const Brand = Template.bind({});
Brand.args = {
  iconName: 'google',
  size: '2x',
  iconType: 'brand',
  ariaLabel: 'Icon',
};

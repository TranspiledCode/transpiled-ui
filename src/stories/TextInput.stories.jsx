// TextInput.stories.js
import React from 'react';
import TextInput from '../components/TextInput';

export default {
  title: 'Example/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    type: { control: 'text' },
    fontSize: { control: 'number' },
    clearable: { control: 'boolean' },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Username',
  type: 'text',
  clearable: true,
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Enter your password',
  type: 'password',
  fontSize: 14,
  clearable: true,
};

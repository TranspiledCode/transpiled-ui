// TextInput.stories.js
import React from 'react';
import TextInput from '../components/TextInput'; // Update the import path accordingly

export default {
  title: 'Example/TextInput',
  component: TextInput,
  argTypes: {
    placeholder: { control: 'text' },
    type: { control: 'text' },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter text here',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Enter your password',
  type: 'password',
};

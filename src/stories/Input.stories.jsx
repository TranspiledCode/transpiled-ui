import React from 'react';
import styled from '@emotion/styled';
import TextInput from '../components/Input';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: 'roboto', sans-serif;
`;

export default {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'number', 'password'] },
    fontSize: { control: 'number' },
    clearable: { control: 'boolean' },
    theme: {
      control: 'object',
    },
    colorOverrides: {
      control: 'object',
    },
  },
};

const Template = (args) => (
  <StyledContainer>
    <TextInput {...args} />
  </StyledContainer>
);

export const Default = Template.bind({});
Default.args = {
  id: 'username',
  name: 'username',
  placeholder: 'Username',
  type: 'text',
  fontSize: 18,
  clearable: true,
  ariaLabel: 'username field',
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  placeholder: 'Phone number',
  type: 'phone',
  clearable: true,
  ariaLabel: 'phone number field',
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Enter your password',
  type: 'password',
  clearable: true,
  ariaLabel: 'password field',
};

// src/stories/Input.stories.jsx
import React from 'react';
import { useTheme } from '../ThemeProvider';
import Input from '../components/Input';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export default {
  title: 'components/Input',
  tags: ['autodocs'],

  component: Input,
  argTypes: {
    id: { control: 'text' },
    placeholder: { control: 'text' },
    name: { control: 'text' },
    type: { control: 'select', options: ['text', 'number', 'password'] },
    autocomplete: {
      control: 'select',
      options: [
        'on',
        'off',
        'username',
        'new-password',
        'current-password',
        'email',
        'tel',
        'name',
      ],
    },
    size: {
      control: 'radio',
      options: ['s', 'm', 'l', 'xl'],
    },
    clearable: { control: 'boolean' },
    colors: {
      control: 'object',
    },
    theme: {
      control: 'object',
    },
    borderStyle: {
      control: 'radio',
      options: ['box', 'bottom'],
    },
    fieldLabel: { control: 'boolean' },
  },
};

const Template = (args) => (
  <StyledDiv>
    <Input {...args} />
  </StyledDiv>
);

export const Default = Template.bind({});

export const Themed = (args) => {
  const { theme } = useTheme();

  return (
    <StyledDiv>
      <Input {...args} theme={theme} />
    </StyledDiv>
  );
};

export const NoTheme = (args) => (
  <StyledDiv>
    <Input {...args} />
  </StyledDiv>
);

export const Form = () => (
  <>
    <StyledDiv>
      <Input
        id='name-id'
        placeholder='Name'
        name='input-name'
        type='text'
        borderStyle='bottom'
        clearable
        // fieldLabel={false}
      />
    </StyledDiv>
    <StyledDiv>
      <Input
        id='email-id'
        placeholder='Email'
        name='input-email'
        type='email'
        borderStyle='bottom'
        clearable
        // fieldLabel={false}
      />
    </StyledDiv>
  </>
);

Default.args = {
  id: 'input-id',
  placeholder: 'Placeholder Text',
  name: 'input-name',
  type: 'text',
  autocomplete: 'off',
  size: 's',
  clearable: true,
  colors: {},
  theme: {},
  borderStyle: 'bottom',
  fieldLabel: true,
};

Themed.args = {
  ...Default.args,
  // Any specific props for the Themed variant
};

NoTheme.args = {
  ...Default.args,
  // Any specific props for the NoTheme variant
  colors: {
    inputBorderColor: '#FFC107',
    inputBorderFocusColor: '#FF5722',
    inputFontColor: '#00796B',
    inputLabelColor: '#E91E63',
    inputPlaceholderColor: '#9C27B0',
    inputBackgroundColor: '#ed9c1b',
    inputClearIconColor: '#9C27B0',
  },
};

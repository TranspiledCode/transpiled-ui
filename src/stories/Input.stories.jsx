// src/stories/Input.stories.jsx
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Input from '../components/Input';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 40px;
`;

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    id: { control: 'text' },
    placeholder: { control: 'text' },
    name: { control: 'text' },
    type: { control: 'text' },
    autocomplete: { control: 'text' },
    size: {
      control: 'select',
      options: ['s', 'm', 'l', 'xl'],
    },
    clearable: { control: 'boolean' },
  },
};

const Template = (args) => (
  <StyledDiv>
    <Input {...args} />
  </StyledDiv>
);

export const Default = Template.bind({});
Default.args = {
  id: 'input-id',
  placeholder: 'Placeholder Text',
  name: 'input-name',
  type: 'text',
  autocomplete: 'off',
  size: 'm',
};

// Example with a theme
const theme = {
  border: '#3d3d3d',
  borderFocus: '#4269a8',
  labelColor: '#4269a8',
  placeholderColor: '#333',
};

export const Themed = (args) => (
  <ThemeProvider theme={theme}>
    <StyledDiv>
      <Input {...args} />
    </StyledDiv>
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
  // Any specific props for the Themed variant
  clearable: true,
};

export const NoTheme = (args) => <Input {...args} />;
NoTheme.args = {
  ...Default.args,
  // Any specific props for the NoTheme variant
};

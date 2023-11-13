# @transpiled/ui

Transpiled UI is a modular component library designed to accelerate web development, offering a collection of reusable, well-documented, and accessible UI components. Built with React, TranspiledUI embodies a blend of modern design and coding standards, making it an ideal choice for developers aiming to build visually appealing and functional web applications with minimal hassle.

## Installation

```bash
# with npm
npm install @transpiled/ui

# or with yarn
yarn add @transpiled/ui

```

Our component library is built with theming and ease of navigation in mind. Below is how you can integrate the `ThemeProvider` in your project.

## ThemeProvider

`ThemeProvider` is a context provider which allows you to easily apply a theme and toggle between light and dark themes in your application. Here's how you can use it:

Import `ThemeProvider` from `@transpiled/ui`:

```javascript
import { ThemeProvider } from '@transpiled/ui';

function App() {
  return (
    <ThemeProvider>
      <YourAppHere />
    </ThemeProvider>
  );
}

export default App;
```

You can toggle between the light and dark themes using the toggleTheme function provided by ThemeProvider:

```javascript
import { useTheme } from '@transpiled/ui';

// Inside your component
const { toggleTheme } = useTheme();
// Use toggleTheme function to switch themes
<button onClick={toggleTheme}>Toggle Theme</button>;
```

## ScrollToTop

ScrollToTop is a component that renders a button allowing users to easily scroll back to the top of the page. Here's how you can use it:

```javascript
import { ThemeProvider } from '@transpiled/ui';
import { ScrollToTop } from '@transpiled/ui';

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <YourAppHere />
    </ThemeProvider>
  );
}

export default App;
```

Place the ScrollToTop component at the top of your app in your JSX, it will render a button fixed at the bottom-right of the window that will scroll the user back to the top of the page when clicked

### useVisibility Hook

The useVisibility hook is designed to monitor the visibility of a component or HTML element and return a boolean value indicating whether it is visible on the screen. This hook utilizes the Intersection Observer API to efficiently and reactively track the element's visibility.

Usage

```javascript
const isVisible = useVisibility(ref);
```

Parameters

- ref (React.RefObject): A React ref object attached to the HTML element whose visibility you want to monitor.
  Returns
- isVisible (boolean): A boolean value that is true if the element is visible on the screen, and false otherwise.

#### Example

```javascript
import React, { useRef } from 'react';
import useVisibility from './useVisibility';

const MyComponent = () => {
  const myRef = useRef(null);
  const isVisible = useVisibility(myRef);

  return (
    <>
      <div ref={myRef} />
      {isVisible && <p>I am visible!</p>}
    </>
  );
};
```

### Notes

This hook is dependent on the Intersection Observer API, which is widely supported in modern browsers. However, for older browsers, a polyfill may be required.
The hook will trigger a re-render when the visibility of the targeted element changes.
It's important to ensure that the ref is attached to the correct element in your component for the hook to work as expected.

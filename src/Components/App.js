import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import theme from './Styles/Theme';

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
  </ThemeProvider>
)

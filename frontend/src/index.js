import 'semantic-ui-css/semantic.min.css';

import ResponsiveContainer from './layout/Responsive/ResponsiveContainer.component';

import Routes from './routes/Routes';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import * as serviceWorker from './utils/serviceWorker';

// i18n translation
import './i18n';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      {/* Responsive Container has navigation and footer */}
      {/* Routes contain body content that will pass as children into responsive container */}
      <ResponsiveContainer>
        <Routes />
      </ResponsiveContainer>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

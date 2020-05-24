import 'semantic-ui-css/semantic.min.css';

import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Home from 'pages/Home';
import ApplicationForm from 'pages/ApplicationForm';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';
import * as serviceWorker from 'utils/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/applicationForm">
          <ApplicationForm />
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

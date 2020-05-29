import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Routes from './index';

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Routes.HOME} />
          <Route exact path="/edit-blog" component={Routes.EDIT_BLOG} />
          <Route exact path="/blog-type" component={Routes.BLOG_TYPE} />
          <Route
            exact
            path="/application-form"
            component={Routes.APPLICATION_FORM}
          />
          <Route exact path="/mentors" component={Routes.MENTORS} />
          <Route exact path="/program" component={Routes.PROGRAM} />
          <Route exact path="/about" component={Routes.ABOUT} />
          <Route exact path="/stories" component={Routes.STORIES} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default Navigation;

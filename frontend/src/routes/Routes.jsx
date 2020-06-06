import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as RouteEnum from './index';
import Spinner from '../components/Spinner/Spinner.component';

class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={RouteEnum.HOME} />
            <Route exact path="/edit-blog" component={RouteEnum.EDIT_BLOG} />
            <Route exact path="/blog-type" component={RouteEnum.BLOG_TYPE} />
            <Route
              exact
              path="/application-form"
              component={RouteEnum.APPLICATION_FORM}
            />
            <Route
              exact
              path="/application-form-success"
              component={RouteEnum.APPLICATION_FORM_SUCCESS}
            />
            <Route exact path="/mentors" component={RouteEnum.MENTORS} />
            <Route exact path="/program" component={RouteEnum.PROGRAM} />
            <Route exact path="/about" component={RouteEnum.ABOUT} />
            <Route exact path="/stories" component={RouteEnum.STORIES} />
            <Route exact path="/privacy" component={RouteEnum.PRIVACY} />
            <Route exact path="/terms" component={RouteEnum.TERMS} />
            <Route path="/blogpost/:id" component={RouteEnum.BLOGPOST} />
          </Suspense>
        </Switch>
      </>
    );
  }
}
export default Routes;

import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyles } from './global.styles';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const SigninAndSignup = lazy(() => import('./pages/signin-signup-page/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route 
              exact 
              path='/signin' 
              render={() => currentUser ? (<Redirect to='/' />) : (<SigninAndSignup />)} 
              />
            <Route path='/shop' component={Shop} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    checkUserSession: () => dispatch(checkUserSession())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

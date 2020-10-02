import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// Components
import './App.css';
import Header from './components/header/header.component';
import SigninAndSignup from './pages/signin-signup-page/sign-in-and-sign-up.component';
import Homepage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Shop from './pages/shop/shop.component';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact 
          path='/signin' 
          render={() => currentUser ? (<Redirect to='/' />) : (<SigninAndSignup />)} 
        />
        <Route path='/shop' component={Shop} />
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

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

// Components
import './App.css';
import Header from './components/header/header.component';
import SigninAndSignup from './pages/signin-signup-page/sign-in-and-sign-up.component';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data()
            });
        });
        
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route 
            exact 
            path='/signin' 
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninAndSignup />)} 
          />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

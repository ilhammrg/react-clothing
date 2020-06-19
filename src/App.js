import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to='/homepage'>Homepage</Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HelloWorld} />
      <Route path='/homepage' component={Homepage} />
    </div>
  );
}

export default App;

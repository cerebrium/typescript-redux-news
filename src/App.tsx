import React from 'react';
import './App.scss';
import Home from './pages/Home';
import FullArticle from './components/FullArticle'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/fullarticle' component={FullArticle} />
    </Router>
  );
}

export default App;

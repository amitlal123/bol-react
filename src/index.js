import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App.js';
import BusinessCardDesign from './components/BusinessCardDesigns.js';

document.addEventListener("DOMContentLoaded", () => {
  const reactNode = document.getElementById("react-node");
  if(reactNode) {
    ReactDOM.render(
      <Router history={ browserHistory }>
        <Route path= "/" component={ App }/>
        <Route path="/businesscards" component={ BusinessCardDesign }/>
      </Router>
      , reactNode
    );
  }
});

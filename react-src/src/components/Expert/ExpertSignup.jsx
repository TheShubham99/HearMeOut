import React from 'react';
import ExpertInfo from './ExpertInfo';
import { Route, HashRouter as Router } from 'react-router-dom';

export default function ExpertSignup() {
  return (
    <>
      <Router>
        <Route path='/ExpertSignup' exact component={ExpertInfo}></Route>
      </Router>
    </>
  );
}

import React from 'react';
import './App.css';
import { Navbar } from './components/navBar';
import LandingPage from './components/landingPage';
import { Route, HashRouter as Router } from 'react-router-dom';
import AgeGroup from './components/AgeGroup';
import ExpertSignup from './components/Expert/ExpertSignup';
import { AuthProvider } from './Auth';
import ExpertSession from './components/Expert/ExpertSession';
import PrivateRoute from './components/Expert/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSession from './components/UserSession';

function App() {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Router>
        <div style={{height:'100%'}}>
          <Route path='/' exact component={LandingPage}></Route>
          <Route path='/LetsGo' exact component={AgeGroup}></Route>
          <Route path='/ExpertSignup' component={ExpertSignup}></Route>
          <PrivateRoute
            path='/Session'
            component={ExpertSession}
          ></PrivateRoute>
          <Route path='/LetsGo/Talk' component={UserSession}></Route>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

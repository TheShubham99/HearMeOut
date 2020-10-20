import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../base';
import { AuthContext } from '../../Auth.js';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';

import ModalTitle from 'react-bootstrap/ModalTitle';

const Login = ({ history, show, toggle }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/Session');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/Session' />;
  }

  return (
    <Modal show={show} id='LoginModal'>
      <ModalHeader>
        <ModalTitle>Log In</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label for='email' name='email'>
              Email address:
            </label>
            <input type='email' className='form-control' id='email' />
          </div>
          <div className='form-group'>
            <label for='pwd'>Password:</label>
            <input
              type='password'
              name='password'
              className='form-control'
              id='pwd'
            />
          </div>
          <button type='submit' className={'signUpBtn'}>
            Log In
          </button>{' '}
          <button className={'logInBtn'} onClick={() => toggle('LogIn')}>
            Cancle
          </button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default withRouter(Login);

import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../../base';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';

const SignUp = ({ history, show, toggle }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/Session');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <>
      <Modal show={show} id='SignUpModal'>
        <ModalHeader>
          <ModalTitle>Sign Up</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <form onSubmit={handleSignUp}>
            <div className='form-group'>
              <label>Email address:</label>
              <input
                type='email'
                name='email'
                className='form-control'
                id='email'
              />
            </div>
            <div className='form-group'>
              <label>Password:</label>
              <input
                type='password'
                name='password'
                className='form-control'
                id='pwd'
              />
            </div>
            <button type='submit' className={'signUpBtn'}>
              Sign Up
            </button>{' '}
            <button className={'logInBtn'} onClick={() => toggle('SignUp')}>
              Cancle
            </button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default withRouter(SignUp);

import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './LogIn';

export default function ExpertInfo() {
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);

  function toggle(type) {
    if (type === 'SignUp') {
      setSignUp(!signUp);
    } else if (type === 'LogIn') {
      setLogIn(!logIn);
    }
  }

  return (
    <div style={{ padding: '3%' }}>
      <h1>HMO Experts</h1>
      <br></br>
      <article style={{ textAlign: 'left' }}>
        Hello there &#128075;,<br></br>
        Thank you for visiting HMO and we appreciate your interest for becoming a Hear Me Out expert.
        It seems like you are good at listening to people.<br></br> We are looking for this quality <b>(Good Listener)</b> in our experts.
        Before we proceed, we would like to share your <b>Responsibilities</b> and <b>Perks</b> that you get after becoming an expert.
      </article>
      <br></br>
      <h3 data-toggle='collapse' href="#collapseResponsibility" role="button" aria-expanded="false" aria-controls="collapseResponsibility">View Responsibilities</h3>
      <article style={{ textAlign: 'left' }} id="collapseResponsibility">
      <div className="card card-body">
        1. As an expert you are expected to listen to users problems.<br></br>
        2. Please keep in mind that, User expect a healthy conversation and he/she expects someone to talk. <br></br> You don't have to give solution or feedback to every question and query.<br></br>
        3. The main aim behind this platform is to help user to express his/her thoughts.<br></br>
        4. You are bound to complete the verification (beta) before starting the Expert Journey.<br></br>
        5. You can't ask personal information to user. Any such action will lead to account suspention.<br></br>
        <b>(Upcoming features.)</b><br></br>
        6. Your rating and performance will be calculated based on the facial expressions.<br></br>
        7. You will know your score after every session. 
        </div>
      </article>
      <br></br>
      <h3 data-toggle='collapse' href="#collapsePerks" role="button" aria-expanded="false" aria-controls="collapsePerks">View Perks</h3>
      <div style={{ textAlign: 'left' }} id="collapsePerks">
        <div className="card card-body">
        1. Initially the service will be free but once permium plans are active, you will be receiving a fair amount of payment based on your performance.
        <br></br>
        2. Other perks will be updated soon.
        <br></br>
        <br></br>
        </div>
      </div>
      <center>
        <br></br>
        <p>Sign up to become a new expert.</p>
        <p>Log In if you are a old expert.</p> 
        <br></br>
        <br></br>
        <button
          alt='signinExpert'
          className='signUpBtn'
          onClick={() => toggle('SignUp')}
        >
          Sign up
        </button>
        <button
          alt='loginExpert'
          className='logInBtn'
          onClick={() => toggle('LogIn')}
        >
          Log In
        </button>
      </center>

      <SignUp show={signUp} toggle={(i) => toggle(i)}></SignUp>
      <Login show={logIn} toggle={(i) => toggle(i)}></Login>
      {/* Login/SignUp 

    
      <Modal show={logIn} id='LoginModal'>
        <ModalHeader>
          <ModalTitle>Log In</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleLogin}>
            <div class='form-group'>
              <label for='email'>Email address:</label>
              <input type='email' class='form-control' id='email' />
            </div>
            <div class='form-group'>
              <label for='pwd'>Password:</label>
              <input type='password' class='form-control' id='pwd' />
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          <button type='submit' className={'signUpBtn'}>
            Log In
          </button>{' '}
          <button className={'logInBtn'} onClick={() => toggle('LogIn')}>
            Cancle
          </button>
        </ModalFooter>
      </Modal>
      */}
    </div>
  );
}

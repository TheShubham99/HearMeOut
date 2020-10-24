import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './LogIn';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';

export default function ExpertInfo() {
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);

  const [Responsibilities, setResponsibilities] = useState(false);
  const [Perks, setPerks] = useState(false);


  function toggle(type) {
    if (type === 'SignUp') {
      setSignUp(!signUp);
    } else if (type === 'LogIn') {
      setLogIn(!logIn);
    }
  }

  return (
    <div style={{ padding: '10%',paddingTop:'2%' }}>
      <h1>HMO Experts</h1>
      <br></br>
      <article style={{ textAlign: 'left' }}>
        Hello there &#128075;,<br></br>
        Thank you for visiting HMO and we appreciate your interest for becoming a Hear Me Out expert.
        It seems like you are good at listening to people.<br></br> We are looking for this quality <b>(Good Listener)</b> in our experts.
        Before we proceed, we would like to share your <b>Responsibilities</b> and <b>Perks</b> that you get after becoming an expert.
      </article>
      <br></br>
      <center>
      <button className={"infoBtn"} onClick={()=>setResponsibilities(true)}><h5 >View Responsibilities</h5></button>
      <button className={"infoBtn"} onClick={()=>setPerks(true)}><h5>View Perks</h5></button>
        <br></br>
        <br></br>
        <br></br>
        <p>Sign up to become a new expert, or Log In if you are a old expert.</p> 
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
     

      {/* Info Modals */}

      <Modal show={Responsibilities} id='ResponsibilitiesModal'>
        <ModalHeader>
          <ModalTitle>Expert's Responsibilities</ModalTitle>
        </ModalHeader>
        <ModalBody>
        <article style={{ textAlign: 'left' }}>
      <div class="card card-body">
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

        </ModalBody>
        <ModalFooter>
          <button className={'btn-danger'} onClick={()=>setResponsibilities(false)}>Close</button> 
        </ModalFooter>
      </Modal>

     

      <Modal show={Perks} id='PerksModal'>
        <ModalHeader>
          <ModalTitle>Expert's Perks</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <article style={{ textAlign: 'left' }}>
                1. Initially the service will be free but once permium plans are active, you will be receiving a fair amount of payment based on your performance.
                <br></br>
                2. Other perks will be updated soon.
                <br></br>
                <br></br>
              </article>
            </ModalBody>
        <ModalFooter>
          <button className={'btn-danger'} onClick={()=>setPerks(false)}>Close</button> 
        </ModalFooter>
      </Modal>
     



    </div>

  );
}

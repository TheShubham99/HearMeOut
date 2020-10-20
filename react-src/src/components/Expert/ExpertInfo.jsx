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
    <div style={{ padding: '2%' }}>
      <h1>HMO Experts</h1>
      <br></br>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel
        blanditiis error recusandae amet aperiam provident alias! Molestias
        rerum, a possimus eveniet excepturi hic suscipit modi itaque pariatur
        veniam odit. Excepturi, similique! Expedita, nostrum. Dolorum architecto
        iste molestiae ut, quae ipsam omnis suscipit nisi facere, quos corrupti?
        Corrupti, tenetur ipsam?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Est nihil autem sint molestias alias blanditiis
        placeat rerum suscipit adipisci facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae nesciunt sapiente commodi odit.
        Libero, exercitationem non dicta pariatur perferendis molestiae quo ex
        doloribus architecto labore explicabo, asperiores tenetur at ipsa dolor
        ad reprehenderit quaerat sunt? Expedita recusandae, voluptate, earum
        dolorem nostrum doloribus error odit magni consequuntur quas eveniet
        tempore rerum rem enim? Quam esse, distinctio nihil alias, quis modi
        quibusdam temporibus cum perferendis facilis dolor, excepturi nisi
        magnam! Obcaecati consectetur ad culpa, itaque sunt dicta recusandae
        eaque officia numquam veritatis quibusdam voluptate ipsum omnis facere,
        repudiandae dolores! Veritatis dignissimos quisquam veniam autem animi?
        Dolore facere officiis perferendis incidunt, eligendi placeat!
      </article>
      <h3>Perks</h3>
      <article style={{ textAlign: 'left' }}>
        1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
        placeat!
        <br></br>
        2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        consequatur reiciendis suscipit fuga, vitae repellendus velit aut culpa
        excepturi ipsa!
        <br></br>
        3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
        placeat!
        <br></br>
      </article>
      <center>
        {' '}
        <p>Sign up to become an expert</p>
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

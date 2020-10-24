import React,{useState} from 'react';
import logo from '../img/logo.png';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';


export function Navbar() {
  let goHome = () => {
    var i = document.location.toString().indexOf('/');
    document.location = document.location.toString().substring(0, i);
  };


  const [showAbout, setshowAbout] = useState(false);

  function toggle() {
    setshowAbout(!showAbout)
  }


  return (
    <div className='navBar'>
      <img alt={'logo'} className={'navLogo'} src={logo} onClick={goHome}></img>
      <div className={'aboutBtn'}>
        <center>
          <button onClick={toggle} style={{background:'rgba(246,245,245,0)',padding:'0',margin:'0', borderColor:'transparent', outline: 'none'}}><b>About</b></button>
        </center>
      </div>

      <Modal show={showAbout} id='AboutModal'>
        <ModalHeader>
          <ModalTitle>About: Hear Me Out!</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>
          Hear Me Out is a platform where you can share your thoughts with experts. 
          We choose our experts carefully. <br></br><br></br>
          The Experts are some really kind hearted people who are there  
          to listen to your stories, without any judgements. <br></br><br></br>
          We connect you with the experts who are <b>Good Listeners </b>.
          </p>
        </ModalBody>
        <ModalFooter>
          <button className={'btn-danger'} onClick={toggle}>Close</button> 
        </ModalFooter>
      </Modal>
    </div>
  );
}

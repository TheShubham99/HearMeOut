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
          <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolorum molestias consequuntur nihil illum ea animi modi rerum! Laudantium ullam possimus eum, veritatis ipsam ex debitis veniam nihil fuga sunt ab accusantium itaque voluptate consequuntur. Qui aperiam doloribus dolor temporibus et, earum laudantium ducimus officiis culpa veritatis exercitationem quas? Libero!
          </div>
        </ModalBody>
        <ModalFooter>
          <button className={'btn-danger'} onClick={toggle}>Close</button> 
        </ModalFooter>
      </Modal>
    </div>
  );
}

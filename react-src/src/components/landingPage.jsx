import React from 'react';
import Background from '../img/vector-background.jpg';
import Cloud from '../img/cloud.png';
import TypingEffect from 'typing-effect-react';

export default function LandingPage() {
  return (
    <div className={'landingPage'}>
      <div style={{ display: 'flex', flexFlow: 'column', overflow: 'hidden' }}>
        <div>
          <img alt='cloud' className={'cloud-one'} src={Cloud}></img>
          <img alt='cloud' className={'cloud-two'} src={Cloud}></img>

          <div className={'quoteBox'}>
            <p className='landingQuote'>We are here to hear you.</p>
            <p className='landingQuote'>Look, right next to you.</p>
            <p className='landingQuote'>Can you hear us ?</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexFlow: 'row', overflow: 'hidden' }}>
          <div className={'headBox'}>
            <center>
              <b>
                <p className='landingHeader'>
                  Speak up and share your
                  <TypingEffect
                    className={'hlWord'}
                    data={[' Stories.', ' Experiences.']}
                  />
                </p>
              </b>
              <p className='landingHeader2'>
                There is someone to
                <TypingEffect
                  className={'hlWord'}
                  data={[' Help.', ' Listen.']}
                />
              </p>
              <p>
                <b>
                  Tallk with Experts.<br></br> Lighten up your mood.
                </b>
              </p>

              <button
                className={'letsGobtn'}
                onClick={() => (document.location += 'LetsGo')}
              >
                Let's Go!
              </button>

              <p>
                Are you a good listener? Then you can be an{' '}
                <button
                  onClick={() => (document.location += 'ExpertSignup')}
                  style={{
                    color: 'blue',
                    textDecoration: 'underline',
                  }}
                >
                  Expert.
                </button>
              </p>
            </center>
          </div>
          <div>
            <img
              alt='background-Img'
              className={'backgroundImg'}
              src={Background}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

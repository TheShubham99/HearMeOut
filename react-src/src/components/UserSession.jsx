import React from 'react';
import useScript from './util/useScript';


export default function UserSession() {

  useScript("./user.js");
  return (
    
     <div style={{ height: '100%',overflow:'hidden' }}>
      <div className='row-v'>
        <div className={'column'}>
          <div className='remote-container'>
          <video id='remote-container-user' className='remote-container'>
           
          </video>
          </div>
          <div  className='local-container'>
          <div style={{display:'flex',flexDirection:'row',height:'100%'}}>
          <video  id='local-container-user' style={{width:'20em',height:'100%', border:'0.2em solid lightgreen'}}> </video>
          </div>
          <div className={'herbstable'}></div>
          </div>
        </div>
        
        <div className={'sessionleftPane'}>
          <center>
            <button
            className='hangup'
            id='hangup-user'
              style={{ marginTop: '0.3em', background: 'red', color: 'white',display:'none' }}
            >
              End Meeting
            </button>
          </center>
          <div className={'onlineList'}>
            <div
              style={{
                textAlign: 'center',
                background: '#00ffc0',
                color: 'black',
                fontFamily: 'Nunito',
              }}
            >
              <b style={{ margin: '0em', padding: '0em' }}>
                Online <span className={'onlineDot'}></span>
              </b>
            </div>
            <div className={'userlist'} id='userlist'>
              {/* <p className={'user-entry'}>Userone</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

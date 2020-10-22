import React, { useCallback,useState,useEffect } from 'react';
import app from '../../base';
import ProgressBar from 'react-bootstrap/ProgressBar'
import useScript from '../util/useScript';

export default function ExpertSession({ history }) {
  
  const logOut = useCallback(async () => {
    try {
      await app.auth().signOut();
           history.push('/');
    } catch (error) {
      alert(error.message);
    }
  }, [history]);

  const [smiles,setSmiles]=useState(0)


  useScript("./expert.js");
  return (

     <div style={{ height: '100%' }}>
      <div className='row-v'>
        <div className={'column'}>
        <div className='remote-container'>
          <video id='remote-container-expert' className='remote-container'></video>
          </div>

          <div  className='local-container'>

          <div style={{display:'flex',flexDirection:'row',height:'100%'}}>
          <video  id='local-container-expert' style={{width:'20em',height:'100%', border:'0.2em solid lightgreen'}}> </video>
          </div>

          <div className={'herbstable'}></div>
          </div>
        </div>
        
        <div className={'sessionleftPane'}>
          <center>
        <label>Smiles :)</label>
            <ProgressBar animated striped variant="success" now={smiles+5} 
            style={{backgroundColor:'lightgrey', margin:'1em'}}
            label={smiles}
            ></ProgressBar>
          
            <button onClick={logOut}>Sign Out</button>
            <br></br>
          
            <button
            className='hangup'
            id='hangup-expert'
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
                Try to get a smile on the users face.
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

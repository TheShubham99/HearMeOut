import React, { useState } from 'react';
import Young from '../img/young.png';
import SuperYoung from '../img/super-young.png';

export default function AgeGroup() {
  const [AgeGroup, setAgeGroup] = useState('young');

  return (
    <div>
      <div
        className='split left  fade-in-to-top'
        id='young'
        onClick={() => {setAgeGroup('young')
      document.location+='/Talk'
      }}
      >
        <div
          className='centered'
          style={{
            border: '#00ffc4 solid 0.5em',
          }}
        >
          <img src={Young} alt='Young' />
          <h2>Young</h2>
          <p>Age: 16 to 54.</p>
        </div>
      </div>

      <div
        className='split right fade-in-to-top'
        id='super-young'
        onClick={() => {setAgeGroup('super-young')
        document.location+='/Talk'
        }}
      >
        <div
          className='centered'
          style={{
            border: 'white solid 0.5em',
          }}
        >
          <img src={SuperYoung} alt='Super Young' />
          <h2>Super Young</h2>
          <p>Age: 55+</p>
        </div>
      </div>
      <center>
        <div
          style={{
            position: 'fixed',
            bottom: '1em',
            width: '100%',
          }}
        >
          <b>
            <p
              style={{
                background: 'white',
                borderRadius: '5em',
                width: 'fit-content',
                padding: '1em',
                border: 'solid black 2px',
                fontFamily: 'Nunito',
              }}
            >
              Choose your age group.
            </p>
          </b>
        </div>
      </center>
    </div>
  );
}

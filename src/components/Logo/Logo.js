import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
// import brain from './Logo.jpg'
import brain from './brain.png'

const Logo = () => {
   return (
      <div className='ma3 mt0'>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa2"> 
               <img alt='brain' src={brain} />
            </div>
         </Tilt>
      </div>
   );
}

export default Logo;
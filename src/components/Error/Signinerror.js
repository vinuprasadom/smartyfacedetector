import React from 'react';
// import './Signinerror.css';

const signinerror = ( { route, onRouteChange } ) => {
   return (
      <article style={{position: 'absolute', top: '50%', left: '50%', margin: '-100px 0 0 -375px', zIndex:'15'}} 
               // style= {{ display: 'flex', justifyContent: 'center'}}
               class="mw7 ph3 pt6 ph5-ns tc br2 pv3 bg-washed-green dark-green shadow-5 mb5">
         { route === 'Serror' 
           ?<p class="fw6 f2 lh-title mt0 mb3">
               { 'Wrong Credentials. Please try again' }
            </p>
           :route === 'Rerror'
           ?<p class="fw6 f2 lh-title mt0 mb3">
               { 'Provide valid inputs. Try again' }
            </p>
           :<p class="fw6 f2 lh-title mt0 mb3">
               { 'Provide valid inputs. Try again' }
           </p>
         }
         <p class="pointer f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
            onClick={() => onRouteChange('signin')}>
            Sign In
         </p>
         <p class="pointer f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
            onClick={() => onRouteChange('register')}>
            Register
         </p>
         {/* <div id="banner"></div>
         <div id="content">
            Hello world
         </div> */}
      </article>
   );
}

export default signinerror;
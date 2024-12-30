import React from 'react';
import FocusCardsDemo from '../component/acertinity/FocusCards';

const LoginSection = ({loginRef} : {loginRef : any}) => {
  return (
    <div id='login-section' className='bg-white dark:bg-black p-[5rem] w-screen h-screen'>
        <FocusCardsDemo />
    </div>
  )
}

export default LoginSection
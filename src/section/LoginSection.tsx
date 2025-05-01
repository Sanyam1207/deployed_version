import React from 'react';
import FocusCardsDemo from '../component/acertinity/FocusCards';

const LoginSection = ({ loginRef }: { loginRef: any }) => {
  return (
    <div id='login-section' className='bg-white dark:bg-black p-[5rem] w-screen h-screen'>
      <h2 className='text-center text-3xl font-extrabold text-blue-900'>Login Here</h2>
      <FocusCardsDemo />
    </div>
  )
}

export default LoginSection
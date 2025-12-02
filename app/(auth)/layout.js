import { memo } from 'react';

const Auth = ({children}) => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      {children}
    </div>
  );
};

export default memo(Auth);
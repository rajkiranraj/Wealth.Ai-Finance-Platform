import { SignIn, SignUp } from '@clerk/nextjs';
import { memo } from 'react';

const Page = () => {
  return (
    <div>
      <SignUp></SignUp>
    </div>
  );
};

export default memo(Page);
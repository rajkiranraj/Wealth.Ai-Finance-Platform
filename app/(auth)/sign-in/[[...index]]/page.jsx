import { SignIn } from '@clerk/nextjs';
import { memo } from 'react';

const Page = () => {
  return (
    <div>
      <SignIn></SignIn>
    </div>
  );
};

export default memo(Page);
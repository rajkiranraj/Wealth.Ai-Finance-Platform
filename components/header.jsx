import { memo } from 'react';
import { ClerkProvider,SignedOut,SignedIn,SignInButton,SignUpButton,UserButton } from "@clerk/nextjs";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='fixed top-0'>
      <nav>
        <header>This is header h1</header>
        <Link href="/">
        <Image src={"/logo.png"} alt='welthIQ.ai logo' height={60} width={150} className='h-6 w-auto object-contain'></Image>
        </Link>
      </nav>
    </div>
  );
};

export default memo(Header);
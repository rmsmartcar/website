import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <Image
          src='/logo.png'
          alt='RM Smart Car Logo'
          width={1066}
          height={170}
        />
        <h1 className='text-2xl'>Brevemente...</h1>
      </div>
    </div>
  );
}

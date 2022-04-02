import type { NextPage } from 'next';
import Head from 'next/head';

import User from './user';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#263137] py-2">
      <Head>
        <title>Chad Parker Github Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <User />
    </div>
  );
};

export default Home;

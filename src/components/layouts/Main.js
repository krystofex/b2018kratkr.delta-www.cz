import Navbar from '../modules/Navbar';
import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Head>
        <title>Histories</title>
        <meta content="Histories landing page." name="description" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full h-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

import Navbar from '../modules/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full h-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

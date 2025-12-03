
import React, { useState } from 'react';
import { Page } from './types';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './components/sections/Home';
import { Membership } from './components/sections/Membership';
import { Guide } from './components/sections/Guide';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setPage={setCurrentPage} />;
      case Page.Membership:
        return <Membership setPage={setCurrentPage} />;
      case Page.Guide:
        return <Guide />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary text-white font-sans selection:bg-accent selection:text-white">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />

      {/* Added print:pt-0 to remove top padding when printing */}
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;

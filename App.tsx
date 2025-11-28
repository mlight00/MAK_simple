
import React, { useState } from 'react';
import { Page } from './types';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './components/sections/Home';
import { Insights } from './components/sections/Insights';
import { Trends } from './components/sections/Trends';
import { Membership } from './components/sections/Membership';
import { Guide } from './components/sections/Guide';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setPage={setCurrentPage} />;
      case Page.Insights:
        return <Insights />;
      case Page.Trends:
        return <Trends />;
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
      
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;

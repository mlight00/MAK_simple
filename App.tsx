
import React, { useState } from 'react';
import { Page } from './types';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './components/sections/Home';
import { Membership } from './components/sections/Membership';
import { Guide } from './components/sections/Guide';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    if (pageParam === 'guide') return Page.Guide;
    if (pageParam === 'membership') return Page.Membership;
    return Page.Home;
  });

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let shouldUpdate = false;

    if (currentPage === Page.Guide && params.get('page') !== 'guide') {
      params.set('page', 'guide');
      shouldUpdate = true;
    } else if (currentPage === Page.Membership && params.get('page') !== 'membership') {
      params.set('page', 'membership');
      shouldUpdate = true;
    } else if (currentPage === Page.Home && params.has('page')) {
      params.delete('page');
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
      window.history.pushState({}, '', newUrl);
    }
  }, [currentPage]);

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


import React from 'react';
import { Page } from '../../types';
import { ArrowRight, Lock, TabletSmartphone, TrendingUp } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  const handleApplyClick = () => {
    window.open('https://www.medicalaesthetickorea.com/member', '_blank');
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease-in-out]">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center overflow-hidden py-10">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Medical Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8">
          <div className="mb-4 animate-[fadeIn_1s_ease-out]">
            <span className="inline-block py-3 px-8 rounded-sm bg-accent text-white text-sm font-bold tracking-[0.2em] uppercase shadow-lg transform hover:scale-105 transition-transform duration-300">
              Limited Access Now Open
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            Curated Intelligence from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Korea's Aesthetic Leaders
            </span>
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-300 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Exclusively curated insights from 4,000+ Korean medical aesthetic experts. <br className="hidden md:block" />
            Access the cutting-edge of K-Beauty procedures, curated for discerning international physicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-10 sm:pb-0">
            <a
              href="https://www.medicalaesthetickorea.com/member"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-sm shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg tracking-wide inline-block text-center"
            >
              Apply for Membership
            </a>
            <a
              href="https://mak-simple.vercel.app/?page=guide"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-sm backdrop-blur-sm transition-all duration-300 text-lg flex items-center justify-center gap-3 font-medium inline-block text-center"
            >
              <TabletSmartphone className="w-5 h-5 inline-block mr-2" /> View Access Guide
            </a>
          </div>
        </div>
      </div>

      {/* Problem & Solution */}
      <section className="py-10 bg-[#112240] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-snug">
                Global medical data is vast, <br />
                <span className="text-gray-400">but often outdated.</span>
              </h2>
              <p className="text-base text-gray-400 mb-4 leading-relaxed font-light">
                Are you missing the real-time innovations happening in Seoul? Textbooks are too slow.
                Conferences are once a year. The real innovation happens daily in the procedure rooms of Gangnam.
              </p>
              <div className="border-l-4 border-accent pl-8 py-2">
                <h3 className="text-xl font-bold text-white mb-3">Our Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't just aggregate data. We curate. From Korea's largest closed community of 4,000 medical aesthetic experts,
                  we deliver only the verified, high-impact protocols directly to your device.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://raw.githubusercontent.com/mlight00/MAK_membership/main/body.png?raw=true"
                alt="Korean Medical Aesthetic Experts"
                className="relative rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded shadow-xl hidden md:block">
                <p className="text-white font-bold text-3xl font-serif">4,000+</p>
                <p className="text-white/80 text-sm tracking-wide">Verified Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Why Global Leaders Join Us</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-accent" />}
              title="Top 1% Curated Intelligence"
              description="We filter out the noise. Receive only the most clinically significant case studies selected from 4,000+ members."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-accent" />}
              title="Real-time K-Trend Updates"
              description="Stay ahead of the curve. Access the latest Korean injection techniques and device protocols the moment they trend."
            />
            <FeatureCard
              icon={<TabletSmartphone className="w-8 h-8 text-accent" />}
              title="Optimized for Your Device"
              description="Whether on your iPhone between rounds or iPad in your office, our interface adapts perfectly to your workflow."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#112240] p-6 rounded-sm hover:bg-[#1a3055] transition-colors border border-white/5 hover:border-accent/30 group">
    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4 font-serif">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

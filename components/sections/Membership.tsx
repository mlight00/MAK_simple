import React from 'react';
import { Page } from '../../types';
import { Crown, CheckCircle } from 'lucide-react';

interface MembershipProps {
  setPage: (page: Page) => void;
}

export const Membership: React.FC<MembershipProps> = ({ setPage }) => {
  const handleJoinClick = () => {
    window.open('https://www.medicalaesthetickorea.com/member', '_blank');
  };

  return (
    <div className="py-12 animate-[fadeIn_0.5s_ease-in-out]">
      <div className="max-w-5xl mx-auto px-4 text-center mt-10">
        <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">An Invitation to Excellence</h2>
        <p className="text-xl text-gray-400 mb-16">Join the network of global opinion leaders.</p>

        <div className="bg-white text-primary rounded-lg shadow-2xl overflow-hidden max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
          <div className="bg-gray-100 p-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold font-serif">Physician Membership</h3>
            <p className="text-gray-500 mt-2">For Verified Medical Professionals</p>
          </div>
          <div className="p-8">
            <ul className="space-y-4 text-left mb-8">
              {[
                'Full Access to Translated Archive',
                'Real-time Trend Alerts',
                'Priority Support'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle className="text-accent w-6 h-6 mr-3 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={handleJoinClick}
              className="w-full bg-accent text-white font-bold py-4 rounded hover:bg-accent-hover transition-colors shadow-lg"
            >
              Join the Inner Circle Now
            </button>
            <p className="text-xs text-gray-400 mt-4">Manual verification required. Approval takes 24-48 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
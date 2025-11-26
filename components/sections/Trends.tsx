import React from 'react';
import { TrendItem } from '../../types';
import { ArrowUpRight } from 'lucide-react';

const TRENDS_DATA: TrendItem[] = [
  {
    tag: 'HOT',
    tagColor: 'text-red-400',
    tagBg: 'bg-red-900/30',
    title: 'Why Korea?',
    description: 'Korea is the testbed for global aesthetic devices. Knowing Korean trends means predicting the future of your local market.'
  },
  {
    tag: 'TECHNIQUE',
    tagColor: 'text-blue-400',
    tagBg: 'bg-blue-900/30',
    title: 'Live Procedure Techniques',
    description: 'From advanced filler techniques to the latest energy-based device settings. See how Korean masters utilize tools.'
  },
  {
    tag: 'REPORT',
    tagColor: 'text-green-400',
    tagBg: 'bg-green-900/30',
    title: 'Device & Drug Synergies',
    description: 'Weekly reports on the most effective combination therapies currently performing well in Gangnam.'
  }
];

export const Trends: React.FC = () => {
  return (
    <div className="py-12 animate-[fadeIn_0.5s_ease-in-out]">
      <div className="bg-[#112240] py-20 rounded-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden my-10 border border-white/5">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            The Pulse of Seoul, <br />
            <span className="text-gray-400">Directly to You.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Be the first to know the next global standard in aesthetic treatments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRENDS_DATA.map((trend, idx) => (
              <div 
                key={idx} 
                className="bg-[#0A192F] p-8 rounded-sm border border-white/5 hover:border-accent/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`${trend.tagBg} ${trend.tagColor} text-xs font-bold px-3 py-1 rounded tracking-wide`}>
                    {trend.tag}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">{trend.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {trend.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
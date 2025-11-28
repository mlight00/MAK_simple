import React from 'react';
import { ArrowRight, BookOpen, Database, Award } from 'lucide-react';

export const Insights: React.FC = () => {
  return (
    <div className="py-12 animate-[fadeIn_0.5s_ease-in-out]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 mt-10">
          <span className="text-accent tracking-[0.2em] text-sm font-bold uppercase">The Library</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">Precision over Volume</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            We deliver the essence of Korean medical aesthetics, verified by experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-accent rounded-sm transform translate-x-3 translate-y-3"></div>
             <img 
               src="https://raw.githubusercontent.com/mlight00/MAK_membership/main/insight.png?raw=true" 
               className="relative rounded-sm shadow-2xl object-cover h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-500" 
               alt="Lab Research" 
             />
          </div>
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-white font-serif">The Vetting Process</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                How we select content: Every post is analyzed based on clinical evidence, innovation level, and practical applicability. Only the top tier makes it to the English edition.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-white font-serif">Beyond Textbooks</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Textbooks are static. Our platform is dynamic. Access 'Off-label' uses and practical tips that are currently being discussed in closed Korean aesthetic expert communities.
              </p>
            </div>
            <button className="self-start text-accent border-b border-accent pb-1 hover:text-white hover:border-white transition-all flex items-center gap-2 group">
              Browse Example Insights <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
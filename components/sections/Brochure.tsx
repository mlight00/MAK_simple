
import React from 'react';
import { Printer } from 'lucide-react';

export const Brochure: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 print:py-0 print:m-0 text-white animate-[fadeIn_0.5s_ease-in-out]">
      {/* Floating Action Button for Screen */}
      <div className="fixed bottom-8 right-8 print:hidden z-50">
        <button 
          onClick={handlePrint}
          className="bg-[#D32F2F] hover:bg-red-700 text-white font-bold px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 transform hover:scale-105 transition-all border-2 border-white/20"
        >
          <Printer className="w-6 h-6" /> Save as PDF / Print
        </button>
        <p className="text-gray-500 text-xs mt-2 text-center bg-white/80 rounded px-2 py-1 shadow">
          *Check "Background graphics" in print settings
        </p>
      </div>

      {/* A4 Container */}
      <div className="max-w-[210mm] mx-auto bg-[#0A192F] shadow-2xl print:shadow-none print:w-full print:max-w-none print:mx-0 min-h-[297mm] flex flex-col font-sans overflow-hidden">
        
        {/* 1. Header Area (Solid Navy Background) */}
        {/* Pushed down significantly to 35mm to center content visually */}
        <div className="pt-[35mm] pb-[5mm] px-[15mm] text-center bg-[#0A192F] relative z-20">
           <div className="mb-5 flex justify-center">
              <span className="bg-[#D32F2F] text-white px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] rounded-sm">Limited Access Now Open</span>
           </div>
           <h1 className="text-4xl font-serif font-bold text-white mb-5 leading-tight drop-shadow-xl">
             Curated Intelligence from <br/> Korea's Aesthetic Leaders
           </h1>
           <p className="text-sm text-gray-200 font-light max-w-2xl mx-auto leading-relaxed opacity-90">
             Exclusively curated insights from 3,500+ Korean medical aesthetic experts. Access the cutting-edge of K-Beauty procedures, curated for discerning international physicians.
           </p>
        </div>

        {/* 2. Body Area (Solid Background) */}
        {/* flex-grow with justify-between to push footer to bottom and spread content */}
        <div className="relative flex-grow flex flex-col justify-between">
            
            {/* Content Wrapper to center vertically in the remaining space */}
            <div className="flex flex-col justify-center flex-grow relative z-10 px-[15mm]">
                
                {/* Content 1: The 3 Cards */}
                <div className="mb-10 mt-4">
                   <div className="grid grid-cols-3 gap-4">
                       {/* Card 1 */}
                       <div className="bg-[#112240] border border-white/10 p-4 rounded shadow-lg">
                          <h3 className="text-[#D32F2F] font-bold text-sm mb-2">Top 1% Curated</h3>
                          <p className="text-gray-300 text-[10px] leading-relaxed">
                            We filter out the noise. Receive only the most clinically significant case studies selected from 3,500+ members. Verified by experts.
                          </p>
                       </div>
                       {/* Card 2 */}
                       <div className="bg-[#112240] border border-white/10 p-4 rounded shadow-lg">
                          <h3 className="text-[#D32F2F] font-bold text-sm mb-2">Real-time Updates</h3>
                          <p className="text-gray-300 text-[10px] leading-relaxed">
                            Stay ahead of the curve. Access the latest Korean injection techniques and device protocols the moment they trend in Seoul.
                          </p>
                       </div>
                       {/* Card 3 */}
                       <div className="bg-[#112240] border border-white/10 p-4 rounded shadow-lg">
                          <h3 className="text-[#D32F2F] font-bold text-sm mb-2">Device Synergy</h3>
                          <p className="text-gray-300 text-[10px] leading-relaxed">
                            Weekly reports on the most effective combination therapies currently performing well in Gangnam using global devices.
                          </p>
                       </div>
                   </div>
                </div>

                {/* Content 2: Precision over Volume */}
                <div className="mb-10">
                  <div className="flex bg-[#112240]/50 border border-white/5 rounded-lg overflow-hidden">
                      <div className="w-2 bg-[#D32F2F] flex-shrink-0"></div>
                      
                      <div className="p-6 flex-grow">
                          <h2 className="text-2xl font-serif font-bold text-white mb-4">
                            Precision over Volume
                          </h2>
                          
                          <div className="flex flex-col gap-4">
                             <div>
                                <h3 className="text-white font-bold text-sm mb-1">The Vetting Process</h3>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                  Every post is analyzed based on clinical evidence, innovation level, and practical applicability. Only the highest-quality content makes it to the English edition.
                                </p>
                             </div>
                             <div>
                                <h3 className="text-white font-bold text-sm mb-1">Beyond Textbooks</h3>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                  Access off-label applications and practical tips that are currently being discussed in closed Korean aesthetic expert communities.
                                </p>
                             </div>
                          </div>
                      </div>
                  </div>
                </div>

                {/* Content 3: How to Join */}
                <div className="mb-4">
                   <div className="text-center mb-5">
                       <div className="inline-block border-t border-white/20 w-16 mb-2"></div>
                       <h2 className="text-xl font-serif font-bold text-white">
                          How to Join (Verification Required)
                       </h2>
                   </div>

                   <div className="grid grid-cols-4 gap-4 relative">
                      <div className="absolute top-[18px] left-[12.5%] right-[12.5%] h-px bg-white/20 -z-0"></div>

                      {[
                        { 
                          step: 1, 
                          title: "Choose Type", 
                          desc: "Select \"Physician members\" to access clinical protocols." 
                        },
                        { 
                          step: 2, 
                          title: "Terms of Use", 
                          desc: "Consent to privacy standards regarding license info." 
                        },
                        { 
                          step: 3, 
                          title: "Verification", 
                          desc: "Input Medical Subject & Clinic Name to verify status." 
                        },
                        { 
                          step: 4, 
                          title: "Approval", 
                          desc: "Manual review by admin team (24-48 hours)." 
                        }
                      ].map((item) => (
                        <div key={item.step} className="text-center relative z-10 group">
                           <div className="w-9 h-9 rounded-full bg-[#D32F2F] text-white text-sm font-bold flex items-center justify-center mx-auto mb-3 shadow-lg ring-4 ring-[#0A192F]">
                             {item.step}
                           </div>
                           <h3 className="font-bold text-xs text-white mb-1">{item.title}</h3>
                           <p className="text-[10px] text-gray-400 leading-snug px-1">
                             {item.desc}
                           </p>
                        </div>
                      ))}
                   </div>
                </div>
            </div>

            {/* Footer - Pushed to bottom via justify-between/flex-grow */}
            <div className="relative z-10 px-[15mm] py-[8mm] border-t border-white/10 flex justify-between items-end bg-[#050d1a]/90 backdrop-blur mt-auto">
               <div>
                 <p className="text-gray-500 text-[10px] mb-1 uppercase tracking-widest">Official Registration</p>
                 <p className="text-[#D32F2F] font-bold text-sm font-serif">www.medicalaesthetickorea.com/member</p>
               </div>
               <div className="text-right">
                  <img src="https://raw.githubusercontent.com/mlight00/MAK_membership/main/logo.png?raw=true" alt="Logo" className="h-5 w-auto opacity-70 mb-2 ml-auto" />
                  <p className="text-[10px] text-gray-500">© Medical Aesthetic Korea Co. Ltd. All rights reserved.</p>
               </div>
            </div>
        </div>

      </div>
      
      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          html, body { 
            margin: 0 !important; 
            padding: 0 !important;
            background-color: #0A192F !important; 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
          }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
};

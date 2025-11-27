import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';

export const Guide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleExternalRegistration = () => {
    window.open('https://www.medicalaesthetickorea.com/member', '_blank');
  };

  const handleNavClick = () => {
    if (currentStep === 4) {
      handleExternalRegistration();
    } else {
      nextStep();
    }
  };

  return (
    <div className="py-12 animate-[fadeIn_0.5s_ease-in-out]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-10">
          <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Registration Guide</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-6 mb-4">How to Join</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Follow these 4 steps to complete your verification as a medical aesthetic expert.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    currentStep === step 
                      ? 'bg-accent text-white scale-110 shadow-lg shadow-accent/50' 
                      : currentStep > step 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white/10 text-gray-500'
                  }`}
                >
                  {currentStep > step ? <Check className="w-5 h-5" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-12 h-0.5 transition-colors duration-300 ${currentStep > step ? 'bg-green-500' : 'bg-white/10'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#112240] rounded-xl p-8 lg:p-12 border border-white/5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          {/* Left: Description & Instructions */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="transition-all duration-500 ease-in-out">
              {currentStep === 1 && (
                 <div className="animate-[fadeIn_0.3s_ease-out]">
                   <h3 className="text-3xl font-serif font-bold text-white mb-4">Step 1. Choose Type</h3>
                   <p className="text-gray-300 text-lg leading-relaxed mb-6">
                     Begin by selecting your membership category. <br/>
                     Please select <span className="text-white font-bold">"Physician members"</span> to access clinical protocols and expert-only data.
                   </p>
                   <div className="p-4 bg-primary/50 rounded border border-white/10">
                     <p className="text-sm text-gray-400 flex items-start gap-2">
                       <span className="text-accent font-bold">Note:</span>
                       Corporate members have restricted access to clinical content.
                     </p>
                   </div>
                 </div>
              )}
              {currentStep === 2 && (
                 <div className="animate-[fadeIn_0.3s_ease-out]">
                   <h3 className="text-3xl font-serif font-bold text-white mb-4">Step 2. Terms of Use</h3>
                   <p className="text-gray-300 text-lg leading-relaxed mb-6">
                     Review and consent to our terms. We adhere to strict privacy standards regarding your medical license information.
                   </p>
                   <div className="p-4 bg-primary/50 rounded border border-white/10">
                     <p className="text-sm text-gray-400 flex items-start gap-2">
                       <span className="text-accent font-bold">Tip:</span>
                       Select "I agree with all of that" for a faster process.
                     </p>
                   </div>
                 </div>
              )}
              {currentStep === 3 && (
                 <div className="animate-[fadeIn_0.3s_ease-out]">
                   <h3 className="text-3xl font-serif font-bold text-white mb-4">Step 3. Verification</h3>
                   <p className="text-gray-300 text-lg leading-relaxed mb-6">
                     This is the most critical step. Enter your details to verify your status.
                     <br/><br/>
                     1. Enter Name & Email to check status.
                     <br/>
                     2. If not registered, the full form will appear.
                   </p>
                   <div className="p-4 bg-primary/50 rounded border border-white/10">
                     <p className="text-sm text-gray-400 flex items-start gap-2">
                       <span className="text-accent font-bold">Required:</span>
                       <span>You must provide your <strong>Medical Subject</strong> (Specialty) and <strong>Clinic Name</strong>.</span>
                     </p>
                   </div>
                 </div>
              )}
              {currentStep === 4 && (
                 <div className="animate-[fadeIn_0.3s_ease-out]">
                   <h3 className="text-3xl font-serif font-bold text-white mb-4">Step 4. Approval</h3>
                   <p className="text-gray-300 text-lg leading-relaxed mb-6">
                     Registration is complete. Your application is now under manual review by our administration team.
                   </p>
                   <div className="p-4 bg-primary/50 rounded border border-white/10">
                     <p className="text-sm text-gray-400 flex items-start gap-2">
                       <span className="text-accent font-bold">Wait Time:</span>
                       <span>Approvals typically take 24-48 hours. You will receive an email confirmation.</span>
                     </p>
                   </div>
                 </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-10 flex gap-4">
              <button 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded text-sm font-bold transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button 
                onClick={handleNavClick}
                className={`flex items-center gap-2 px-8 py-3 rounded text-sm font-bold shadow-lg transition-all ${
                  currentStep === 4 
                  ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer' 
                  : 'bg-accent hover:bg-accent-hover text-white'
                }`}
              >
                {currentStep === 4 ? (
                    <span className="flex items-center gap-2">Done <Check className="w-4 h-4"/></span>
                ) : (
                    <>Next Step <ChevronRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>

          {/* Right: Visual Mockups (Phone/Screen simulation) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] bg-white rounded-[2rem] shadow-2xl border-8 border-gray-900 overflow-hidden transform transition-all duration-500">
              {/* Phone Notch/Header */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 flex justify-center">
                <div className="w-20 h-4 bg-black rounded-b-xl"></div>
              </div>
              
              {/* Screen Content - Scrollable */}
              <div className="h-full w-full overflow-y-auto bg-white pt-8 pb-4 scrollbar-hide text-gray-800 font-sans">
                
                {/* Logo Header Common */}
                <div className="text-center py-4 border-b border-gray-100 flex justify-center">
                    <img src="/logo.png" alt="Medical Aesthetic" className="h-5 w-auto object-contain" />
                </div>

                {/* DYNAMIC CONTENT BASED ON STEP */}
                
                {/* SCREEN 1: TYPE SELECTION */}
                {currentStep === 1 && (
                   <div className="p-6 animate-[fadeIn_0.3s_ease-out]">
                      <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Sign Up</h2>
                      <p className="text-center text-gray-500 text-sm mb-8">Choose your membership type.</p>
                      
                      <div className="space-y-3">
                          <button className="w-full py-3 bg-slate-600 text-white font-bold rounded shadow-md ring-2 ring-red-500 ring-offset-2">
                              Physician members
                          </button>
                          <button className="w-full py-3 bg-slate-500 text-white font-medium rounded opacity-90">
                              Corporate members
                          </button>
                      </div>
                   </div>
                )}

                {/* SCREEN 2: TERMS */}
                {currentStep === 2 && (
                   <div className="p-6 animate-[fadeIn_0.3s_ease-out]">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Terms of Use</h2>
                      <p className="text-xs text-gray-500 mb-6">Sign up The membership and enjoy various benefits.</p>

                      <div className="flex items-center mb-6">
                          <div className="w-5 h-5 border border-gray-300 rounded mr-2 bg-red-600 border-red-600 flex items-center justify-center text-white"><Check className="w-3 h-3"/></div>
                          <span className="text-sm font-bold text-gray-900">I agree with all of that.</span>
                      </div>

                      <div className="space-y-4">
                          <div>
                              <div className="flex items-center mb-1">
                                  <div className="w-4 h-4 border border-gray-300 rounded mr-2 bg-red-600 flex items-center justify-center text-white text-[10px]"><Check className="w-2 h-2"/></div>
                                  <span className="text-xs text-gray-700">Accept Terms (required)</span>
                              </div>
                              <div className="h-20 bg-gray-50 rounded border p-2 text-[10px] text-gray-500 overflow-hidden leading-relaxed">
                                  <strong>Article 1 Purpose</strong><br/>These terms define the conditions of use...
                              </div>
                          </div>
                          <div>
                              <div className="flex items-center mb-1">
                                  <div className="w-4 h-4 border border-gray-300 rounded mr-2 bg-red-600 flex items-center justify-center text-white text-[10px]"><Check className="w-2 h-2"/></div>
                                  <span className="text-xs text-gray-700">Privacy Policy (required)</span>
                              </div>
                              <div className="h-20 bg-gray-50 rounded border p-2 text-[10px] text-gray-500 overflow-hidden leading-relaxed">
                                  <strong>Article 1 Collection Items</strong><br/>Company collects personal info...
                              </div>
                          </div>
                      </div>

                      <button className="w-full mt-6 bg-[#D32F2F] text-white py-3 rounded font-bold text-sm">Accept</button>
                   </div>
                )}

                {/* SCREEN 3: INFO & FORM */}
                {currentStep === 3 && (
                   <div className="p-6 animate-[fadeIn_0.3s_ease-out]">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Member information</h2>
                      <p className="text-xs text-red-600 mb-6">(*) is required.</p>

                      {/* Check Status Part */}
                      <div className="mb-6 pb-6 border-b border-gray-100">
                          <p className="text-sm font-bold text-gray-900 mb-2">Check membership status</p>
                          <div className="border-b-2 border-black w-full mb-4"></div>
                          
                          <div className="space-y-3 mb-3">
                            <div className="flex items-center">
                                <label className="w-16 text-xs font-bold text-gray-700">Name *</label>
                                <input type="text" value="Medical_TEST" className="flex-1 border rounded px-2 py-1 text-xs bg-gray-50" readOnly />
                            </div>
                            <div className="flex items-center">
                                <label className="w-16 text-xs font-bold text-gray-700">E-mail *</label>
                                <input type="text" value="doctor@clinic.com" className="flex-1 border rounded px-2 py-1 text-xs bg-gray-50" readOnly />
                            </div>
                          </div>
                          
                          {/* Alert Box */}
                          <div className="bg-white border border-green-500 text-green-700 px-3 py-2 rounded text-xs flex justify-between items-center mb-3">
                              <span>You are not registered.</span>
                              <span className="text-lg">×</span>
                          </div>
                          <button className="w-full bg-slate-600 text-white text-xs py-2 rounded">Submit</button>
                      </div>

                      {/* Form Part */}
                      <div>
                          <p className="text-sm font-bold text-gray-900 mb-2">Required fields</p>
                          <div className="border-b-2 border-black w-full mb-4"></div>

                          <div className="space-y-2">
                              <div className="flex gap-2">
                                  <input type="text" placeholder="ID *" className="flex-1 border rounded px-2 py-2 text-xs" />
                                  <button className="bg-slate-600 text-white text-[10px] px-2 rounded">Check</button>
                              </div>
                              <input type="password" placeholder="Password *" className="w-full border rounded px-2 py-2 text-xs bg-blue-50" />
                              <div className="text-[9px] text-gray-400">8-32 chars with numbers, letters...</div>
                              
                              <select className="w-full border rounded px-2 py-2 text-xs text-gray-500"><option>Korea, Republic of</option></select>
                              
                              <div className="flex gap-1">
                                  <input className="w-16 border rounded p-1 text-xs" placeholder="010" />
                                  <input className="flex-1 border rounded p-1 text-xs" placeholder="1234" />
                                  <input className="flex-1 border rounded p-1 text-xs" placeholder="5678" />
                              </div>

                              <select className="w-full border rounded px-2 py-2 text-xs text-gray-900 font-bold bg-yellow-50/50"><option>Dermatology</option></select>
                              <input className="w-full border rounded px-2 py-2 text-xs bg-yellow-50/50 font-bold" value="Seoul Gangnam Clinic" readOnly/>
                          </div>

                          <div className="mt-4 border p-2 rounded flex items-center justify-between bg-gray-50">
                              <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 border rounded bg-white"></div>
                                  <span className="text-xs text-gray-600">I'm not a robot</span>
                              </div>
                              <div className="w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
                          </div>

                          <button className="w-full mt-4 bg-[#D32F2F] text-white py-3 rounded font-bold text-sm">Register</button>
                      </div>
                   </div>
                )}

                {/* SCREEN 4: SUCCESS */}
                {currentStep === 4 && (
                   <div className="p-6 animate-[fadeIn_0.3s_ease-out] flex flex-col h-full justify-center text-center">
                      <h2 className="text-xl font-bold text-gray-900 mb-6">Congratulations on signing up</h2>
                      <p className="text-sm text-gray-500 mb-8">The signup completed successfully.</p>
                      
                      <div className="text-xs text-gray-400 mb-10 text-left leading-relaxed bg-gray-50 p-4 rounded">
                          After confirmation by an administrator, the approval process will proceed, and there will be a review waiting period before the subscription is completed.
                      </div>

                      <button className="w-full bg-[#D32F2F] text-white py-3 rounded font-bold text-sm">Log in</button>
                   </div>
                )}

              </div>
              
              {/* Home Bar */}
              <div className="absolute bottom-2 inset-x-0 flex justify-center z-20">
                  <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        {currentStep === 1 && (
            <div className="text-center mt-12">
                <button 
                    onClick={handleExternalRegistration}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-10 py-4 rounded-full transition-all"
                >
                    Start Registration Process
                </button>
                <p className="mt-4 text-gray-500 text-sm">Works on iPhone, iPad, and Desktop.</p>
            </div>
        )}
      </div>
    </div>
  );
};
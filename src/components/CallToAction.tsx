import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-secondary-600/90 z-0" />
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute top-0 -right-40 w-96 h-96 rounded-full bg-primary-400 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-secondary-400 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Web Projects?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join thousands of developers who trust ThemeGlass for beautiful, responsive themes that save time and impress clients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-white/20 flex items-center justify-center space-x-2">
              <span>Browse All Themes</span>
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-medium px-6 py-3 rounded-lg border border-white/30 transition-all duration-200">
              Learn About Pricing
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '15-day', label: 'Money-back guarantee' },
              { value: 'Lifetime', label: 'Free updates' },
              { value: '5-star', label: 'Customer support' },
              { value: 'Unlimited', label: 'Project usage' },
            ].map((feature, index) => (
              <div key={index}>
                <div className="text-xl font-bold text-white">{feature.value}</div>
                <div className="text-sm text-white/70">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction
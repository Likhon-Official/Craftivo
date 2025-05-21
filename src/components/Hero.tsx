import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNIDYwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-5"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-200/30 blur-3xl animate-float"></div>
        <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-secondary-200/30 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary-300/30 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            Craft Beautiful
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 block mt-2 leading-tight">
              Digital Experiences
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Premium themes and templates crafted with passion for developers who value design excellence and code quality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-primary-200/50 flex items-center justify-center space-x-2 group">
              <span>Browse Collection</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="w-full sm:w-auto bg-white text-gray-800 font-medium px-8 py-4 rounded-xl border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md hover:border-primary-200">
              Learn More
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-100/50 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '200+', label: 'Premium Themes' },
                { value: '24/7', label: 'Expert Support' },
                { value: '15k+', label: 'Happy Creators' },
                { value: '99%', label: 'Satisfaction Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 group-hover:text-primary-500 transition-colors duration-200">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Plus, Image, Text } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🚀 Ready to Start?
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Ready to Get Started?</h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Join thousands of users creating stunning posters and fliers in minutes.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Creating Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: Plus, title: '500+ Templates', description: 'Professional designs for every business type' },
              { icon: Text, title: 'AI-Powered', description: 'Smart content generation and suggestions' },
              { icon: Image, title: 'Print Ready', description: 'High-resolution files ready for printing' }
            ].map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/80 text-sm">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">Trusted by 10,000+ business owners across Kenya</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'].map((city, index, arr) => (
                <React.Fragment key={city}>
                  <div className="text-white font-semibold">{city}</div>
                  {index < arr.length - 1 && <div className="w-1 h-1 bg-white rounded-full"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

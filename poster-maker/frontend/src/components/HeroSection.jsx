import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Image, Text, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const HeroSection = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Create Stunning Flyers & Posters in Minutes
            </h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              No design skills needed! Our AI-powered platform helps small businesses and hustlers create professional marketing materials that get results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Start Creating Free
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View Templates
              </Button>
            </div>
            <div className="flex gap-8">
              <div>
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">500+</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Templates</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">10K+</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Designs Created</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">4.9★</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">User Rating</span>
              </div>
            </div>
          </div>
          {/* Right Content - Design Preview */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Design Canvas */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-100 dark:border-gray-800">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/30 dark:to-primary/10 rounded-xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Text className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-semibold text-secondary dark:text-secondary-light">Summer Sale</span>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 dark:bg-primary/40 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Plus className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-secondary-lighter dark:text-secondary font-medium">AI-Generated Content</p>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-between px-4">
                    <div className="flex items-center space-x-2">
                      <Image className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-secondary dark:text-secondary-light">Auto Images</span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-3 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs font-medium text-secondary dark:text-secondary-light">Live Preview</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-3 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium text-secondary dark:text-secondary-light">KES 50 per design</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

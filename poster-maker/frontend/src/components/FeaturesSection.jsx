import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Text, Image, Plus, ArrowRight, Search, Book } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Text,
      title: 'AI Text Generation',
      description: 'Automatically generate compelling copy for your flyers using advanced AI technology.',
      badge: 'Smart AI',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Image,
      title: 'Smart Image Selection',
      description: 'AI-powered image recommendations that perfectly match your content and brand.',
      badge: 'Auto Images',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Plus,
      title: '500+ Templates',
      description: 'Professional templates for every business type and occasion, ready to customize.',
      badge: 'Ready-to-Use',
      gradient: 'from-primary to-primary-dark'
    },
    {
      icon: Search,
      title: 'Brand Customization',
      description: 'Upload your logo, set brand colors, and maintain consistency across all designs.',
      badge: 'Your Brand',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: ArrowRight,
      title: 'One-Click Export',
      description: 'Download high-resolution files ready for print or digital use in seconds.',
      badge: 'Print Ready',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Book,
      title: 'Design Library',
      description: 'Save and organize your designs, create variations, and build a brand library.',
      badge: 'Organize',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            🚀 Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Everything You Need to Create
            <span className="text-primary block">Professional Marketing Materials</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with intuitive design tools to help your business stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-primary/20 hover:-translate-y-1 bg-white dark:bg-gray-900">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 bg-white dark:bg-gray-900">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                AI-Powered Design Assistant
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Our intelligent design system learns from millions of successful marketing materials to suggest the best layouts, colors, and content for your specific business needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-gray-100">Smart Layouts</Badge>
                <Badge className="bg-white text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-gray-100">Color Harmony</Badge>
                <Badge className="bg-white text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-gray-100">Font Pairing</Badge>
                <Badge className="bg-white text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-gray-100">Content Optimization</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Text className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">AI Suggestions</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-primary/20 rounded-full">
                    <div className="h-2 bg-primary rounded-full w-4/5"></div>
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full">
                    <div className="h-2 bg-primary rounded-full w-3/5"></div>
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full">
                    <div className="h-2 bg-primary rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

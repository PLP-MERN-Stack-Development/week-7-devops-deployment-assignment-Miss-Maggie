import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Eye } from 'lucide-react';

const TemplatesSection = () => {
  const [activeTab, setActiveTab] = useState('business');
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'business', name: 'Business', count: 120 },
    { id: 'sale', name: 'Sales & Promo', count: 98 },
    { id: 'event', name: 'Events', count: 85 },
    { id: 'restaurant', name: 'Food & Dining', count: 67 },
    { id: 'service', name: 'Services', count: 45 },
  ];

  const templates = {
    business: [
      { 
        name: 'Professional Service', 
        colors: ['bg-blue-500', 'bg-white', 'bg-gray-800'], 
        popular: true,
        preview: {
          title: 'PROFESSIONAL SERVICES',
          subtitle: 'Expert Solutions for Your Business',
          content: ['Consulting', 'Strategy', 'Growth'],
          accent: 'bg-blue-500'
        }
      },
      { 
        name: 'Modern Corporate', 
        colors: ['bg-purple-600', 'bg-white', 'bg-gray-100'], 
        popular: false,
        preview: {
          title: 'CORPORATE EXCELLENCE',
          subtitle: 'Leading Business Forward',
          content: ['Innovation', 'Leadership', 'Success'],
          accent: 'bg-purple-600'
        }
      },
      { 
        name: 'Clean Business', 
        colors: ['bg-green-600', 'bg-white', 'bg-gray-50'], 
        popular: true,
        preview: {
          title: 'CLEAN BUSINESS',
          subtitle: 'Simple. Professional. Effective.',
          content: ['Quality', 'Trust', 'Results'],
          accent: 'bg-green-600'
        }
      },
      { 
        name: 'Executive Suite', 
        colors: ['bg-gray-800', 'bg-white', 'bg-blue-600'], 
        popular: false,
        preview: {
          title: 'EXECUTIVE SUITE',
          subtitle: 'Premium Business Solutions',
          content: ['Luxury', 'Premium', 'Elite'],
          accent: 'bg-gray-800'
        }
      },
    ],
    sale: [
      { 
        name: 'Big Sale Banner', 
        colors: ['bg-red-500', 'bg-yellow-400', 'bg-white'], 
        popular: true,
        preview: {
          title: 'BIG SALE',
          subtitle: '50% OFF Everything!',
          content: ['Limited Time', 'Huge Savings', 'Shop Now'],
          accent: 'bg-red-500'
        }
      },
      { 
        name: 'Discount Flyer', 
        colors: ['bg-orange-500', 'bg-white', 'bg-gray-100'], 
        popular: true,
        preview: {
          title: 'SPECIAL DISCOUNT',
          subtitle: 'Save Big Today Only',
          content: ['30% OFF', 'All Items', 'Hurry!'],
          accent: 'bg-orange-500'
        }
      },
      { 
        name: 'Flash Sale', 
        colors: ['bg-pink-500', 'bg-purple-600', 'bg-white'], 
        popular: false,
        preview: {
          title: 'FLASH SALE',
          subtitle: '24 Hours Only!',
          content: ['Lightning', 'Deals', 'Now'],
          accent: 'bg-pink-500'
        }
      },
      { 
        name: 'Clearance Event', 
        colors: ['bg-green-600', 'bg-white', 'bg-gray-50'], 
        popular: false,
        preview: {
          title: 'CLEARANCE',
          subtitle: 'Everything Must Go!',
          content: ['Final', 'Markdowns', 'Today'],
          accent: 'bg-green-600'
        }
      },
    ],
    event: [
      { 
        name: 'Concert Poster', 
        colors: ['bg-purple-600', 'bg-pink-500', 'bg-black'], 
        popular: true,
        preview: {
          title: 'LIVE CONCERT',
          subtitle: 'An Unforgettable Night',
          content: ['Music', 'Dance', 'Party'],
          accent: 'bg-purple-600'
        }
      },
      { 
        name: 'Workshop Flyer', 
        colors: ['bg-blue-600', 'bg-white', 'bg-gray-100'], 
        popular: false,
        preview: {
          title: 'WORKSHOP',
          subtitle: 'Learn & Grow Together',
          content: ['Skills', 'Knowledge', 'Growth'],
          accent: 'bg-blue-600'
        }
      },
      { 
        name: 'Party Invitation', 
        colors: ['bg-yellow-400', 'bg-orange-500', 'bg-white'], 
        popular: true,
        preview: {
          title: 'PARTY TIME',
          subtitle: 'Join Us for Fun!',
          content: ['Celebrate', 'Dance', 'Joy'],
          accent: 'bg-yellow-400'
        }
      },
      { 
        name: 'Conference Banner', 
        colors: ['bg-gray-800', 'bg-green-600', 'bg-white'], 
        popular: false,
        preview: {
          title: 'CONFERENCE 2024',
          subtitle: 'Innovation & Excellence',
          content: ['Speakers', 'Network', 'Learn'],
          accent: 'bg-gray-800'
        }
      },
    ],
    restaurant: [
      { 
        name: 'Menu Special', 
        colors: ['bg-red-600', 'bg-yellow-500', 'bg-white'], 
        popular: true,
        preview: {
          title: 'SPECIAL MENU',
          subtitle: 'Delicious New Dishes',
          content: ['Fresh', 'Tasty', 'Quality'],
          accent: 'bg-red-600'
        }
      },
      { 
        name: 'Grand Opening', 
        colors: ['bg-green-600', 'bg-white', 'bg-gray-100'], 
        popular: false,
        preview: {
          title: 'GRAND OPENING',
          subtitle: 'New Restaurant in Town',
          content: ['Fresh', 'Local', 'Authentic'],
          accent: 'bg-green-600'
        }
      },
      { 
        name: 'Happy Hour', 
        colors: ['bg-orange-500', 'bg-yellow-400', 'bg-white'], 
        popular: true,
        preview: {
          title: 'HAPPY HOUR',
          subtitle: '5-7 PM Daily Special',
          content: ['Drinks', 'Snacks', 'Fun'],
          accent: 'bg-orange-500'
        }
      },
      { 
        name: 'Catering Service', 
        colors: ['bg-blue-600', 'bg-white', 'bg-gray-50'], 
        popular: false,
        preview: {
          title: 'CATERING',
          subtitle: 'Events Made Perfect',
          content: ['Events', 'Quality', 'Service'],
          accent: 'bg-blue-600'
        }
      },
    ],
    service: [
      { 
        name: 'Home Services', 
        colors: ['bg-blue-600', 'bg-white', 'bg-gray-100'], 
        popular: true,
        preview: {
          title: 'HOME SERVICES',
          subtitle: 'Professional Home Care',
          content: ['Reliable', 'Quality', 'Trust'],
          accent: 'bg-blue-600'
        }
      },
      { 
        name: 'Cleaning Service', 
        colors: ['bg-green-600', 'bg-white', 'bg-blue-100'], 
        popular: false,
        preview: {
          title: 'CLEANING SERVICE',
          subtitle: 'Spotless Every Time',
          content: ['Clean', 'Fresh', 'Perfect'],
          accent: 'bg-green-600'
        }
      },
      { 
        name: 'Repair Service', 
        colors: ['bg-orange-600', 'bg-white', 'bg-gray-800'], 
        popular: false,
        preview: {
          title: 'REPAIR SERVICE',
          subtitle: 'Fix It Right First Time',
          content: ['Expert', 'Fast', 'Reliable'],
          accent: 'bg-orange-600'
        }
      },
      { 
        name: 'Professional Service', 
        colors: ['bg-gray-800', 'bg-green-600', 'bg-white'], 
        popular: true,
        preview: {
          title: 'PRO SERVICE',
          subtitle: 'Excellence in Everything',
          content: ['Expert', 'Quality', 'Results'],
          accent: 'bg-gray-800'
        }
      },
    ],
  };

  const handleTemplateClick = (templateName) => {
    console.log('Template clicked:', templateName);
    alert(`Opening ${templateName} editor... This will be connected to the design editor.`);
  };

  const handlePreviewTemplate = (templateName, e) => {
    e.stopPropagation();
    console.log('Previewing template:', templateName);
    alert(`Previewing ${templateName}... This will show a full-size preview.`);
  };

  return (
    <section id="templates" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            🎨 Design Templates
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            500+ Professional Templates
            <span className="text-green-600 block">Ready to Customize</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our extensive library of professionally designed templates, organized by industry and purpose.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex w-full justify-between mb-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-1 gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex-1 flex flex-col items-center justify-center py-3 px-2 data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg transition-all min-w-0"
              >
                <span className="font-medium text-sm text-gray-900 dark:text-gray-100">{category.name}</span>
                <span className="text-xs opacity-70 text-gray-700 dark:text-gray-300">{category.count} templates</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates[category.id].map((template, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 hover:border-green-300 cursor-pointer overflow-hidden bg-white dark:bg-gray-900"
                    onClick={() => handleTemplateClick(template.name)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-[3/4] bg-white dark:bg-gray-900 p-4 flex flex-col">
                          {/* Header */}
                          <div className={`h-12 ${template.preview.accent} rounded-md mb-3 flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            <span className="text-white font-bold text-xs text-center px-2">
                              {template.preview.title}
                            </span>
                          </div>
                          
                          {/* Main Content */}
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-md p-3 mb-3 relative border border-gray-100 dark:border-gray-800">
                            <div className="text-center space-y-2">
                              <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {template.preview.subtitle}
                              </div>
                              {template.preview.content.map((item, idx) => (
                                <div key={idx} className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                                  {item}
                                </div>
                              ))}
                            </div>
                            <div className={`absolute bottom-2 right-2 w-6 h-6 ${template.preview.accent} rounded-full opacity-20`}></div>
                          </div>
                          
                          {/* Footer */}
                          <div className={`h-8 ${template.preview.accent} rounded-md flex items-center justify-center`}>
                            <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700 text-white"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTemplateClick(template.name);
                              }}
                            >
                              Use Template
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={(e) => handlePreviewTemplate(template.name, e)}
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {template.popular && (
                          <Badge className="absolute top-2 right-2 bg-green-600 text-white text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors mb-2">
                          {template.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          {template.colors.map((color, colorIndex) => (
                            <div key={colorIndex} className={`w-3 h-3 ${color} rounded-full border border-white shadow-sm`}></div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {Array.from({ length: Math.max(0, 4 - templates[category.id].length) }).map((_, idx) => (
                  <div
                    key={`skeleton-${idx}`}
                    className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 animate-pulse min-h-[300px]"
                  >
                    <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-4 mx-auto" />
                    <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded mb-2 mx-auto" />
                    <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-600 rounded mb-2 mx-auto" />
                    <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-600 rounded mx-auto" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
            Browse All Templates
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const GallerySection = () => {
  const testimonials = [
    {
      name: 'Sarah Wanjiku',
      business: 'Mama Fua Cleaning Services',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'HustleFlyerForge helped me create professional flyers for my cleaning business. Sales increased by 40% after using their designs!',
      design: 'Service Flyer'
    },
    {
      name: 'David Kiprop',
      business: 'Fresh Fruits Vendor',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'As a fruit vendor, I needed eye-catching posters for my stall. The AI suggestions were perfect and customers love the new look.',
      design: 'Market Poster'
    },
    {
      name: 'Grace Mutindi',
      business: 'Beauty Salon Owner',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'The templates are beautiful and so easy to customize. I create new promotional materials every week now!',
      design: 'Salon Promo'
    },
    {
      name: 'John Kariuki',
      business: 'Electronics Shop',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'Professional designs at affordable prices. My shop looks more established thanks to consistent branding.',
      design: 'Sale Banner'
    },
    {
      name: 'Mary Achieng',
      business: 'Catering Services',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'The food templates are amazing! My catering business has grown significantly since I started using professional flyers.',
      design: 'Menu Design'
    },
    {
      name: 'Peter Mwangi',
      business: 'Barber Shop',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'Simple, fast, and effective. Created my shop poster in minutes and it looks like it cost thousands to make!',
      design: 'Shop Poster'
    }
  ];

  const showcaseDesigns = [
    { type: 'Restaurant Menu', colors: ['bg-red-500', 'bg-yellow-400', 'bg-white'], category: 'Food & Dining' },
    { type: 'Grand Opening', colors: ['bg-primary', 'bg-white', 'bg-secondary'], category: 'Business' },
    { type: 'Sale Banner', colors: ['bg-orange-500', 'bg-white', 'bg-black'], category: 'Retail' },
    { type: 'Event Poster', colors: ['bg-purple-600', 'bg-pink-500', 'bg-white'], category: 'Events' },
    { type: 'Service Flyer', colors: ['bg-blue-600', 'bg-white', 'bg-gray-100'], category: 'Services' },
    { type: 'Product Launch', colors: ['bg-green-600', 'bg-white', 'bg-yellow-400'], category: 'Marketing' }
  ];

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            🖼️ Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Real Results from Real Hustlers
            <span className="text-primary block">Join 10,000+ Happy Customers</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            See how small businesses across Kenya are growing with professional marketing materials.
          </p>
        </div>

        {/* Design Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {showcaseDesigns.map((design, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-primary/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/5] bg-white p-6 flex flex-col relative">
                  {/* Mock Design Preview */}
                  <div className={`h-12 ${design.colors[0]} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                    <div className="w-20 h-3 bg-white/50 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/30 rounded-full"></div>
                  </div>
                  
                  <div className={`flex-1 ${design.colors[1]} rounded-lg p-4 mb-4 relative`}>
                    <div className={`w-full h-4 ${design.colors[2]} rounded mb-3`}></div>
                    <div className={`w-3/4 h-3 ${design.colors[2]} rounded mb-2`}></div>
                    <div className={`w-1/2 h-3 ${design.colors[2]} rounded mb-4`}></div>
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                      <div className={`w-16 h-8 ${design.colors[0]} rounded`}></div>
                      <div className={`w-8 h-8 ${design.colors[0]} rounded-full`}></div>
                    </div>
                  </div>
                  
                  <div className={`h-8 ${design.colors[0]} rounded-lg flex items-center justify-center`}>
                    <div className="w-24 h-2 bg-white/50 rounded-full"></div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="font-semibold text-lg mb-1">{design.type}</h3>
                      <p className="text-primary-foreground/80 text-sm">{design.category}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-lighter">{testimonial.business}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-secondary-lighter mb-3 leading-relaxed">"{testimonial.comment}"</p>
                
                <Badge className="bg-accent text-accent-foreground text-xs">
                  Used: {testimonial.design}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">10,000+</div>
            <div className="text-lg text-gray-700 dark:text-gray-300">Designs Created</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">500+</div>
            <div className="text-lg text-gray-700 dark:text-gray-300">Templates Available</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">98%</div>
            <div className="text-lg text-gray-700 dark:text-gray-300">Customer Satisfaction</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">24/7</div>
            <div className="text-lg text-gray-700 dark:text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

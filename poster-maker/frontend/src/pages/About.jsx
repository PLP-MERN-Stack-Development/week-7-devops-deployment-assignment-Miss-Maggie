import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">About HustleFlyerForge</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering Kenyan hustlers and small businesses with professional marketing materials that drive growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe every Kenyan entrepreneur deserves access to professional marketing tools. Our mission is to democratize design and help small businesses compete with larger enterprises through stunning visual content.
              </p>
              <div className="flex items-center space-x-3 text-green-600">
                <Target className="h-5 w-5" />
                <span className="font-medium">Empowering 10,000+ Kenyan businesses</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2024, HustleFlyerForge was born from the understanding that many Kenyan entrepreneurs struggle with creating professional marketing materials. We've made it our goal to provide affordable, easy-to-use design tools.
              </p>
              <div className="flex items-center space-x-3 text-green-600">
                <Heart className="h-5 w-5" />
                <span className="font-medium">Made with love in Kenya</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community First</h3>
                <p className="text-gray-600">Supporting local businesses and fostering entrepreneurship across Kenya.</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Design</h3>
                <p className="text-gray-600">Professional templates and tools that make your business stand out.</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordability</h3>
                <p className="text-gray-600">Making professional design accessible to businesses of all sizes.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Ready to Start Creating?</h2>
            <p className="text-gray-600 mb-8">Join thousands of Kenyan entrepreneurs who trust HustleFlyerForge for their marketing needs.</p>
            <Link to="/register" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

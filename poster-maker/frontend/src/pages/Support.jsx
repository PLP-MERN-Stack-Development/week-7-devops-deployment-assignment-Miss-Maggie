import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Search, HelpCircle, MessageCircle, Phone, Mail, Book, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I create my first flyer?",
      answer: "Simply choose a template from our gallery, customize it with your text and images, and download your professional flyer in minutes."
    },
    {
      question: "What file formats can I download?",
      answer: "You can download your designs in PNG, JPG, and PDF formats. PDF is recommended for printing, while PNG/JPG are perfect for digital use."
    },
    {
      question: "Can I use my own images?",
      answer: "Yes! You can upload your own images, logos, and graphics to personalize your designs completely."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with our service. Contact support for assistance."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. Your access will continue until the end of your billing period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, Visa, Mastercard, and other major payment methods popular in Kenya."
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "+254 700 123 456",
      action: "Call Now",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "support@hustleflyerforge.com",
      action: "Send Email",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Help",
      description: "Quick support via WhatsApp",
      action: "Chat on WhatsApp",
      color: "bg-green-600 hover:bg-green-700"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text bg-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Customer Support</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              We're here to help you succeed. Find answers or get in touch with our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <option.icon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
                  <Button 
                    className={`w-full ${option.color}`}
                    onClick={() => {
                      if (option.title === 'WhatsApp Help') {
                        window.open('https://wa.me/254700123456', '_blank');
                      } else if (option.title === 'Email Support') {
                        window.location.href = 'mailto:support@hustleflyerforge.com';
                      } else if (option.title === 'Phone Support') {
                        window.location.href = 'tel:+254700123456';
                      }
                    }}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-100">
                  <Book className="h-5 w-5 mr-2 text-green-600" />
                  Help Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="#" className="block text-green-600 hover:text-green-700">Getting Started Guide</a>
                <a href="#" className="block text-green-600 hover:text-green-700">Design Best Practices</a>
                <a href="#" className="block text-green-600 hover:text-green-700">Template Customization</a>
                <a href="#" className="block text-green-600 hover:text-green-700">Account Management</a>
                <a href="#" className="block text-green-600 hover:text-green-700">Billing & Payments</a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-100">
                  <Video className="h-5 w-5 mr-2 text-green-600" />
                  Video Tutorials
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="#" className="block text-green-600 hover:text-green-700">How to Create Your First Flyer</a>
                <a href="#" className="block text-green-600 hover:text-green-700">Advanced Design Techniques</a>
                <a href="#" className="block text-green-600 hover:text-green-700">Using Templates Effectively</a>
                <a href="#" className="block text-green-600 hover:text-green-700">Printing Your Designs</a>
                <a href="#" className="block text-green-600 hover:text-green-700">Mobile App Tutorial</a>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gray-100">
                <HelpCircle className="h-5 w-5 mr-2 text-green-600" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{faq.question}</h3>
                    <p className="text-gray-700 dark:text-gray-600">{faq.answer}</p>
                  </div>
                ))}
                {filteredFaqs.length === 0 && searchQuery && (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                    No FAQs found matching "{searchQuery}". Try a different search term or contact support directly.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;

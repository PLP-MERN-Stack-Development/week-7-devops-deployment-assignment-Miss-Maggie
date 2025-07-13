import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import TemplatesSection from '../components/TemplatesSection';
import Header from '../components/Header';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import GallerySection from '../components/GallerySection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome{user ? `, ${user.name}` : ''}! You are now logged in.</p>
        <p className="mt-4">This is your dashboard. You can add more features here.</p>
        <Button onClick={handleLogout} className="mt-4 bg-red-600 hover:bg-red-700 text-white">
          Logout
        </Button>
        <div className="mt-8">
          <FeaturesSection />
          <TemplatesSection />
          <PricingSection />
          <GallerySection />
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard; 
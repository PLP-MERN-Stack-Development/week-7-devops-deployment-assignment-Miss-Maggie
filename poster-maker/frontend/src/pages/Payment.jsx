
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Check, CreditCard, Smartphone } from 'lucide-react';

const Payment = () => {
  const location = useLocation();
  const [selectedPayment, setSelectedPayment] = useState('mpesa');
  
  const planDetails = location.state || {
    name: 'Hustler Pro',
    price: 'KES 1,500',
    period: 'per month',
    features: [
      'Unlimited AI designs',
      'Premium template library',
      'Advanced customization',
      'Brand kit & logo upload',
      'Priority support'
    ]
  };

  const handlePayment = async () => {
    try {
      // Map plan to Stripe Price ID
      const priceIdMap = {
        'Hustler Pro': 'price_1RgsSR00JciMELW2U3LaqlbG ', // replace with your real price ID
        // Add more plans if needed
      };

    const priceId = priceIdMap[planDetails.name];

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    } else {
      alert('Something went wrong with payment initiation.');
    }
    }catch (err) {
      console.error('Payment error:', err);
        alert('Payment failed: ' + err.message);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h1>
          <p className="text-gray-600 mt-2">You're one step away from unleashing your creativity</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Order Summary
                <Badge className="bg-green-100 text-green-800">
                  {planDetails.name}
                </Badge>
              </CardTitle>
              <CardDescription>Review your selected plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{planDetails.name}</span>
                  <span className="text-lg font-bold">{planDetails.price}</span>
                </div>
                <p className="text-gray-600">{planDetails.period}</p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <div className="space-y-2">
                    {planDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span>{planDetails.price}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Choose your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* M-Pesa */}
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPayment === 'mpesa' 
                      ? 'border-green-600 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPayment('mpesa')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                      <Smartphone className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">M-Pesa</h4>
                      <p className="text-sm text-gray-600">Pay with your mobile money</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPayment === 'mpesa' 
                        ? 'border-green-600 bg-green-600' 
                        : 'border-gray-300'
                    }`}>
                      {selectedPayment === 'mpesa' && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Credit Card */}
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPayment === 'card' 
                      ? 'border-green-600 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPayment('card')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Credit/Debit Card</h4>
                      <p className="text-sm text-gray-600">Visa, Mastercard accepted</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPayment === 'card' 
                        ? 'border-green-600 bg-green-600' 
                        : 'border-gray-300'
                    }`}>
                      {selectedPayment === 'card' && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    onClick={handlePayment}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  >
                    Complete Payment - {planDetails.price}
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600 space-y-2">
                  <p>🔒 Your payment information is secure and encrypted</p>
                  <p>💰 30-day money-back guarantee</p>
                  <p>🔄 Cancel anytime, no questions asked</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;

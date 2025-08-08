import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { GraduationCap, Droplets, Heart, Check, CreditCard, Building2 } from 'lucide-react';

const Donate = () => {
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    amount: '',
    message: ''
  });

  const impactAreas = [
    {
      icon: GraduationCap,
      title: 'Education',
      color: 'bg-blue-500',
      description: 'Building schools and training teachers',
      stats: '50+ schools built',
    },
    {
      icon: Droplets,
      title: 'Clean Water',
      color: 'bg-cyan-500',
      description: 'Installing wells and water systems',
      stats: '200+ wells installed',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      color: 'bg-green-500',
      description: 'Vaccination and medical programs',
      stats: '10,000+ children helped',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.address || !formData.amount) {
      alert('Please fill in all required fields');
      return;
    }
    
    console.log('Donation form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your donation! Please proceed with the bank transfer using the details provided.');
  };

  const handleBankTransfer = () => {
    setShowBankDetails(!showBankDetails);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your donation directly impacts the lives of children in need. 
            Every contribution helps us build a brighter future through education, clean water, and healthcare.
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Your Money Goes
            </h2>
            <p className="text-xl text-gray-600">
              100% of your donation goes directly to our programs. Administrative costs are covered separately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impactAreas.map((area, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 ${area.color} rounded-full flex items-center justify-center`}>
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-semibold text-blue-600">{area.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Donation Form
            </h2>
            <p className="text-xl text-gray-600">
              Fill in your details to make a donation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Donor Information</CardTitle>
                <CardDescription>
                  Please provide your details for the donation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Donation Amount ($) *</Label>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      min="1"
                      value={formData.amount}
                      onChange={handleInputChange}
                      placeholder="Enter donation amount"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Leave a message or dedication"
                      rows={3}
                    />
                  </div>

                  <Button onClick={handleSubmit} className="w-full" size="lg">
                    Submit Donation Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Payment Method</CardTitle>
                  <CardDescription>
                    Choose your preferred payment method
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      onClick={handleBankTransfer}
                      variant="outline"
                      className="w-full h-16 text-left justify-start"
                      size="lg"
                    >
                      <Building2 className="h-6 w-6 mr-3" />
                      <div>
                        <div className="font-semibold">Bank Transfer</div>
                        <div className="text-sm text-gray-500">Direct bank transfer</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bank Details */}
              {showBankDetails && (
                <Card className="shadow-lg border-2 border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-800">Bank Transfer Details</CardTitle>
                    <CardDescription>
                      Use these details to make your bank transfer
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label className="font-semibold text-gray-700">Account Name</Label>
                        <p className="text-gray-900 font-mono bg-white p-2 rounded border">
                          Hope Foundation
                        </p>
                      </div>
                      <div>
                        <Label className="font-semibold text-gray-700">Bank Name</Label>
                        <p className="text-gray-900 font-mono bg-white p-2 rounded border">
                          First National Bank
                        </p>
                      </div>
                      <div>
                        <Label className="font-semibold text-gray-700">Account Number</Label>
                        <p className="text-gray-900 font-mono bg-white p-2 rounded border">
                          1234567890
                        </p>
                      </div>
                      <div>
                        <Label className="font-semibold text-gray-700">Routing Number</Label>
                        <p className="text-gray-900 font-mono bg-white p-2 rounded border">
                          021000021
                        </p>
                      </div>
                      <div>
                        <Label className="font-semibold text-gray-700">SWIFT Code</Label>
                        <p className="text-gray-900 font-mono bg-white p-2 rounded border">
                          FNBKUS33
                        </p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Please include your name and "Donation" in the transfer reference</li>
                        <li>• Email us at donations@hopefoundation.org after making the transfer</li>
                        <li>• Include your donation form details in the email</li>
                        <li>• You will receive a confirmation receipt within 24 hours</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Donate to Hope Foundation?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">100% Impact</h3>
              <p className="text-sm text-gray-600">
                Every dollar goes directly to our programs. No overhead costs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Transparent</h3>
              <p className="text-sm text-gray-600">
                Full reporting on how your donation is used and its impact.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Proven Results</h3>
              <p className="text-sm text-gray-600">
                9 years of measurable impact in communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
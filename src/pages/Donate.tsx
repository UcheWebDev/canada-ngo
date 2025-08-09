import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { GraduationCap, Droplets, Heart, Check, CreditCard, Building2, Upload, ChevronLeft, ChevronRight, CheckCircle, Mail, Calendar, AlertTriangle } from 'lucide-react';

const Donate = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showValidationDialog, setShowValidationDialog] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    amount: '',
    message: '',
    proofOfTransfer: null
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

  const steps = [
    { number: 1, title: 'Donor Details', description: 'Your information' },
    { number: 2, title: 'Bank Transfer', description: 'Payment details' },
    { number: 3, title: 'Upload Proof', description: 'Transfer confirmation' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      proofOfTransfer: file
    }));
  };

  const validateStep1 = () => {
    return formData.name && formData.email && formData.address && formData.amount;
  };

  const validateStep3 = () => {
    return formData.proofOfTransfer;
  };

  const showValidationError = (message) => {
    setValidationMessage(message);
    setShowValidationDialog(true);
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !validateStep1()) {
      const missingFields = [];
      if (!formData.name) missingFields.push('Full Name');
      if (!formData.email) missingFields.push('Email Address');
      if (!formData.address) missingFields.push('Address');
      if (!formData.amount) missingFields.push('Donation Amount');
      
      showValidationError(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    if (formData.amount && parseFloat(formData.amount) <= 0) {
      showValidationError('Please enter a valid donation amount greater than $0');
      return;
    }
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalSubmit = () => {
    if (!validateStep3()) {
      showValidationError('Please upload proof of your bank transfer before completing the donation.');
      return;
    }
    
    toast({
      title: "Processing your donation...",
      description: "Please wait while we process your donation submission.",
    });
    
    // Simulate processing
    setTimeout(() => {
      console.log('Final donation submission:', formData);
      setShowSuccessDialog(true);
    }, 1000);
  };

  const handleSuccessDialogClose = () => {
    setShowSuccessDialog(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      amount: '',
      message: '',
      proofOfTransfer: null
    });
    setCurrentStep(1);
  };

  const StepIndicator = () => (
    <div className="mb-8">
      {/* Mobile: Compact Horizontal Layout */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center flex-1">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 mb-2
                ${currentStep >= step.number 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-500'
                }`}>
                {currentStep > step.number ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="font-semibold text-xs">{step.number}</span>
                )}
              </div>
              <div className="text-center">
                <div className={`text-xs font-semibold ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </div>
              </div>
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className={`absolute top-4 w-full h-0.5 ${
                  currentStep > step.number ? 'bg-blue-500' : 'bg-gray-300'
                }`} 
                style={{
                  left: `${((index + 1) / steps.length) * 100}%`,
                  width: `${(1 / steps.length) * 100}%`,
                  zIndex: -1
                }} />
              )}
            </div>
          ))}
        </div>
        {/* Current step description */}
        <div className="text-center mt-2">
          <p className="text-sm text-gray-600">
            {steps[currentStep - 1].description}
          </p>
        </div>
      </div>

      {/* Desktop: Full Horizontal Layout */}
      <div className="hidden md:flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                ${currentStep >= step.number 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-500'
                }`}>
                {currentStep > step.number ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="font-semibold">{step.number}</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <div className={`text-sm font-semibold whitespace-nowrap ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </div>
                <div className="text-xs text-gray-400 whitespace-nowrap">{step.description}</div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 lg:w-24 h-0.5 mx-4 ${
                currentStep > step.number ? 'bg-blue-500' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
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
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="shadow-lg border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Bank Transfer Details</CardTitle>
              <CardDescription>
                Use these details to make your bank transfer for ${formData.amount}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label className="font-semibold text-gray-700">Account Name</Label>
                    <p className="text-gray-900 font-mono bg-gray-50 p-3 rounded border mt-1">
                      Neil Sedaka Foundation
                    </p>
                  </div>
                  <div>
                    <Label className="font-semibold text-gray-700">Bank Name</Label>
                    <p className="text-gray-900 font-mono bg-gray-50 p-3 rounded border mt-1">
                      First National Bank
                    </p>
                  </div>
                  <div>
                    <Label className="font-semibold text-gray-700">Account Number</Label>
                    <p className="text-gray-900 font-mono bg-gray-50 p-3 rounded border mt-1">
                      1234567890
                    </p>
                  </div>
                  <div>
                    <Label className="font-semibold text-gray-700">Routing Number</Label>
                    <p className="text-gray-900 font-mono bg-gray-50 p-3 rounded border mt-1">
                      021000021
                    </p>
                  </div>
                  <div>
                    <Label className="font-semibold text-gray-700">SWIFT Code</Label>
                    <p className="text-gray-900 font-mono bg-gray-50 p-3 rounded border mt-1">
                      FNBKUS33
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Important Instructions:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Transfer Amount: <strong>${formData.amount}</strong></li>
                  <li>• Include your name "{formData.name}" in the transfer reference</li>
                  <li>• Add "Donation" in the transfer description</li>
                  <li>• After transfer, proceed to the next step to upload proof</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Upload Proof of Transfer</CardTitle>
              <CardDescription>
                Please upload a screenshot or receipt of your bank transfer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <div className="space-y-2">
                  <Label htmlFor="proof-upload" className="cursor-pointer">
                    <span className="text-blue-600 font-semibold hover:text-blue-700">
                      Click to upload file
                    </span>
                    <span className="text-gray-500"> or drag and drop</span>
                  </Label>
                  <Input
                    id="proof-upload"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <p className="text-sm text-gray-500">
                    Accepted formats: JPG, PNG, PDF (Max 10MB)
                  </p>
                </div>
              </div>

              {formData.proofOfTransfer && (
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">File uploaded successfully:</span>
                  </div>
                  <p className="text-green-700 mt-1">{formData.proofOfTransfer.name}</p>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Donation Summary:</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Amount:</strong> ${formData.amount}</p>
                  {formData.message && <p><strong>Message:</strong> {formData.message}</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
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

      {/* Donation Form with Stepper */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Donation Process
            </h2>
            <p className="text-xl text-gray-600">
              Complete your donation in three simple steps
            </p>
          </div>

          <StepIndicator />

          <div className="max-w-2xl mx-auto">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevStep}
                variant="outline"
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={handleNextStep}
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleFinalSubmit}
                  className="flex items-center bg-green-600 hover:bg-green-700"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Complete Donation
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Donate to Neil Sedaka Foundation?</h2>
          
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

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <AlertDialogTitle className="text-2xl text-green-800">
              Donation Successful! 🎉
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center space-y-3 pt-2">
              <p className="text-gray-600">
                Thank you for your generous donation of <span className="font-semibold text-green-600">${formData.amount}</span>!
              </p>
              <div className="bg-green-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-center text-sm text-green-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Confirmation email sent to {formData.email}
                </div>
                <div className="flex items-center justify-center text-sm text-green-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Processing within 24 hours
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Your donation will make a real difference in children's lives. We'll keep you updated on the impact of your contribution.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center">
            <AlertDialogAction 
              onClick={handleSuccessDialogClose}
              className="bg-green-600 hover:bg-green-700 px-8"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Validation Dialog */}
      <Dialog open={showValidationDialog} onOpenChange={setShowValidationDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
            <DialogTitle className="text-xl text-orange-800">
              Validation Error
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              <p className="text-gray-600">
                {validationMessage}
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center">
            <Button 
              onClick={() => setShowValidationDialog(false)}
              className="px-8"
            >
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Donate;
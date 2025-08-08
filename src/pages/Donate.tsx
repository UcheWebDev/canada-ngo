import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { GraduationCap, Droplets, Heart, Check } from 'lucide-react';

const Donate = () => {
  const { toast } = useToast();

  const donationAmounts = [
    { amount: 25, description: 'Provides school supplies for one child for a month' },
    { amount: 50, description: 'Funds clean water access for a family of four' },
    { amount: 100, description: 'Covers vaccination costs for 10 children' },
    { amount: 250, description: 'Sponsors a child\'s education for one semester' },
  ];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: 'Education',
      color: 'bg-primary',
      description: 'Building schools and training teachers',
      stats: '50+ schools built',
    },
    {
      icon: Droplets,
      title: 'Clean Water',
      color: 'bg-water',
      description: 'Installing wells and water systems',
      stats: '200+ wells installed',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      color: 'bg-growth',
      description: 'Vaccination and medical programs',
      stats: '10,000+ children helped',
    },
  ];

  const handleDonate = (amount?: number) => {
    toast({
      title: "Thank you for your generosity!",
      description: amount 
        ? `Your donation of $${amount} will make a real difference.`
        : "Your custom donation will help change lives.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your donation directly impacts the lives of children in need. 
            Every contribution helps us build a brighter future through education, clean water, and healthcare.
          </p>
          <Button size="lg" onClick={() => handleDonate()} className="text-lg px-8 py-4">
            Donate Now
          </Button>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where Your Money Goes
            </h2>
            <p className="text-xl text-muted-foreground">
              100% of your donation goes directly to our programs. Administrative costs are covered separately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impactAreas.map((area, index) => (
              <Card key={index} className="text-center border-0 shadow-soft">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 ${area.color} rounded-full flex items-center justify-center`}>
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-semibold text-primary">{area.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Amounts */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              See exactly how your donation will help children in need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {donationAmounts.map((donation, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">${donation.amount}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-growth mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{donation.description}</p>
                  </div>
                  <Button 
                    onClick={() => handleDonate(donation.amount)} 
                    className="w-full"
                  >
                    Donate ${donation.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="border-0 shadow-soft max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-xl">Custom Amount</CardTitle>
                <CardDescription>
                  Choose your own donation amount
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleDonate()} 
                  variant="outline" 
                  className="w-full"
                >
                  Enter Custom Amount
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">Why Donate to Hope Foundation?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Check className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">100% Impact</h3>
              <p className="text-sm text-muted-foreground">
                Every dollar goes directly to our programs. No overhead costs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Check className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Transparent</h3>
              <p className="text-sm text-muted-foreground">
                Full reporting on how your donation is used and its impact.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Check className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Proven Results</h3>
              <p className="text-sm text-muted-foreground">
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
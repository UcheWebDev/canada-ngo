import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { GraduationCap, Droplets, Heart, ArrowRight, Users, Globe, Target, Award } from 'lucide-react';
import heroEducation from '@/assets/hero-education.jpg';
import heroWater from '@/assets/hero-water.jpg';
import heroHealth from '@/assets/hero-health.jpg';
import projectSchool from '@/assets/school.png';
import projectWell from '@/assets/project-well.jpg';
import projectClinic from '@/assets/unnamed.png';
import teacherClassroom from '@/assets/teacher-classroom.jpg';
import techEducation from '@/assets/tech-education.jpg';
import communityCentered from '@/assets/Gemini_Generated_Image_ox9cdyox9cdyox9c (2).png';
import globalImpact from '@/assets/Gemini_Generated_Image_ox9cdyox9cdyox9c.png';
import resultsDriven from '@/assets/Gemini_Generated_Image_9pegcs9pegcs9peg.png';
import provenExcellence from '@/assets/Gemini_Generated_Image_gwfvpgwfvpgwfvpg.png';

const Index = () => {
  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '500+', label: 'Water Systems Installed' },
    { number: '50K+', label: 'Children Helped' },
    { number: '25+', label: 'Countries Served' },
  ];

  const notableProjects = [
    {
      title: 'Global Education Initiative',
      location: 'Multiple Countries',
      description: 'State-of-the-art educational facilities serving thousands of students with solar power and modern technology.',
      image: projectSchool,
      year: '2023',
      impact: '5,000+ students enrolled globally'
    },
    {
      title: 'Global Clean Water Initiative',
      location: 'Developing Nations',
      description: 'Solar-powered water systems providing clean water to communities across multiple continents.',
      image: resultsDriven,
      year: '2022',
      impact: '25,000+ people served daily'
    },
    {
      title: 'Global Mobile Health Program',
      location: 'Remote Communities Worldwide',
      description: 'Mobile clinics bringing vaccinations and healthcare to remote communities across the globe.',
      image: projectClinic,
      year: '2023',
      impact: '15,000+ children vaccinated'
    },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Building schools and providing quality education to children who need it most.',
      image: heroEducation,
      color: 'bg-primary'
    },
    {
      icon: Droplets,
      title: 'Clean Water',
      description: 'Installing wells and water systems to provide safe drinking water.',
      image: heroWater,
      color: 'bg-water'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Vaccination programs and medical care to keep children healthy.',
      image: heroHealth,
      color: 'bg-growth'
    },
  ];

  const foundationValues = [
    {
      title: 'Community-Centered',
      description: 'We work alongside communities, not for them, ensuring sustainable local ownership',
      image: communityCentered
    },
    {
      title: 'Global Impact',
      description: 'Operating across 25+ countries with ongoing global expansion',
      image: globalImpact
    },
    {
      title: 'Results-Driven',
      description: '100% of donations go directly to programs with transparent impact reporting',
      image: resultsDriven
    },
    {
      title: 'Proven Excellence',
      description: '9 years of measurable global impact with international recognition and awards',
      image: provenExcellence
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Foundation Overview */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Neil Sedaka Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Named after the legendary singer-songwriter Neil Sedaka, our foundation carries forward his 
              legacy of bringing joy and hope to people's lives through transformative humanitarian work across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Neil Sedaka Foundation is dedicated to breaking the cycle of poverty in underserved communities worldwide
                  through sustainable development programs focused on education, clean water access, and healthcare. 
                  We believe that every child deserves the opportunity to reach their full potential, regardless of 
                  where they are born.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where geographical boundaries and economic circumstances no longer determine 
                  a child's access to quality education, clean water, and essential healthcare. Through partnerships 
                  with local communities worldwide, we're building lasting infrastructure and capacity that will benefit 
                  generations to come.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {foundationValues.map((value, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                    {/* <h4 className="text-white font-bold text-lg mb-2">{value.title}</h4> */}
                    {/* <p className="text-white/90 text-sm leading-relaxed">{value.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Foundation Goals */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our 2025 Goals</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Ambitious targets that will transform thousands more lives across the globe
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50</div>
                <div className="text-lg opacity-90">New Projects</div>
                <div className="text-sm opacity-75 mt-2">Reaching 25,000+ additional beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200</div>
                <div className="text-lg opacity-90">Water Systems</div>
                <div className="text-sm opacity-75 mt-2">Serving 50,000+ community members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10,000</div>
                <div className="text-lg opacity-90">Children Vaccinated</div>
                <div className="text-sm opacity-75 mt-2">Complete immunization programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We focus on three critical areas that create lasting change in children's lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105">
                <div className="aspect-video relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 ${program.color} rounded-full flex items-center justify-center`}>
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Projects Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notable Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how your support translates into real, life-changing projects across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notableProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300">
                <div className="aspect-video relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-secondary">
                    📍 {project.location}
                  </CardDescription>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-growth">
                      ✅ {project.impact}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from the children and communities we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={teacherClassroom} 
                  alt="Teacher Grace"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-foreground">Grace Nakamura</h3>
                  <p className="text-sm text-muted-foreground">Teacher, Global Education Program</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic">
                "Since the new school opened, I've seen incredible changes in my students. 
                They're more engaged, attendance has improved by 85%, and for the first time, 
                we have equal gender participation in education. The solar-powered computers 
                have opened up a whole new world for these children."
              </blockquote>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={techEducation} 
                  alt="Student learning"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-foreground">Maria Okafor</h3>
                  <p className="text-sm text-muted-foreground">Parent, Global Water Program</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic">
                "Before the water project, my children would miss school to walk hours 
                for water. Now they attend every day and my daughter dreams of becoming a doctor. 
                Clean water has given my family hope and my children a future."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of supporters who are already changing lives. 
            Your contribution can help a child access education, clean water, or healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/donate">
                Start Donating <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-primary hover:bg-white hover:text-primary">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Droplets, Heart, Users, Calendar, MapPin, Award } from 'lucide-react';
import projectSchool from '@/assets/school (1).png';
import projectWell from '@/assets/water.png';
import projectClinic from '@/assets/health.png';
import teacherClassroom from '@/assets/teacher-classroom.jpg';
import techEducation from '@/assets/tech-education.jpg';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: '100+ Projects Completed',
      description: 'Modern educational facilities across 25+ countries worldwide',
      color: 'bg-primary'
    },
    {
      icon: Droplets,
      title: '500+ Water Systems Installed',
      description: 'Solar-powered water systems serving 100,000+ people daily worldwide',
      color: 'bg-water'
    },
    {
      icon: Heart,
      title: '50,000+ Children Helped',
      description: 'Comprehensive programs in underserved communities globally',
      color: 'bg-growth'
    },
    {
      icon: Users,
      title: '1,000+ Local Staff Trained',
      description: 'Ongoing professional development and support programs worldwide',
      color: 'bg-accent'
    },
  ];

  const projectHighlights = [
    {
      title: 'Global Education Initiative',
      location: 'Multiple Countries',
      year: '2020-2023',
      description: 'Comprehensive educational campuses including primary schools, secondary schools, and teacher training facilities.',
      image: projectSchool,
      details: [
        '5,000+ students enrolled across all levels globally',
        'Solar-powered computer labs with 200+ workstations',
        'Libraries with 25,000+ books in local languages',
        'Science laboratories and workshop facilities',
        'Teacher housing for 100+ educators worldwide'
      ]
    },
    {
      title: 'Global Clean Water Initiative',
      location: 'Developing Nations Worldwide',
      year: '2019-2022',
      description: 'Large-scale water infrastructure bringing clean water to underserved communities worldwide.',
      image: projectWell,
      details: [
        '100+ solar-powered water points installed globally',
        '25,000+ families with daily water access',
        '65% reduction in waterborne diseases',
        'Women and girls save 4+ hours daily',
        'Community-managed water committees established'
      ]
    },
    {
      title: 'Global Mobile Health Initiative',
      location: 'Remote Communities Worldwide',
      year: '2021-Present',
      description: 'Mobile clinics bringing essential healthcare services to remote communities across the globe.',
      image: projectClinic,
      details: [
        '50+ mobile units covering 500+ communities',
        '15,000+ children vaccinated annually',
        'Maternal health services for 5,000+ women',
        'Training for 200+ community health workers',
        'Telemedicine connections to urban hospitals'
      ]
    },
  ];

  const milestones = [
    { year: '2015', event: 'Neil Sedaka Foundation established', impact: 'First project launched globally' },
    { year: '2017', event: 'Water program launched', impact: '50 water systems completed in first year' },
    { year: '2019', event: 'Healthcare initiative begins', impact: 'First mobile clinic deployed' },
    { year: '2021', event: 'Technology integration', impact: 'Solar-powered facilities in 50+ locations' },
    { year: '2023', event: 'Global expansion', impact: '100th project completed, serving 50,000+ people' },
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe every child deserves access to education, clean water, and healthcare. 
            Our mission is to break the cycle of poverty through sustainable development programs.
          </p>
        </div>
      </section>

      {/* Enhanced Mission Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 ${achievement.color} rounded-full flex items-center justify-center`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Highlights
            </h2>
            <p className="text-xl text-muted-foreground">
              Deep dive into some of our most impactful initiatives
            </p>
          </div>

          <div className="space-y-12">
            {projectHighlights.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full rounded-2xl shadow-soft"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-soft">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                      <MapPin className="h-4 w-4 ml-4" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <ul className="space-y-2">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to transform lives
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{milestone.event}</h3>
                    <span className="text-sm text-muted-foreground">{milestone.year}</span>
                  </div>
                  <p className="text-muted-foreground">{milestone.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Voices from the Field
            </h2>
            <p className="text-xl text-muted-foreground">
              Stories from our team members and community partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <img 
                    src={teacherClassroom} 
                    alt="Sarah Johnson"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">Dr. Sarah Johnson</CardTitle>
                    <CardDescription>Country Director, Tanzania</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic">
                  "In my 15 years working in international development, I've never seen such 
                  dramatic and sustainable change. Our approach of working alongside communities, 
                  not for them, has created lasting transformation. The children in our programs 
                  aren't just surviving - they're thriving and dreaming big."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <img 
                    src={techEducation} 
                    alt="James Mbeki"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">James Mbeki</CardTitle>
                    <CardDescription>Community Leader, Kibera</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic">
                  "Hope Foundation didn't just bring us clean water - they brought us dignity. 
                  They trained our youth to maintain the systems, created jobs, and showed us 
                  that we have the power to change our own community. This is partnership at its best."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              Founded in 2015, Neil Sedaka Foundation started with a simple belief: every child deserves hope.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Neil Sedaka Foundation was born from the vision of a group of educators, healthcare workers, 
              and community leaders who witnessed firsthand the challenges facing children in underserved 
              communities worldwide. Named after the legendary singer-songwriter Neil Sedaka, our foundation 
              carries forward his legacy of bringing joy and hope to people's lives. What started as a small 
              initiative has grown into a comprehensive global program serving thousands 
              of children across 25+ countries on multiple continents.
            </p>
            
            <p>
              Today, we work directly with local communities to identify their most pressing needs 
              and develop sustainable solutions. Our approach is rooted in partnership and respect, 
              ensuring that communities worldwide are active participants in creating lasting change.
            </p>
            
            <p>
              With over 100 projects completed, 500+ water systems installed, and 50,000+ children helped, 
              we're proud of the progress we've made. But we know there's still so much more work to do. 
              Every donation, every volunteer hour, and every act of support brings us closer to our 
              vision of a world where every child has the opportunity to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
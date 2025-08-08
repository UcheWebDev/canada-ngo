import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import heroEducation from '@/assets/hero-education.jpg';
import heroWater from '@/assets/hero-water.jpg';
import heroHealth from '@/assets/hero-health.jpg';
import projectSchool from '@/assets/project-school.jpg';
import teacherClassroom from '@/assets/teacher-classroom.jpg';

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const heroSlides = [
    {
      image: heroEducation,
      title: "Global Education for Every Child",
      subtitle: "Building Schools, Building Dreams Worldwide",
      description: "Every child deserves access to quality education. Join us in creating lasting change through innovative educational programs across the globe.",
      primaryAction: "Support Education",
      secondaryAction: "Learn More"
    },
    {
      image: heroWater,
      title: "Clean Water for Global Communities",
      subtitle: "One Well, Countless Lives Worldwide",
      description: "Safe drinking water is a fundamental human right. Our water systems bring hope and health to communities across developing nations.",
      primaryAction: "Fund Water Projects",
      secondaryAction: "See Impact"
    },
    {
      image: heroHealth,
      title: "Global Healthcare Access",
      subtitle: "Protecting Children's Future Worldwide",
      description: "Through mobile clinics and vaccination programs, we ensure children worldwide have access to essential healthcare services.",
      primaryAction: "Support Healthcare",
      secondaryAction: "Our Programs"
    },
    {
      image: teacherClassroom,
      title: "Empowering Global Communities",
      subtitle: "Training Tomorrow's Leaders Worldwide",
      description: "We work alongside communities globally to train teachers, healthcare workers, and local leaders who create sustainable change from within.",
      primaryAction: "Get Involved",
      secondaryAction: "Community Stories"
    },
    {
      image: projectSchool,
      title: "100+ Projects Worldwide",
      subtitle: "Celebrating Global Impact",
      description: "From our first project in 2015 to over 100 facilities across multiple continents, see how your support transforms lives globally.",
      primaryAction: "Donate Now",
      secondaryAction: "View Projects"
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-play functionality
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {heroSlides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                  <div className="mb-4">
                    <span className="inline-block bg-hope/20 backdrop-blur-sm border border-hope/30 text-hope px-4 py-2 rounded-full text-sm font-semibold">
                      {slide.subtitle}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8 py-4">
                      <Link to="/donate">{slide.primaryAction}</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                      <Link to="/about">{slide.secondaryAction}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-hope scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
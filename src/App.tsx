import image_69f8da7c8cf70a7b8d71b07aa063ef83385f9c65 from 'figma:asset/69f8da7c8cf70a7b8d71b07aa063ef83385f9c65.png';
import image_aeb38f28f0bfd2f61b9a904a661f2f95eefb985c from 'figma:asset/aeb38f28f0bfd2f61b9a904a661f2f95eefb985c.png';
import image_f9769dcaae3468c127c2c2c83d7733502f2456f7 from 'figma:asset/f9769dcaae3468c127c2c2c83d7733502f2456f7.png';
import { Heart, Sparkles, Gamepad2, TrendingUp, Menu, X, ArrowRight, Star, Users, BookOpen, Target, Brain, Palette, Smile, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Badge } from './components/Badge';
import { FeatureIcon } from './components/FeatureIcon';
import imgLogoLumiNest from "figma:asset/28274f84fcdb56e86e184e4cad2e9616e6dba7dd.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f3ef]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#fcfaf8] border-b border-[#e1d1c1] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src={imgLogoLumiNest} alt="LumiNest" className="h-20 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#000000] hover:text-[#a083ac] transition-colors font-['Nunito_Sans'] font-medium">About</a>
              <a href="#moppo" className="text-[#000000] hover:text-[#a083ac] transition-colors font-['Nunito_Sans'] font-medium">Moppo Monster</a>
              <a href="#services" className="text-[#000000] hover:text-[#a083ac] transition-colors font-['Nunito_Sans'] font-medium">What We Do</a>
              <a href="#approach" className="text-[#000000] hover:text-[#a083ac] transition-colors font-['Nunito_Sans'] font-medium">Our Approach</a>
              <Button variant="primary" size="small">Get In Touch</Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#e1d1c1]">
            <div className="px-4 py-4 space-y-4">
              <a href="#about" className="block text-[#000000] hover:text-[#a083ac] font-['Nunito_Sans']">About</a>
              <a href="#moppo" className="block text-[#000000] hover:text-[#a083ac] font-['Nunito_Sans']">Moppo Monster</a>
              <a href="#services" className="block text-[#000000] hover:text-[#a083ac] font-['Nunito_Sans']">What We Do</a>
              <a href="#approach" className="block text-[#000000] hover:text-[#a083ac] font-['Nunito_Sans']">Our Approach</a>
              <Button variant="primary" size="small" className="w-full">Get In Touch</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#ccbcd2] via-[#a083ac] to-[#6c5077] py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white blur-2xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-white" size={24} />
                <span className="text-white/90 font-['Nunito_Sans']">Where Creativity Meets Care</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-white mb-6 leading-tight">
                LumiNest
              </h1>
              <p className="text-2xl font-['FONTSPRING_DEMO_-_Gelica_Md'] text-white/95 mb-4">
                Making Design Inclusive, Therapeutic, and Meaningful
              </p>
              <p className="text-xl text-white/90 font-['Nunito_Sans'] mb-8 leading-relaxed">
                A wellbeing and early childhood development studio with a focus on supporting autistic children through creativity, accessibility, and play. Designing therapeutic resources for children aged 2–6.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="large">
                  <Gamepad2 size={20} />
                  Explore Moppo Monster
                </Button>
                <Button variant="outline" size="large">
                  Learn More
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1508431640151-f2217ef26c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc2NDc3NDAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Crianças de diferentes origens brincando juntas"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl hidden lg:block">
                <div className="flex items-center gap-3">
                  <Heart className="text-[#a083ac]" fill="#a083ac" size={32} />
                  <div>
                    <div className="text-2xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#a083ac]">Ages 2–6</div>
                    <div className="text-sm font-['Nunito_Sans'] text-gray-600">Therapeutic Design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#fcfaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-4">
              About LumiNest
            </h2>
            <p className="text-xl font-['Nunito_Sans'] text-[#686363] max-w-3xl mx-auto">
              LumiNest is a studio co-founded to combine design, wellbeing, and education. Our mission is to create inclusive digital experiences that help young children learn through play while supporting parents and educators with professional, trustworthy resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Inclusive Design"
              description="Accessibility at the core"
              content="We design with neurodiversity in mind, creating experiences that are accessible, calming, and supportive for all children, especially those on the autism spectrum."
              variant="sage"
              icon={<Users className="text-[#6f8872]" size={32} />}
            />
            <Card
              title="Therapeutic Approach"
              description="Inspired by OT principles"
              content="Our work is grounded in Occupational Therapy strategies, using play-based learning to support sensory regulation, motor skills, and cognitive development."
              variant="lavender"
              icon={<Brain className="text-[#a083ac]" size={32} />}
            />
            <Card
              title="Creative Play"
              description="Learning through joy"
              content="We believe in the power of play. Our resources encourage exploration, creativity, and positive reinforcement in a safe, predictable environment."
              variant="sky"
              icon={<Palette className="text-[#88a9af]" size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Moppo Monster Section */}
      <section id="moppo" className="py-20 bg-[#f2ebe3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary">Project Highlight</Badge>
            <h2 className="text-4xl lg:text-5xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mt-6 mb-4">
              Moppo Monster
            </h2>
            <p className="text-xl font-['Nunito_Sans'] text-[#686363] max-w-3xl mx-auto">
              Our first early learning game, created with a therapeutic basis inspired by Occupational Therapy. Designed for children aged 2–6, with a special focus on supporting autistic children in their early years.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-[24px] mt-[0px] mr-[0px] ml-[0px] text-[24px]">
                Therapeutic Learning Through Play
              </h3>
              <p className="text-lg font-['Nunito_Sans'] text-[#686363] mb-6 leading-relaxed">
                Moppo Monster is more than just a game—it's a carefully crafted therapeutic tool that supports early childhood development through engaging, sensory-friendly gameplay.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#b9c6ba] flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Nunito_Sans'] font-semibold text-[#000000] mb-1">Calm Visuals & Predictable Feedback</h4>
                    <p className="font-['Nunito_Sans'] text-[#686363]">Designed to support sensory regulation with gentle colors and consistent responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ccbcd2] flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Nunito_Sans'] font-semibold text-[#000000] mb-1">Positive Reinforcement</h4>
                    <p className="font-['Nunito_Sans'] text-[#686363]">Encouraging voice prompts and colorful visual cues celebrate every achievement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c2d3d6] flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Nunito_Sans'] font-semibold text-[#000000] mb-1">Interactive Mini-Games</h4>
                    <p className="font-['Nunito_Sans'] text-[#686363]">Activities that develop fine motor skills, recognition, and problem-solving abilities.</p>
                  </div>
                </div>
              </div>

              <Button variant="primary" size="large">
                <Gamepad2 size={20} />
                Learn About Moppo
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#c0d3c3] to-[#7ea584] p-8 bg-[rgb(22,178,234)] p-[17px]">
                  <ImageWithFallback
                    src={image_69f8da7c8cf70a7b8d71b07aa063ef83385f9c65}
                    alt="Moppo Monster gameplay"
                    className="w-full h-80 object-cover rounded-2xl px-[0px] py-[20px] mx-[0px] my-[-14px]"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#a083ac] text-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <Smile size={32} className="mx-auto mb-2" />
                    <p className="font-['Nunito_Sans'] font-semibold">OT Inspired</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Moppo Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#ccbcd2] rounded-2xl flex items-center justify-center mb-4">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-3">
                Cognitive Development
              </h3>
              <p className="font-['Nunito_Sans'] text-[#686363]">
                Pattern recognition, memory games, and problem-solving activities tailored for early learners.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#7ea584] rounded-2xl flex items-center justify-center mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-3">
                Fine Motor Skills
              </h3>
              <p className="font-['Nunito_Sans'] text-[#686363]">
                Touch-based interactions designed to improve hand-eye coordination and precision.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#88a9af] rounded-2xl flex items-center justify-center mb-4">
                <Smile className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-3">
                Emotional Regulation
              </h3>
              <p className="font-['Nunito_Sans'] text-[#686363]">
                Calm environments and positive feedback help children manage emotions and build confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-20 bg-[#fcfaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-4">
              What We Do
            </h2>
            <p className="text-xl font-['Nunito_Sans'] text-[#686363] max-w-3xl mx-auto">
              Combining therapeutic design with playful learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#b9c6ba] to-[#6f8872] rounded-3xl p-10 text-white shadow-xl">
              <Gamepad2 size={48} className="mb-4" />
              <h3 className="text-3xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] mb-4 text-[30px]">Digital Games and Apps</h3>
              <ul className="space-y-3 font-['Nunito_Sans']">
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Playful and therapeutic learning tools for early years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Creative tools inspired by educational and therapeutic strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Child-friendly yet professional design language</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#ccbcd2] to-[#a083ac] rounded-3xl p-10 text-white shadow-xl">
              <Palette size={48} className="mb-4" />
              <h3 className="text-3xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] mb-4">Visual Identity and Branding</h3>
              <ul className="space-y-3 font-['Nunito_Sans']">
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Inclusive and accessible brand design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Warm, nurturing visual systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Design that communicates trust and care</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c2d3d6] to-[#88a9af] rounded-3xl p-10 text-white shadow-xl">
              <BookOpen size={48} className="mb-4" />
              <h3 className="text-3xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] mb-4">Early Childhood Resources</h3>
              <ul className="space-y-3 font-['Nunito_Sans']">
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Professional resources for parents and educators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Evidence-based developmental materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/90">• Trustworthy guidance and support tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-[#e6e7dd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-4">
              Our Approach
            </h2>
            <p className="text-xl font-['Nunito_Sans'] text-[#686363] max-w-3xl mx-auto">
              Creating inclusive experiences for neurodiverse children
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={image_f9769dcaae3468c127c2c2c83d7733502f2456f7}
                alt="Inclusive therapy approach"
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-6">
                Supporting Autistic Children
              </h3>
              <p className="text-lg font-['Nunito_Sans'] text-[#686363] mb-6 leading-relaxed text-left">
                Our focus is on creating digital experiences that are specifically designed with autistic children in mind. We understand that every child is unique, and our approach respects sensory needs, learning styles, and individual pacing.
              </p>
              
              <div className="space-y-4">
                <Card
                  title="Sensory-Friendly Design"
                  description="Calm colors, predictable patterns"
                  content="We avoid overwhelming visuals and sounds, creating environments that support rather than stress."
                  variant="sage"
                />
                <Card
                  title="Structured Play"
                  description="Clear expectations, consistent feedback"
                  content="Activities with predictable outcomes help children feel safe and confident as they explore."
                  variant="lavender"
                />
                <Card
                  title="Celebrate Progress"
                  description="Positive reinforcement at every step"
                  content="Every interaction is an opportunity for encouragement, building self-esteem and motivation."
                  variant="sky"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[#fcfaf8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} className="text-[#a083ac] fill-[#a083ac]" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl font-['Nunito_Sans'] text-[#000000] mb-6 leading-relaxed">
              "Moppo Monster has been wonderful for my son. The calm visuals and encouraging sounds help him stay engaged without getting overwhelmed. It's the first app that truly feels designed with his needs in mind."
            </blockquote>
            <p className="font-['Nunito_Sans'] font-semibold text-[#686363]">— Parent of a 4-year-old</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#88a9af] via-[#54767d] to-[#88a9af] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-['FONTSPRING_DEMO_-_Gelica_SBd'] mb-6">
            Let<span className="font-['Nunito_Sans']">'</span>s Create Together
          </h2>
          <p className="text-xl font-['Nunito_Sans'] text-white/90 mb-8 text-[16px]">
            Interested in working with LumiNest or learning more about Moppo Monster? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large">
              <Heart size={20} />
              Get In Touch
            </Button>
            <Button variant="outline" size="large">
              Download Moppo Monster
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f2ebe3] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src={image_aeb38f28f0bfd2f61b9a904a661f2f95eefb985c} alt="LumiNest" className="h-16 w-auto mb-4" />
              <p className="font-['Nunito_Sans'] text-[#686363]">
                Where creativity meets care — making design inclusive, therapeutic, and meaningful.
              </p>
            </div>
            <div>
              <h4 className="font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-4">Projects</h4>
              <ul className="space-y-2 font-['Nunito_Sans']">
                <li><a href="#moppo" className="text-[#686363] hover:text-[#a083ac]">Moppo Monster</a></li>
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">Our Portfolio</a></li>
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-4">Resources</h4>
              <ul className="space-y-2 font-['Nunito_Sans']">
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">Blog</a></li>
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">OT Insights</a></li>
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">Parent Guides</a></li>
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">Educator Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['FONTSPRING_DEMO_-_Gelica_SBd'] text-[#000000] mb-4">Connect</h4>
              <ul className="space-y-2 font-['Nunito_Sans']">
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">About Us</a></li>
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">Contact</a></li>
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">Collaborations</a></li>
                <li><a href="#" className="text-[#686363] hover:text-[#a083ac]">Press Kit</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e1d1c1] pt-8 text-center">
            <p className="font-['Nunito_Sans'] text-[#686363]">
              © 2024 LumiNest. All rights reserved. Made with <Heart size={16} className="inline text-[#a083ac]" fill="#a083ac" /> for inclusive early childhood development.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

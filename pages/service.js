import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { 
  Code, Smartphone, FileText, Palette, Globe, 
  Zap, Users, Award, ArrowRight, CheckCircle,
  Monitor, Database, Cloud, Shield
} from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React/Next.js", "Node.js Backend", "Responsive Design", "SEO Optimized"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Resume Crafting",
      description: "Professional resume and CV design that stands out to employers",
      features: ["ATS Friendly", "Modern Design", "Industry Specific", "Multiple Formats"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Palette,
      title: "Portfolio Design",
      description: "Stunning portfolios that showcase your work and skills effectively",
      features: ["Custom Design", "Interactive Elements", "Mobile Responsive", "Fast Loading"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const technologies = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Monitor },
    { name: "Node.js", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Security", icon: Shield }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "1+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <Layout>
      <Head>
        <title>Codelance Technologies - Digital Solutions</title>
        <meta name="description" content="Expert web development, mobile apps, resume crafting, and stunning portfolios. Transform your vision into reality." />
      </Head>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 rounded-full glass-effect ai-border text-sm font-medium text-vibrant-cyan flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Codelance Technologies</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-neural leading-tight">
            Transforming Ideas Into
            <br />
            <span className="text-vibrant-blue">Digital Reality</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-vibrant-teal mb-10 max-w-4xl mx-auto leading-relaxed">
            Expert web development, mobile apps, resume crafting, and stunning portfolios. 
            Transform your vision into reality with cutting-edge solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://codelance.online"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-4 text-lg font-medium flex items-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="frosted-card p-6 text-center hover-card">
              <div className="text-3xl md:text-4xl font-bold text-vibrant-cyan mb-2">{stat.value}</div>
              <div className="text-vibrant-teal text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <div className="px-4 py-1 rounded-full glass-effect ai-border text-sm font-medium text-vibrant-purple">
                About Me
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-vibrant-blue">
              From Curious Developer to Digital Expert
            </h2>
            <p className="text-lg text-vibrant-teal mb-6 leading-relaxed">
              Started as a curious developer, I've evolved into a full-stack professional specializing in modern web technologies and user-centered design.
            </p>
            <p className="text-lg text-vibrant-teal mb-8 leading-relaxed">
              My passion lies in transforming complex ideas into simple, elegant solutions that deliver real value to businesses and users alike.
            </p>
            <p className="text-lg text-vibrant-teal mb-8 leading-relaxed">
              Today, I help startups and established companies build their digital presence through custom websites, mobile apps, and comprehensive digital strategies.
            </p>
          </div>
          
          <div className="frosted-card p-8">
            <h3 className="text-2xl font-bold text-vibrant-cyan mb-6">Technologies I Use</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 glass-effect-hover rounded-lg">
                  <tech.icon className="w-6 h-6 text-vibrant-purple" />
                  <span className="text-vibrant-teal font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




    </Layout>
  );
};

export default Service;
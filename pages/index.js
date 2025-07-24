import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import { 
  BookOpen, FileText, Users, Star, ChevronRight, Search, Calendar, Trophy, Zap,
  ArrowRight, Lightbulb, CheckCircle, BarChart3, Download
} from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('semester1');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    {
      icon: BookOpen,
      value: "1K+",
      label: "Study Materials",
      color: "text-purple-400"
    },
    {
      icon: FileText,
      value: ".5K+",
      label: "Previous Papers",
      color: "text-pink-400"
    },
    {
      icon: Users,
      value: "10K+",
      label: "Active Students",
      color: "text-blue-400"
    },
    {
      icon: Star,
      value: "4.5+",
      label: "User Rating",
      color: "text-amber-400"
    }
  ];

  const semesters = [
    { id: 'semester1', name: 'Semester 1', subjects: [
      { id: 'mathematics-i', name: 'Mathematics-I' },
      { id: 'physics', name: 'Physics' },
      { id: 'basic-electrical-and-electronics-engineering', name: 'Basic Electrical and Electronics Engineering' },
      { id: 'engineering-graphics-and-design', name: 'Engineering Graphics and Design' },
      { id: 'fundamentals-of-computer', name: 'Fundamentals of Computer' }
    ]},
    { id: 'semester2', name: 'Semester 2', subjects: [
      { id: 'mathematics-ii', name: 'Mathematics-II' },
      { id: 'applied-physics', name: 'Applied Physics' },
      { id: 'engineering-mechanics', name: 'Engineering Mechanics' },
      { id: 'computer-programming', name: 'Computer Programming' },
      { id: 'workshop-practice', name: 'Workshop Practice' }
    ]},
    { id: 'semester3', name: 'Semester 3', subjects: [
      { id: 'data-structures', name: 'Data Structures' },
      { id: 'digital-electronics', name: 'Digital Electronics' },
      { id: 'discrete-mathematics', name: 'Discrete Mathematics' },
      { id: 'computer-organization', name: 'Computer Organization' },
      { id: 'environmental-science', name: 'Environmental Science' }
    ]},
    { id: 'semester4', name: 'Semester 4', subjects: [
      { id: 'algorithms', name: 'Algorithms' },
      { id: 'database-systems', name: 'Database Systems' },
      { id: 'operating-systems', name: 'Operating Systems' },
      { id: 'software-engineering', name: 'Software Engineering' },
      { id: 'computer-networks', name: 'Computer Networks' }
    ]},
    { id: 'semester5', name: 'Semester 5', subjects: [
      { id: 'web-development', name: 'Web Development' },
      { id: 'machine-learning', name: 'Machine Learning' },
      { id: 'compiler-design', name: 'Compiler Design' },
      { id: 'computer-graphics', name: 'Computer Graphics' },
      { id: 'artificial-intelligence', name: 'Artificial Intelligence' }
    ]},
    { id: 'semester6', name: 'Semester 6', subjects: [
      { id: 'mobile-computing', name: 'Mobile Computing' },
      { id: 'cloud-computing', name: 'Cloud Computing' },
      { id: 'information-security', name: 'Information Security' },
      { id: 'distributed-systems', name: 'Distributed Systems' },
      { id: 'human-computer-interaction', name: 'Human-Computer Interaction' }
    ]},
    { id: 'semester7', name: 'Semester 7', subjects: [
      { id: 'project-management', name: 'Project Management' },
      { id: 'advanced-algorithms', name: 'Advanced Algorithms' },
      { id: 'big-data-analytics', name: 'Big Data Analytics' },
      { id: 'iot-systems', name: 'IoT Systems' },
      { id: 'blockchain-technology', name: 'Blockchain Technology' }
    ]},
    { id: 'semester8', name: 'Semester 8', subjects: [
      { id: 'industry-training', name: 'Industry Training' },
      { id: 'major-project', name: 'Major Project' },
      { id: 'entrepreneurship', name: 'Entrepreneurship' },
      { id: 'research-methodology', name: 'Research Methodology' },
      { id: 'seminar', name: 'Seminar' }
    ]}
  ];

  const features = [
    {
      title: "Comprehensive Study Materials",
      description: "Access detailed notes, question banks, and reference materials for all engineering subjects.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Previous Year Papers",
      description: "Practice with past examination papers to understand the exam pattern and important topics.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Project",
      description: "Access a wide range of academic and mini-projects across all engineering domains.",
      icon: Calendar,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Performance Analytics",
      description: "Track your progress and identify areas for improvement with our analytics tools.",
      icon: BarChart3,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sanjay Kumar",
      role: "Computer Science Student",
      image: "/img/sanjay.png",
      quote: "StudyHub has been a game-changer for my academic performance. The organized study materials and previous year papers helped me score top marks in my exams."
    },
    {
      name: "Tushar Sahu",
      role: "Computer Science Student",
      image: "/img/tushar.png",
      quote: "The quality of notes and question banks on StudyHub is exceptional. I've recommended it to all my classmates, and they love it too!"
    },
    {
      name: "Kamalneet Kaur",
      role: "Computer Science Student ",
      image: "/img/kamal.png",
      quote: "I was struggling with complex engineering concepts until I found StudyHub. The notes and resources made everything so much clearer."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>StudyHub - Engineering Study Materials</title>
        <meta name="description" content="Access premium study materials, previous year questions, and question banks for all engineering subjects" />
      </Head>

      {/* Hero Section with enhanced animations and design */}
      <section className="relative z-10 container mx-auto px-6 py-10 md:py-12">
        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-20 h-20 rounded-full bg-gradient-radial from-purple-500/20 to-transparent animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-[5%] w-32 h-32 rounded-full bg-gradient-radial from-pink-500/20 to-transparent animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/3 left-[15%] w-3 h-12 rounded-full bg-gradient-to-b from-purple-500/40 to-pink-500/0 animate-float"></div>
          <div className="absolute bottom-1/4 right-[20%] w-3 h-12 rounded-full bg-gradient-to-b from-blue-500/40 to-purple-500/0 animate-float animation-delay-2000"></div>
        </div>
        
        <div className={`text-center relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-3">
            <div className="px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-purple-300 flex items-center justify-center space-x-2 mb-6 animate-fade-in">
              <Star className="w-4 h-4" />
              <span>Engineering Excellence</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient text-shadow-lg leading-tight">
            Your Success
            <br />
            <span className="text-white">Starts Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Access premium study materials, previous year questions, and question banks for all engineering subjects
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/semesters" 
              className="gradient-button px-8 py-4 text-lg font-medium flex items-center space-x-2 group"
            >
              <span>Browse Semesters</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/about" 
              className="glass-effect-hover px-8 py-4 text-lg font-medium border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 button-3d"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats with enhanced styling */}
        <div className="mt-12 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="frosted-card p-6 hover-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  {/* Decorative background circle */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-md"></div>
                  
                  {/* Icon with gradient background */}
                  <div className="relative z-10 flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-4">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  </div>
                  
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
                
                {/* Animated border effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-pink-500/0 opacity-70"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with enhanced design */}
      <section className="relative z-10 container mx-auto px-6 py-12 my-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-900/20 to-transparent opacity-40"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl"></div>
        </div>
        
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <div className="px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-purple-300">
              Why Choose Us
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Features That Set Us Apart</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Discover why thousands of engineering students trust StudyHub for their academic success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-effect-hover rounded-2xl p-8 hover-card group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
              
              {/* Animated arrow on hover */}
              <div className="mt-6 flex items-center text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semester Tabs Section with enhanced design */}
      <section className="relative z-10 container mx-auto px-6 py-12">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 left-0 w-full h-1/2 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-blue-900/10 opacity-50 blur-3xl"></div>
        </div>
        
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <div className="px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-purple-300">
              Curriculum
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Explore by Semester</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Find comprehensive study materials organized by semester and subject
          </p>
        </div>
        
        <div className="mb-8 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-3 min-w-max px-1 justify-center">
            {semesters.map((semester, index) => (
              <button
                key={semester.id}
                onClick={() => setActiveTab(semester.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap font-medium ${
                  activeTab === semester.id 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-neon' 
                    : 'glass-effect-hover text-white/80 hover:text-white'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {semester.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="frosted-card p-10 border border-white/10">
          {semesters.map((semester) => (
            <div 
              key={semester.id} 
              className={`${activeTab === semester.id ? 'animate-fade-in' : 'hidden'}`}
            >
              <div className="flex items-center justify-center mb-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">{semester.name} Subjects</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {semester.subjects.map((subject, index) => (
                  <div 
                    key={subject.id} 
                    className="glass-effect-hover rounded-xl p-6 hover-card group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-3">
                          <BookOpen className="w-5 h-5 text-purple-300" />
                        </div>
                        <h4 className="text-lg font-bold group-hover:text-gradient transition-all duration-300">{subject.name}</h4>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center text-sm font-medium text-purple-300">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-white/60 text-sm mb-6">
                      <div className="flex items-center mr-4">
                        <FileText className="w-4 h-4 mr-1" />
                        <span>5 Units</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        <span>PDF Available</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/subject/${subject.id}`}
                      className="w-full p-4 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 border border-white/10 group-hover:border-transparent transition-all duration-300 flex items-center justify-between"
                    >
                      <span className="font-medium">View Materials</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/semesters"
            className="inline-flex items-center space-x-2 px-8 py-4 glass-effect-hover rounded-xl hover:shadow-neon transition-all duration-300 group"
          >
            <span className="font-medium">View All Semesters</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section with enhanced design */}
      <section className="relative z-10 container mx-auto px-6 py-12 my-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-conic from-purple-900/10 via-pink-900/10 to-blue-900/10 opacity-30"></div>
        </div>
        
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <div className="px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-purple-300">
              Testimonials
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">What Students Say</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Hear from our community of engineering students about their experience with StudyHub
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="frosted-card p-6 pt-4 relative hover-card group h-full flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Decorative quote marks */}
              <div className="absolute top-4 left-4 text-4xl text-purple-500/10 font-serif">"</div>
              <div className="absolute bottom-4 right-4 text-4xl text-purple-500/10 font-serif rotate-180">"</div>
              
              {/* Profile image with glow effect */}
              <div className="relative mt-4 mb-3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="relative w-14 h-14 rounded-full border-2 border-purple-500 object-cover"
                  />
                </div>
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <p className="text-white/80 mb-4 italic leading-relaxed text-center text-sm flex-1">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-3 text-center mt-auto">
                  <h4 className="font-bold text-gradient">{testimonial.name}</h4>
                  <p className="text-xs text-white/60">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
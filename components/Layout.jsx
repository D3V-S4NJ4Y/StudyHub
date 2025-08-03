import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  BookOpen, FileText, ChevronRight, Menu, X, Search, 
  Zap, Home, Info, Mail, Moon, Sun, Terminal, 
  GraduationCap, BookMarked, Lightbulb, Settings, Code, Activity, Cpu
} from 'lucide-react';
import Head from 'next/head';

// Complete subject data for search suggestions
const searchSuggestions = [
  { name: 'Mathematics-I', path: '/subject/mathematics-i', semester: 1, category: 'First Year' },
  { name: 'Physics-I', path: '/subject/physics-i', semester: 1, category: 'First Year' },
  { name: 'Basic Electrical and Electronics Engineering', path: '/subject/basic-electrical-and-electronics-engineering', semester: 1, category: 'First Year' },
  { name: 'Engineering Graphics and Design', path: '/subject/engineering-graphics-and-design', semester: 1, category: 'First Year' },
  { name: 'Fundamentals of Computer', path: '/subject/fundamentals-of-computer', semester: 1, category: 'First Year' },
  { name: 'Mathematics-II', path: '/subject/mathematics-ii', semester: 2, category: 'First Year' },
  { name: 'Programming for Problem Solving', path: '/subject/programming-for-problem-solving', semester: 2, category: 'First Year' },
  { name: 'Basic Civil and Mechanics', path: '/subject/basic-civil-and-mechanics', semester: 2, category: 'First Year' },
  { name: 'Chemistry-I', path: '/subject/chemistry-i', semester: 2, category: 'First Year' },
  { name: 'English', path: '/subject/english', semester: 2, category: 'First Year' },
  { name: 'Data Structures', path: '/subject/data-structures', semester: 3, category: 'Second Year' },
  { name: 'Digital Electronics', path: '/subject/digital-electronics', semester: 3, category: 'Second Year' },
  { name: 'Discrete Mathematics', path: '/subject/discrete-mathematics', semester: 3, category: 'Second Year' },
  { name: 'Computer Organization', path: '/subject/computer-organization', semester: 3, category: 'Second Year' },
  { name: 'Environmental Science', path: '/subject/environmental-science', semester: 3, category: 'Second Year' },
  { name: 'Algorithms', path: '/subject/algorithms', semester: 4, category: 'Second Year' },
  { name: 'Database Systems', path: '/subject/database-systems', semester: 4, category: 'Second Year' },
  { name: 'Operating Systems', path: '/subject/operating-systems', semester: 4, category: 'Second Year' },
  { name: 'Software Engineering', path: '/subject/software-engineering', semester: 4, category: 'Second Year' },
  { name: 'Computer Networks', path: '/subject/computer-networks', semester: 4, category: 'Second Year' },
  { name: 'Web Development', path: '/subject/web-development', semester: 5, category: 'Third Year' },
  { name: 'Machine Learning', path: '/subject/machine-learning', semester: 5, category: 'Third Year' },
  { name: 'Compiler Design', path: '/subject/compiler-design', semester: 5, category: 'Third Year' },
  { name: 'Computer Graphics', path: '/subject/computer-graphics', semester: 5, category: 'Third Year' },
  { name: 'Artificial Intelligence', path: '/subject/artificial-intelligence', semester: 5, category: 'Third Year' },
  { name: 'Mobile Computing', path: '/subject/mobile-computing', semester: 6, category: 'Third Year' },
  { name: 'Cloud Computing', path: '/subject/cloud-computing', semester: 6, category: 'Third Year' },
  { name: 'Information Security', path: '/subject/information-security', semester: 6, category: 'Third Year' },
  { name: 'Distributed Systems', path: '/subject/distributed-systems', semester: 6, category: 'Third Year' },
  { name: 'Human-Computer Interaction', path: '/subject/human-computer-interaction', semester: 6, category: 'Third Year' },
  { name: 'Project Management', path: '/subject/project-management', semester: 7, category: 'Fourth Year' },
  { name: 'Advanced Algorithms', path: '/subject/advanced-algorithms', semester: 7, category: 'Fourth Year' },
  { name: 'Big Data Analytics', path: '/subject/big-data-analytics', semester: 7, category: 'Fourth Year' },
  { name: 'IoT Systems', path: '/subject/iot-systems', semester: 7, category: 'Fourth Year' },
  { name: 'Blockchain Technology', path: '/subject/blockchain-technology', semester: 7, category: 'Fourth Year' },
  { name: 'Industry Training', path: '/subject/industry-training', semester: 8, category: 'Fourth Year' },
  { name: 'Major Project', path: '/subject/major-project', semester: 8, category: 'Fourth Year' },
  { name: 'Entrepreneurship', path: '/subject/entrepreneurship', semester: 8, category: 'Fourth Year' },
  { name: 'Research Methodology', path: '/subject/research-methodology', semester: 8, category: 'Fourth Year' },
  { name: 'Seminar', path: '/subject/seminar', semester: 8, category: 'Fourth Year' },
];

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setIsLoaded(true);
    
    // Initialize theme from localStorage or set default
    const saved = localStorage.getItem('darkMode');
    if (saved === null) {
      // First time visit - set default to dark mode
      localStorage.setItem('darkMode', 'true');
      setDarkMode(true);
    } else {
      // Use saved preference
      setDarkMode(saved === 'true');
    }
    
    // Add entrance animations with slight delays
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 300);
    
    // Add click outside listener for search suggestions
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  // Apply dark mode
  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('darkMode', darkMode.toString());
    }
  }, [darkMode, mounted]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Find exact match in suggestions
      const exactMatch = searchSuggestions.find(
        suggestion => suggestion.name.toLowerCase() === searchQuery.toLowerCase()
      );
      
      if (exactMatch) {
        router.push(exactMatch.path);
      } else {
        // Redirect to semesters page as a fallback
        router.push(`/semesters`);
      }
      
      // Close sidebar and suggestions
      setSidebarOpen(false);
      setShowSuggestions(false);
    }
  };
  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      // Filter suggestions based on query - search in name, semester, and category
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.name.toLowerCase().includes(query.toLowerCase()) ||
        `semester ${suggestion.semester}`.toLowerCase().includes(query.toLowerCase()) ||
        suggestion.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8); // Show up to 8 suggestions
      
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  
  const handleSuggestionClick = (path) => {
    router.push(path);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const mainMenuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Semesters', href: '/semesters', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </Head>
      
      {/* Neural Data Flow Effect */}
      <div className="neural-flow"></div>
      
      {/* Overlay to close sidebar when clicked outside */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" 
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      
      {/* AI/ML Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Neural orbs with quantum glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-float neural-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-float animation-delay-2000 quantum-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-5 animate-pulse-slow animation-delay-4000"></div>
        
        {/* AI neural nodes */}
        <div className="ai-particle absolute top-20 left-[20%]"></div>
        <div className="quantum-dot absolute top-[30%] right-[15%]"></div>
        <div className="ai-particle absolute bottom-[25%] left-[10%]" style={{animationDelay: '2s'}}></div>
        
        {/* Neural data streams */}
        <div className="absolute top-[10%] left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent neural-network"></div>
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent neural-network" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[90%] left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent neural-network" style={{animationDelay: '6s'}}></div>
        
        {/* Neural pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(100, 255, 218, 0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
      </div>

      {/* AI/ML Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 glass-effect-dark transform transition-all duration-300 ease-in-out shadow-xl border-r border-teal-400/20 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{height: '100vh', overflow: 'hidden'}}>
        <div className="h-screen flex flex-col" style={{height: '100vh', overflow: 'hidden'}}>
          {/* Header */}
          <div className="px-4 py-3 border-b border-teal-400/20 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-purple-500 flex flex-col items-center justify-center rounded space-y-0.5">
                  <div className="w-4 h-0.5 bg-white"></div>
                  <div className="w-4 h-0.5 bg-white"></div>
                  <div className="w-4 h-0.5 bg-white"></div>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gradient-neural">
                    StudyHub
                  </h1>
                  <p className="text-xs text-teal-400/70 mono">AI/ML Hub</p>
                </div>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-1 hover:bg-teal-400/20 rounded transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 px-4 py-2 overflow-hidden">
            <nav className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-teal-400/70 uppercase mb-2 mono">MAIN MENU</h3>
                <div className="space-y-1">
                  {mainMenuItems.map((item, index) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                        router.pathname === item.href 
                          ? 'bg-gradient-to-r from-teal-400/20 to-purple-500/20 text-white border-l-4 border-teal-400' 
                          : 'text-gray-300 hover:bg-teal-400/10 hover:text-white'
                      }`}
                    >
                      <item.icon className={`mr-3 h-4 w-4 ${
                        router.pathname === item.href ? 'text-teal-300' : 'text-gray-400 group-hover:text-teal-400'
                      }`} />
                      <span>{item.name}</span>
                      {router.pathname === item.href && (
                        <ChevronRight className="ml-auto h-4 w-4 text-teal-300" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Quick Access */}
              <div>
                <h3 className="px-3 text-xs font-semibold text-white/50 uppercase tracking-wider flex items-center">
                  <span className="w-5 h-px bg-gradient-to-r from-purple-500 to-transparent mr-2"></span>
                  Quick Access
                  <span className="w-5 h-px bg-gradient-to-l from-purple-500 to-transparent ml-2"></span>
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Link href="/resources" className="glass-effect-hover p-3 rounded-xl flex flex-col items-center justify-center text-center hover-card">
                    <BookMarked className="h-6 w-6 mb-2 text-purple-400" />
                    <span className="text-sm">Resources</span>
                  </Link>
                  <Link href="/resources" className="glass-effect-hover p-3 rounded-xl flex flex-col items-center justify-center text-center hover-card">
                    <Code className="h-6 w-6 mb-2 text-emerald-400" />
                    <span className="text-sm">Labs</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          
          {/* Footer */}
          <div className="p-3 border-t border-teal-400/20 flex-shrink-0">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 glass-effect-hover rounded-md transition-colors group"
              aria-label="Toggle theme"
            >
              {mounted && darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                  <span className="text-sm text-yellow-400 group-hover:text-yellow-300 mono">LIGHT MODE</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
                  <span className="text-sm text-teal-400 group-hover:text-teal-300 mono">DARK MODE</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="min-h-screen">
        {/* AI/ML Header */}
        <header className="sticky top-0 z-30 glass-effect-dark border-b border-teal-400/20">
          {/* Header scan line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent neural-network"></div>
          
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Left Section with Logo and Menu Button */}
            <div className="flex items-center space-x-4">
              {/* AI Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-3 ai-border glass-effect-hover transition-all duration-300 neural-glow group"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-teal-400 group-hover:text-emerald-400 transition-colors" />
              </button>
              
              {/* AI Logo */}
              <div className="hidden md:flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center ai-border neural-glow">
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gradient-neural font-display">StudyHub</h1>
                <span className="text-xs text-teal-400/60 mono hidden lg:block">[v3.0]</span>
              </div>
            </div>
            
            {/* AI Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4" ref={searchRef}>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400/50 w-5 h-5 group-focus-within:text-teal-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="> search --query="
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                  className={`w-full pl-12 pr-4 py-3 glass-effect ai-border focus:outline-none focus:shadow-neural-glow transition-all duration-300 mono ${
                    darkMode 
                      ? 'text-white placeholder-teal-400/50 bg-black/50' 
                      : 'text-slate-900 placeholder-slate-500 bg-white/70'
                  }`}
                />
                
                {/* Cyber border effect on focus */}
                <div className="absolute inset-0 ai-border group-focus-within:neural-glow pointer-events-none transition-all duration-300"></div>
                
                {/* AI Search Suggestions */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 glass-effect-dark ai-border shadow-lg overflow-hidden z-50 ai-interface">
                    <div className="ai-header">
                      <span className="mono text-xs">&gt; search.results</span>
                    </div>
                    <ul className="py-1 max-h-80 overflow-y-auto">
                      {filteredSuggestions.map((suggestion, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => handleSuggestionClick(suggestion.path)}
                            className={`w-full text-left px-4 py-3 transition-all duration-300 flex items-center space-x-3 group border-b last:border-b-0 ${
                              darkMode 
                                ? 'hover:bg-black/30 border-teal-400/10' 
                                : 'hover:bg-slate-100/70 border-slate-300/50'
                            }`}
                          >
                            <div className={`w-8 h-8 ai-border flex items-center justify-center transition-all duration-300 ${
                              darkMode 
                                ? 'bg-gradient-to-r from-teal-400/20 to-purple-500/20 group-hover:from-teal-400/30 group-hover:to-purple-500/30' 
                                : 'bg-gradient-to-r from-blue-700/20 to-orange-700/20 group-hover:from-blue-700/30 group-hover:to-orange-700/30'
                            }`}>
                              <BookOpen className={`w-4 h-4 ${
                                darkMode ? 'text-teal-300' : 'text-slate-700'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <div className={`font-medium transition-colors duration-300 mono ${
                                darkMode 
                                  ? 'text-white group-hover:text-teal-300' 
                                  : 'text-slate-900 group-hover:text-blue-800'
                              }`}>{suggestion.name}</div>
                              <div className={`text-xs mono ${
                                darkMode ? 'text-teal-400/50' : 'text-slate-600'
                              }`}>sem_{suggestion.semester} | {suggestion.category.toLowerCase().replace(' ', '_')}</div>
                            </div>
                            <ChevronRight className={`w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ${
                              darkMode 
                                ? 'text-teal-400/30 group-hover:text-teal-300' 
                                : 'text-slate-500 group-hover:text-slate-700'
                            }`} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </form>
            
            {/* Right side - AI Action buttons */}
            <div className="flex items-center space-x-2">
              {/* System status indicator */}
              <div className="hidden md:flex items-center space-x-2 px-3 py-2 ai-border glass-effect-hover">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs mono text-emerald-400">ACTIVE</span>
              </div>
              
              {/* Theme toggle */}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 ai-border glass-effect-hover transition-all duration-300 neural-glow hidden md:flex group"
                aria-label="Toggle theme"
              >
                {mounted && darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
                )}
              </button>
              
              {/* Quick links */}
              <Link 
                href="/resources" 
                className="p-3 ai-border glass-effect-hover transition-all duration-300 neural-glow hidden lg:flex group"
              >
                <BookMarked className="w-5 h-5 text-purple-400 group-hover:text-teal-400 transition-colors" />
              </Link>
              
              <Link 
                href="/contact" 
                className="p-3 ai-border glass-effect-hover transition-all duration-300 neural-glow group"
              >
                <Mail className="w-5 h-5 text-teal-400 group-hover:text-emerald-400 transition-colors" />
              </Link>
            </div>
          </div>
          
          {/* AI Breadcrumbs */}
          <div className="container mx-auto px-4 py-2 flex items-center text-sm text-teal-400/50 border-t border-teal-400/10">
            <span className="mono text-xs mr-2">&gt;</span>
            <Link href="/" className="hover:text-teal-300 transition-colors animated-underline mono">home</Link>
            {router.pathname !== '/' && (
              <>
                <span className="mx-2 text-teal-400/30">/</span>
                <span className="text-teal-400/80 mono">
                  {router.pathname.split('/')[1].replace(/-/g, '_')}
                </span>
              </>
            )}
          </div>
        </header>
        
        {/* Main Content with improved spacing and animations */}
        <main className="container mx-auto px-4 py-6 animate-fade-in relative z-10">
          {children}
        </main>
        
        {/* AI/ML Footer */}
        <footer className="mt-20 border-t border-teal-400/20 relative overflow-hidden ai-interface glass-effect-dark">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="container mx-auto px-6 py-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center ai-border neural-glow">
                    <Terminal className={`w-4 h-4 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`} />
                  </div>
                  <h2 className="text-xl font-bold text-gradient-neural font-display">StudyHub</h2>
                  <span className={`text-xs mono ${
                    darkMode ? 'text-teal-400/60' : 'text-slate-700'
                  }`}>[ACTIVE]</span>
                </div>
                <p className={`text-sm max-w-md mono ${
                  darkMode ? 'text-teal-400/60' : 'text-slate-700'
                }`}>
                  &gt; AI-powered platform for engineering study materials, ML resources, and academic excellence.
                </p>
              </div>
              
              <div>
                <h6 className={`font-semibold mb-4 mono ${
                  darkMode ? 'text-teal-400' : 'text-slate-800'
                }`}>&gt; LINKS</h6>
                <ul className="space-y-2">
                  <li><Link href="/semesters" className={`transition-colors mono text-sm ${
                    darkMode 
                      ? 'text-teal-400/60 hover:text-teal-300' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}>&gt; semesters</Link></li>
                  <li><Link href="/resources" className={`transition-colors mono text-sm ${
                    darkMode 
                      ? 'text-teal-400/60 hover:text-teal-300' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}>&gt; resources</Link></li>
                  <li><Link href="/about" className={`transition-colors mono text-sm ${
                    darkMode 
                      ? 'text-teal-400/60 hover:text-teal-300' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}>&gt; about</Link></li>
                  <li><Link href="/contact" className={`transition-colors mono text-sm ${
                    darkMode 
                      ? 'text-teal-400/60 hover:text-teal-300' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}>&gt; contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h6 className={`font-semibold mb-4 mono ${
                  darkMode ? 'text-emerald-400' : 'text-slate-800'
                }`}>&gt; NETWORK</h6>
                <ul className="space-y-2">
                  <li><a href="https://discord.gg/FdPmrfkd" className={`transition-colors mono text-sm ${
                    darkMode 
                      ? 'text-emerald-400/60 hover:text-emerald-300' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}>&gt; discord</a></li>
                  <li><a href="https://t.me/rcetr1" className={`transition-colors mono text-sm ${
                    darkMode 
                      ? 'text-emerald-400/60 hover:text-emerald-300' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}>&gt; telegram</a></li>
                  <li><a href="https://whatsapp.com/channel/0029VbBdCJ5C6ZvZwJzcHo2v" className={`transition-colors mono text-sm ${
                    darkMode 
                      ? 'text-emerald-400/60 hover:text-emerald-300' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}>&gt; whatsapp</a></li>
                  <li><a href="mailto:sanjay.dev925@gmail.com" className={`transition-colors mono text-sm ${
                    darkMode 
                      ? 'text-emerald-400/60 hover:text-emerald-300' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}>&gt; email</a></li>
                </ul>
              </div>
            </div>
            
            <div className={`border-t pt-6 text-center ${
              darkMode ? 'border-teal-400/20' : 'border-slate-300'
            }`}>
              <div className={`text-xs mono ${
                darkMode ? 'text-teal-400/40' : 'text-slate-600'
              }`}>
                &gt; info: © {new Date().getFullYear()} StudyHub | version 3.0 | all_rights_reserved
              </div>
              <div className={`text-xs mono mt-1 ${
                darkMode ? 'text-emerald-400/40' : 'text-slate-600'
              }`}>
                &gt; uptime: 24/7 | status: active | users: 10k+
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

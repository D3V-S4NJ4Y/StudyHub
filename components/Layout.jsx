import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  BookOpen, FileText, ChevronRight, Menu, X, Search, 
  Zap, Home, Info, Mail, Moon, Sun, Sparkles, 
  GraduationCap, BookMarked, Lightbulb, Settings
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
  { name: 'Applied Physics', path: '/subject/applied-physics', semester: 2, category: 'First Year' },
  { name: 'Engineering Mechanics', path: '/subject/engineering-mechanics', semester: 2, category: 'First Year' },
  { name: 'Computer Programming', path: '/subject/computer-programming', semester: 2, category: 'First Year' },
  { name: 'Workshop Practice', path: '/subject/workshop-practice', semester: 2, category: 'First Year' },
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
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
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

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

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
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];




  return (
    <div className="min-h-screen text-white overflow-hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4a1d96" />
      </Head>
      
      {/* Overlay to close sidebar when clicked outside */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:block" 
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow animation-delay-4000"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-20 left-[20%] w-4 h-4 bg-purple-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-[30%] right-[15%] w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-[25%] left-[10%] w-5 h-5 bg-blue-400 rounded-full opacity-60 animate-pulse animation-delay-4000"></div>
        
        {/* Mesh grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 opacity-30"></div>
      </div>


      {/* Sidebar - Mobile & Desktop */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 glass-effect-dark transform transition-all duration-300 ease-in-out shadow-xl ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header with animated gradient */}
          <div className="px-6 py-5 border-b border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 animated-gradient opacity-20"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-neon animate-pulse-slow">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gradient">
                    StudyHub
                  </h1>
                  <p className="text-xs text-white/70">Engineering Excellence</p>
                </div>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:rotate-90 duration-300"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-8">
              {/* Main Menu */}
              <div>
                <h3 className="px-3 text-xs font-semibold text-white/50 uppercase tracking-wider flex items-center">
                  <span className="w-5 h-px bg-gradient-to-r from-purple-500 to-transparent mr-2"></span>
                  Main Menu
                  <span className="w-5 h-px bg-gradient-to-l from-purple-500 to-transparent ml-2"></span>
                </h3>
                <div className="mt-3 space-y-1">
                  {mainMenuItems.map((item, index) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className={`group flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        router.pathname === item.href 
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-l-4 border-purple-500 shadow-inner-glow' 
                          : 'text-white/80 hover:bg-white/10 hover:translate-x-1'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <item.icon className={`mr-3 h-5 w-5 ${
                        router.pathname === item.href ? 'text-purple-300' : 'text-white/60 group-hover:text-white/90'
                      }`} />
                      {item.name}
                      {router.pathname === item.href && (
                        <span className="ml-auto">
                          <ChevronRight className="h-4 w-4 text-purple-300" />
                        </span>
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
                    <BookMarked className="h-6 w-6 mb-2 text-blue-400" />
                    <span className="text-sm">Resources</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-xl glass-effect-hover flex items-center space-x-2 transition-all hover:translate-y-[-2px]"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-5 h-5 text-amber-400" />
                    <span className="text-sm">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Dark Mode</span>
                  </>
                )}
              </button>
              
              <Link href="/about" className="p-3 rounded-xl glass-effect-hover transition-all hover:translate-y-[-2px]">
                <Info className="w-5 h-5 text-purple-400" />
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 glass-effect-dark border-b border-white/5">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Left Section with Logo and Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Menu Button with animated hover effect */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-3 rounded-xl glass-effect-hover transition-all duration-300 hover:shadow-neon"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              {/* Logo - Visible on larger screens */}
              <div className="hidden md:flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h1 className="text-xl font-bold text-gradient">StudyHub</h1>
              </div>
            </div>
            
            {/* Search Bar with enhanced styling */}
            <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4" ref={searchRef}>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 group-focus-within:text-purple-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search for subjects, resources..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                  className="w-full pl-12 pr-4 py-3 glass-effect rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                />
                
                {/* Animated border effect on focus */}
                <div className="absolute inset-0 rounded-xl border border-white/10 group-focus-within:border-purple-500/50 pointer-events-none transition-colors duration-300"></div>
                
                {/* Search Suggestions with enhanced styling */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 glass-effect-dark rounded-xl shadow-lg overflow-hidden z-50 border border-white/10">
                    <ul className="py-1 max-h-80 overflow-y-auto">
                      {filteredSuggestions.map((suggestion, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => handleSuggestionClick(suggestion.path)}
                            className="w-full text-left px-4 py-3 hover:bg-white/10 transition-all duration-300 flex items-center space-x-3 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                              <BookOpen className="w-4 h-4 text-purple-300" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">{suggestion.name}</div>
                              <div className="text-xs text-white/50">Semester {suggestion.semester} • {suggestion.category}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </form>
            
            {/* Right side - Action buttons */}
            <div className="flex items-center space-x-2">
              {/* Dark mode toggle with enhanced styling */}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-xl glass-effect-hover transition-all duration-300 hover:shadow-neon hidden md:flex"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
              </button>
              
              {/* Quick links */}
              <Link 
                href="/resources" 
                className="p-3 rounded-xl glass-effect-hover transition-all duration-300 hover:shadow-neon hidden lg:flex"
              >
                <BookMarked className="w-5 h-5 text-blue-400" />
              </Link>
              
              <Link 
                href="/contact" 
                className="p-3 rounded-xl glass-effect-hover transition-all duration-300 hover:shadow-neon"
              >
                <Mail className="w-5 h-5 text-purple-400" />
              </Link>
            </div>
          </div>
          
          {/* Breadcrumbs with enhanced styling */}
          <div className="container mx-auto px-4 py-2 flex items-center text-sm text-white/50">
            <Link href="/" className="hover:text-purple-300 transition-colors animated-underline">Home</Link>
            {router.pathname !== '/' && (
              <>
                <ChevronRight className="w-4 h-4 mx-2 text-white/30" />
                <span className="text-white/80 capitalize">
                  {router.pathname.split('/')[1].replace(/-/g, ' ')}
                </span>
              </>
            )}
          </div>
        </header>
        
        {/* Main Content with improved spacing and animations */}
        <main className="container mx-auto px-4 py-6 animate-fade-in relative z-10">
          {children}
        </main>
        
        {/* Footer with subtle gradient */}
        <footer className="mt-20 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-30"></div>
          <div className="container mx-auto px-6 py-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-gradient">StudyHub</h2>
                </div>
                <p className="text-white/60 text-sm max-w-md">
                  Your comprehensive platform for engineering study materials, resources, and academic excellence.
                </p>
              </div>
              
              <div>
                <h6 className="font-semibold mb-4">Quick Links</h6>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/semesters" className="hover:text-purple-300 transition-colors">Semesters</Link></li>
                  <li><Link href="/resources" className="hover:text-purple-300 transition-colors">Resources</Link></li>
                  <li><Link href="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h6 className="font-semibold mb-4">Connect</h6>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="https://discord.gg/FdPmrfkd" className="hover:text-purple-300 transition-colors">Discord</a></li>
                  <li><a href="https://t.me/rcetr1" className="hover:text-purple-300 transition-colors">Telegram</a></li>
                  <li><a href="https://whatsapp.com/channel/0029VbBdCJ5C6ZvZwJzcHo2v" className="hover:text-purple-300 transition-colors">WhatsApp</a></li>
                  <li><a href="mailto:sanjay.dev925@gmail.com" className="hover:text-purple-300 transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-6 text-center">
              <div className="text-white/40 text-xs">
                © {new Date().getFullYear()} StudyHub. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
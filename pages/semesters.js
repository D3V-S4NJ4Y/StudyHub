import React, { useState } from 'react'; 
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function Semesters() {
  const [activeYear, setActiveYear] = useState(1);
  
  const years = [
    { id: 1, name: 'First Year' },
    { id: 2, name: 'Second Year' },
    { id: 3, name: 'Third Year' },
    { id: 4, name: 'Fourth Year' }
  ];
  
  const semestersByYear = {
    1: [
      { 
        id: 1, 
        name: 'Semester 1',
        subjects: [
          { id: 'mathematics-i', name: 'Mathematics-I' },
          { id: 'physics', name: 'Physics' },
          { id: 'basic-electrical-and-electronics-engineering', name: 'Basic Electrical and Electronics Engineering' },
          { id: 'engineering-graphics-and-design', name: 'Engineering Graphics and Design' },
          { id: 'fundamentals-of-computer', name: 'Fundamentals of Computer' }
        ]
      },
      { 
        id: 2, 
        name: 'Semester 2',
        subjects: [
          { id: 'mathematics-ii', name: 'Mathematics-II' },
          { id: 'applied-physics', name: 'Applied Physics' },
          { id: 'engineering-mechanics', name: 'Engineering Mechanics' },
          { id: 'computer-programming', name: 'Computer Programming' },
          { id: 'workshop-practice', name: 'Workshop Practice' }
        ]
      }
    ],
    2: [
      { 
        id: 3, 
        name: 'Semester 3',
        subjects: [
          { id: 'data-structures', name: 'Data Structures' },
          { id: 'digital-electronics', name: 'Digital Electronics' },
          { id: 'discrete-mathematics', name: 'Discrete Mathematics' },
          { id: 'computer-organization', name: 'Computer Organization' },
          { id: 'environmental-science', name: 'Environmental Science' }
        ]
      },
      { 
        id: 4, 
        name: 'Semester 4',
        subjects: [
          { id: 'algorithms', name: 'Algorithms' },
          { id: 'database-systems', name: 'Database Systems' },
          { id: 'operating-systems', name: 'Operating Systems' },
          { id: 'software-engineering', name: 'Software Engineering' },
          { id: 'computer-networks', name: 'Computer Networks' }
        ]
      }
    ],
    3: [
      { 
        id: 5, 
        name: 'Semester 5',
        subjects: [
          { id: 'web-development', name: 'Web Development' },
          { id: 'machine-learning', name: 'Machine Learning' },
          { id: 'compiler-design', name: 'Compiler Design' },
          { id: 'computer-graphics', name: 'Computer Graphics' },
          { id: 'artificial-intelligence', name: 'Artificial Intelligence' }
        ]
      },
      { 
        id: 6, 
        name: 'Semester 6',
        subjects: [
          { id: 'mobile-computing', name: 'Mobile Computing' },
          { id: 'cloud-computing', name: 'Cloud Computing' },
          { id: 'information-security', name: 'Information Security' },
          { id: 'distributed-systems', name: 'Distributed Systems' },
          { id: 'human-computer-interaction', name: 'Human-Computer Interaction' }
        ]
      }
    ],
    4: [
      { 
        id: 7, 
        name: 'Semester 7',
        subjects: [
          { id: 'project-management', name: 'Project Management' },
          { id: 'advanced-algorithms', name: 'Advanced Algorithms' },
          { id: 'big-data-analytics', name: 'Big Data Analytics' },
          { id: 'iot-systems', name: 'IoT Systems' },
          { id: 'blockchain-technology', name: 'Blockchain Technology' }
        ]
      },
      { 
        id: 8, 
        name: 'Semester 8',
        subjects: [
          { id: 'industry-training', name: 'Industry Training' },
          { id: 'major-project', name: 'Major Project' },
          { id: 'entrepreneurship', name: 'Entrepreneurship' },
          { id: 'research-methodology', name: 'Research Methodology' },
          { id: 'seminar', name: 'Seminar' }
        ]
      }
    ]
  };
  
  const semesterColors = {
    1: 'from-purple-500 to-pink-500',
    2: 'from-purple-600 to-pink-600',
    3: 'from-blue-500 to-cyan-500',
    4: 'from-blue-600 to-cyan-600',
    5: 'from-green-500 to-teal-500',
    6: 'from-green-600 to-teal-600',
    7: 'from-orange-500 to-red-500',
    8: 'from-orange-600 to-red-600'
  };
  
  const yearColors = {
    1: 'from-purple-500 to-pink-500',
    2: 'from-blue-500 to-cyan-500',
    3: 'from-green-500 to-teal-500',
    4: 'from-orange-500 to-red-500'
  };

  return (
    <Layout>
      <Head>
        <title>All Semesters - StudyHub</title>
        <meta name="description" content="Browse all semesters and subjects for engineering courses" />
      </Head>
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">All Semesters</h1>
        
        {/* Year Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Select Year</h2>
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-4 min-w-max px-1">
              {years.map((year) => (
                <button
                  key={year.id}
                  onClick={() => setActiveYear(year.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 min-w-[150px] ${
                    activeYear === year.id
                      ? `bg-gradient-to-r ${yearColors[year.id]} border-transparent shadow-lg`
                      : 'bg-white/5 backdrop-blur-sm border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="text-xl font-bold mb-2">{year.name}</div>
                  <div className="text-gray-300">Engineering</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Semesters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Semesters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {semestersByYear[activeYear].map((semester) => (
              <div key={semester.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${semesterColors[semester.id]}`}>
                  <h3 className="text-2xl font-bold">{semester.name}</h3>
                  <p className="text-gray-200">Year {Math.ceil(semester.id / 2)}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-4">Subjects</h4>
                  <div className="space-y-3">
                    {semester.subjects.map((subject) => (
                      <Link 
                        key={subject.id}
                        href={`/subject/${subject.id}`}
                        className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <span>{subject.name}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Access */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-3 text-purple-300">Popular Subjects</h3>
              <div className="space-y-2">
                <Link href="/subject/mathematics-i" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <BookOpen className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Mathematics-I</span>
                </Link>
                <Link href="/subject/data-structures" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Data Structures</span>
                </Link>
                <Link href="/subject/algorithms" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <BookOpen className="w-4 h-4 mr-2 text-green-400" />
                  <span>Algorithms</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-300">First Year Essentials</h3>
              <div className="space-y-2">
                <Link href="/subject/physics" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <BookOpen className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Physics</span>
                </Link>
                <Link href="/subject/engineering-graphics-and-design" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Engineering Graphics</span>
                </Link>
                <Link href="/subject/computer-programming" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <BookOpen className="w-4 h-4 mr-2 text-green-400" />
                  <span>Computer Programming</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-3 text-green-300">Navigation</h3>
              <div className="space-y-2">
                <Link href="/" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Home</span>
                </Link>
                <Link href="/about" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                  <span>About Us</span>
                </Link>
                <Link href="/contact" className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-green-400" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
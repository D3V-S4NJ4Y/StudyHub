import React, { useState } from 'react'; 
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function Semesters() {
  const [activeYear, setActiveYear] = useState(1);
  
  const years = [
    { id: 1, name: 'First Year' },
    { id: 2, name: 'Second Year⏳' },
    { id: 3, name: 'Third Year⏳' },
    { id: 4, name: 'Fourth Year⏳' }
  ];
  
  const semestersByYear = {
    1: [
      { 
        id: 1, 
        name: 'Semester 1',
        subjects: [
          { id: 'mathematics-i', name: 'Mathematics-I' },
          { id: 'physics-i', name: 'Physics-I' },
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
          { id: 'programming-for-problem-solving', name: 'Programming for Problem Solving' },
          { id: 'basic-civil-engineering-and-mechanics', name: 'Basic Civil Engineering and Mechanics' },
          { id: 'chemistry-i', name: 'Chemistry-I' },
          { id: 'english', name: 'English' }
        ]
      }
    ],
    2: [
      { 
        id: 3, 
        name: 'Semester 3',
        subjects: [
          { id: 'mathematics-iii', name: 'Mathematics–III' },
          { id: 'data-structures-and-algorithms', name: 'Data Structures and Algorithms' },
          { id: 'operating-systems', name: 'Operating Systems' },
          { id: 'digital-electronics-and-logic-design', name: 'Digital Electronics and Logic Design' },
          { id: 'introduction-in-python', name: 'Introduction in Python' }
        ]
      },
      { 
        id: 4, 
        name: 'Semester 4',
        subjects: [
          { id: 'discrete-structure', name: 'Discrete Structure' },
          { id: 'design-and-analysis-of-algorithms', name: 'Design and Analysis of Algorithms' },
          { id: 'computer-system-architecture', name: 'Computer System Architecture' },
          { id: 'object-oriented-programming-with-java', name: 'Object Oriented Programming with Java' },
          { id: 'database-management-systems', name: 'Database Management Systems' }
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
      </div>
    </Layout>
  );
}
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { 
  BookOpen, FileText, Search, Calendar, ChevronRight, 
  BookMarked, CheckCircle, AlertCircle, ExternalLink, X
} from 'lucide-react';

// Custom styles to hide Google Drive UI elements
const hideUIStyles = `
  /* Reset global styles */
  * {
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
  }

  /* Make sure the iframe takes full size */
  #fullscreen-iframe {
    width: 100vw !important;
    height: 100vh !important;
    border: none !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 9999 !important;
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
    overflow: hidden !important;
    background: white !important;
  }

  /* Reset Google Drive viewer container */
  .ndfHFb-c4YZDc {
    margin: 0 !important;
    padding: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    overflow: hidden !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
  }

  /* Main viewer container */
  .ndfHFb-c4YZDc-Wrql6b {
    margin: 0 !important;
    padding: 0 !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    transform: none !important;
    max-width: none !important;
    max-height: none !important;
  }

  /* Document container */
  .ndfHFb-c4YZDc-cYSp0e-DARUcf {
    margin: 0 !important;
    padding: 0 !important;
    left: 0 !important;
    width: 100% !important;
  }

  /* Make close button visible */
  .ndfHFb-c4YZDc-to915-LgbsSe {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    top: 16px !important;
    left: 16px !important;
    z-index: 10000 !important;
    background: rgba(0, 0, 0, 0.7) !important;
    border-radius: 50% !important;
    padding: 8px !important;
    min-width: 40px !important;
    width: auto !important;
    height: 40px !important;
    cursor: pointer !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
  }

  /* Style close button icon */
  .ndfHFb-c4YZDc-to915-LgbsSe .ndfHFb-c4YZDc-to915-LgbsSe-text {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
    width: 24px !important;
    height: 24px !important;
    color: white !important;
    font-size: 20px !important;
    line-height: 24px !important;
    text-align: center !important;
  }

  /* Hide original cut icon since we're using close button */
  .ndfHFb-c4YZDc-j7LFlb,
  .ndfHFb-c4YZDc-j7LFlb-V67aGc {
    display: none !important;
  }

  /* Hide unnecessary UI elements */
  .ndfHFb-c4YZDc-nJjxad-nK2kYb,
  .ndfHFb-c4YZDc-vyDMJf-aZ2wEe,
  .ndfHFb-c4YZDc-cYSp0e-DARUcf-NnAfwf-i5oIFb,
  .ndfHFb-c4YZDc-vyDMJf-aZ2wEe-PFprWc,
  .ndfHFb-c4YZDc-L6cTce-LgbsSe,
  .ndfHFb-c4YZDc-i5oIFb:not(.ndfHFb-c4YZDc-to915-LgbsSe),
  .ndfHFb-c4YZDc-neVct-RCfa3e {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }

  /* Hide unnecessary UI elements */
  .ndfHFb-c4YZDc-nJjxad-nK2kYb,
  .ndfHFb-c4YZDc-vyDMJf-aZ2wEe,
  .ndfHFb-c4YZDc-L6cTce-LgbsSe,
  .ndfHFb-c4YZDc-i5oIFb,
  .ndfHFb-c4YZDc-DARUcf {
    display: none !important;
  }
  
  /* Ensure body doesn't scroll */
  body.iframe-open {
    overflow: hidden !important;
    position: fixed !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  /* Allow zooming in iframe content */
  #fullscreen-iframe html, #fullscreen-iframe body {
    touch-action: auto !important;
    -ms-touch-action: auto !important;
    -webkit-overflow-scrolling: touch !important;
  }
  
  /* Add viewport meta for zooming */
  @media screen {
    #fullscreen-iframe {
      transform: scale(1) !important;
      transform-origin: 0 0 !important;
    }
  }
  
  /* Remove left margin */
  .ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-bN97Pc {
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
  
  /* Fix toolbar display */
  .ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY {
    left: 0 !important;
  }
`;

// Map of icons to components
const iconComponents = {
  chart: BookOpen,
  zap: Calendar,
  layers: FileText,
  settings: Search
};

// Subject data for all 8 semesters
const allSubjectsData = {
  'mathematics-i': {
    name: 'Mathematics-I',
    semester: 1,
    description: 'Fundamental mathematical concepts for engineering including calculus, differential equations, and linear algebra.',
    icon: 'chart',
    units: ['Calculus', 'Calculus', 'Sequences and series', 'Multivariable Calculus (Differentiation) ', 'Matrices'],
    resources: {
      notes: {
        'Unit 1': 'https://drive.google.com/file/d/1EmOOsY38rFs2eb3uq8WS6WTX1Zbuu9l7/view?usp=drive_link',
        'Unit 2': 'https://drive.google.com/file/d/1F_u9BKE5cwEv16veW9GhWd7noCdfY-eO/view?usp=drive_link',
        'Unit 3': 'https://drive.google.com/file/d/1JZ0PvXILK95wjBLIJpmgk8JSjGlX0VKb/view?usp=drive_link',
        'Unit 4': 'https://drive.google.com/file/d/1BisEPtyz6a0tnaKkGBtNC3Sm0mfuhNKY/view?usp=drive_link',
        'Unit 5': 'https://drive.google.com/file/d/1L8Lo7YwIBo12tryIhv72QZNaENpYfSP0/view?usp=drive_link'
      },
      questionBank: {
        questions: 'https://drive.google.com/file/d/1bboSS0LErBGYABEL9lS6_WVVcUsaIKfL/view?usp=drive_link',
        solutions: 'https://drive.google.com/file/d/1v-vQcsyw2u0LFpg0Aceuo603-rflowd-/view?usp=drive_link'
      },
      pyq: {
        'April-May': {
          '2020': 'https://drive.google.com/file/d/1c8YvNJXQ0LzptHixK4YSJLpdSD1P5Hk3/view?usp=drive_link',
          '2021': 'https://drive.google.com/2021',
          '2022': 'https://drive.google.com/file/d/1OLQA9wxDi_ukVUCTCp_5KrhkR6RJxYeg/view?usp=drive_link',
          '2023': 'https://drive.google.com/file/d/1odWmuC9SsvDPn-x5ViypUw9MwthCYzel/view?usp=drive_link',
          '2024': 'https://drive.google.com/file/d/14XOKJ5bpZMGPSy3lY01zATw6nQIrEx8i/view?usp=drive_link'
        },
        'Nov-Dec': {
          '2019': 'https://drive.google.com/file/d/1Mbpi4eLLDHnVXgi254Kso56v4hfjZIwZ/view?usp=drive_link',
          '2020': 'https://drive.google.com/file/d/15KnjQ4KrZ13_sLYcfwFSpd2ZO0quQqxc/view?usp=drive_link',
          '2021': 'https://drive.google.com/file/d/1fjnKPpAmi1yYeEvZa0CzmF3iBKY8D5Ch/view?usp=drive_link',
          '2022': 'https://drive.google.com/file/d/1pESvTq-fDurw2sFbCO_GmiekRXfjd5yp/view?usp=drive_link',
          '2023': 'https://drive.google.com/file/d/1ms5_q6_y933Bcinuj02xb9kYDYtoe-fM/view?usp=drive_link',
          '2024': 'https://drive.google.com/file/d/1O5iyvgra2NwHJl2wwVb84lyw8Bz5qPLK/view?usp=drive_link'
        }
      },
      books: {
        'Gate Academy Book': 'https://drive.google.com/file/d/1qcMjPWzf3NKXf24z4waWcD8NA33MoYZv/view?usp=drive_link'
      }
    }
  },
  'physics': {
    name: 'Physics',
    semester: 1,
    description: 'Fundamental physics concepts including mechanics, electromagnetism, and modern physics.',
    icon: 'zap',
    units: ['Physical Quantities', 'Wave Optics', 'Introduction to Quantum Mechanics', 'Solid electronic materials', 'Semiconductors'],
    resources: {
      notes: {
        'Unit 1': 'https://drive.google.com/file/d/10NVtpxBn1sawRWzpz_pbPo4vs0ugHf1h/view?usp=drive_link',
        'Unit 2': 'https://drive.google.com/file/d/1Lffn9NOD_mrZ1thGgg87IZ6pj7skWg8k/view?usp=drive_link',
        'Unit 3': 'https://drive.google.com/file/d/1jWANXrlqLAXJUHCzcrjLTirl2Vl3_lm-/view?usp=drive_link',
        'Unit 4': 'https://drive.google.com/file/d/1QtZM845vnepyy8bxICviFUiumpmbG5Lq/view?usp=drive_link',
        'Unit 5': 'https://drive.google.com/file/d/10ilaNac85owQ03M25NXXhgC9ni0TTmvA/view?usp=drive_link'
      },
      questionBank: {
        questions: 'https://drive.google.com/file/d/1VXv7MUTAZG58YMjGgRqCiMhKv7VcttrG/view?usp=drive_link'
      },
      pyq: {
        'April-May': {
          '2020': 'https://drive.google.com/file/d/1YqAx12fzH9CgJPkOA7BlpbuQVG-L9tCT/view?usp=drive_link',
          '2021': 'https://drive.google.com/file/d/1G0T1Ne1BSyI1ZFKy4O-p-gQ1VsXD-n8x/view?usp=drive_link',
          '2022': 'https://drive.google.com/file/d/1CwHcDki6qCxwGRM41Pq4KNG3SIPez7sT/view?usp=drive_link',
          '2023': 'https://drive.google.com/file/d/1t59HToJ1uVTw4cFURYfF2Obj7D2u4-X2/view?usp=drive_link',
          '2024': 'https://drive.google.com/file/d/1NGsdx5Ucvc4QJbfPO0RLXohLH3v2FH_8/view?usp=drive_link'

        },
        'Nov-Dec': {
          '2019': 'https://drive.google.com/file/d/18rlf43nhtH_e3blKoymS_raP6R5z8ROg/view?usp=drive_link',
          '2020': 'https://drive.google.com/file/d/1Oga8zdmJ67EMgk5KxRYc1jedGkSroBP0/view?usp=drive_link',
          '2021': 'https://drive.google.com/file/d/1XYeJ5O7G5TPwEMiwmZNRHW3aXm-c-7uC/view?usp=drive_link',
          '2022': 'https://drive.google.com/file/d/10Al9J7HiQwkI7usZIBCaq3xY9sEXukzQ/view?usp=drive_link',
          '2023': 'https://drive.google.com/file/d/1yJGalHH_QRKCS8H2xOa_HPtQnYXNI-mp/view?usp=drive_link',
          '2024': 'https://drive.google.com/file/d/1lrB_2HVAQyeEhrqiPzVukQrm_OJ1JPrG/view?usp=drive_link'
        }
      },
      books: {
        'Gate Academy Book': 'https://drive.google.com/file/d/1ie_wvVXrM_UUI_F-LYUrQ4el4QDI-w_o/view?usp=drive_link'
      }
    }
  }
};

export default function SubjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const [subject, setSubject] = useState(null);
  const [activeTab, setActiveTab] = useState('notes');
  const [showDialog, setShowDialog] = useState(false);
  const [dialogResource, setDialogResource] = useState({
    title: '',
    url: ''
  });
  
  // Effect to hide header and footer when dialog is open and handle body overflow
  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const body = document.body;
    
    if (showDialog) {
      if (header) header.style.display = 'none';
      if (footer) footer.style.display = 'none';
      if (body) {
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.width = '100%';
        body.style.height = '100%';
        body.style.margin = '0';
        body.style.padding = '0';
        body.classList.add('iframe-open');
        
        // Add custom styles to head
        const styleEl = document.createElement('style');
        styleEl.id = 'iframe-fullscreen-styles';
        styleEl.innerHTML = hideUIStyles;
        document.head.appendChild(styleEl);
        
        // Add viewport meta tag to allow zooming
        const viewportMeta = document.createElement('meta');
        viewportMeta.id = 'viewport-meta-fullscreen';
        viewportMeta.name = 'viewport';
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
        document.head.appendChild(viewportMeta);
      }
    } else {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (body) {
        body.style.overflow = '';
        body.style.position = '';
        body.style.width = '';
        body.style.height = '';
        body.style.margin = '';
        body.style.padding = '';
        body.classList.remove('iframe-open');
        
        // Remove custom styles
        const styleEl = document.getElementById('iframe-fullscreen-styles');
        if (styleEl) styleEl.remove();
        
        // Remove viewport meta tag
        const viewportMeta = document.getElementById('viewport-meta-fullscreen');
        if (viewportMeta) viewportMeta.remove();
      }
    }
    
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (body) {
        body.style.overflow = '';
        body.style.position = '';
        body.style.width = '';
        body.style.height = '';
        body.style.margin = '';
        body.style.padding = '';
        body.classList.remove('iframe-open');
        
        // Remove custom styles
        const styleEl = document.getElementById('iframe-fullscreen-styles');
        if (styleEl) styleEl.remove();
        
        // Remove viewport meta tag
        const viewportMeta = document.getElementById('viewport-meta-fullscreen');
        if (viewportMeta) viewportMeta.remove();
      }
    };
  }, [showDialog]);


  useEffect(() => {
    if (id) {
      const subjectData = allSubjectsData[id];
      if (subjectData) {
        setSubject(subjectData);
      }
    }
  }, [id]);
  


  const handleResourceClick = (resourceType, unit = null, examType = null, year = null) => {
    if (!subject) return;
    
    let url;
    let resourceName = '';
    
    if (resourceType === 'notes' && unit) {
      const unitNumber = subject.units.indexOf(unit) + 1;
      url = subject.resources.notes[`Unit ${unitNumber}`];
      resourceName = `${subject.name} - ${unit} Notes`;
    } else if (resourceType === 'qbank') {
      url = subject.resources.questionBank.questions;
      resourceName = `${subject.name} - Question Bank`;
    } else if (resourceType === 'qbank-solutions') {
      url = subject.resources.questionBank.solutions;
      resourceName = `${subject.name} - Question Bank Solutions`;
    } else if (resourceType === 'pyq' && examType && year) {
      url = subject.resources.pyq[examType][year];
      resourceName = `${subject.name} - ${examType} ${year} Question Paper`;
    } else if (resourceType === 'book' && subject.resources.books['Gate Academy Book']) {
      url = subject.resources.books['Gate Academy Book'];
      resourceName = `${subject.name} - Gate Academy Book`;
    }
    
    if (url) {
      // Convert Google Drive view links to embed format
      if (url.includes('drive.google.com/file/d/')) {
        // Extract file ID from the URL
        const fileIdMatch = url.match(/\/file\/d\/([^\/]+)/);
        if (fileIdMatch && fileIdMatch[1]) {
          const fileId = fileIdMatch[1];
          url = `https://drive.google.com/file/d/${fileId}/preview`;
        }
      }
      
      // Show dialog with the resource in an iframe
      setDialogResource({
        title: resourceName,
        url: url
      });
      setShowDialog(true);
      
    }
  };
  
  const handleIframeLoad = () => {
    // Ensure iframe takes full window size after loading
    const iframe = document.getElementById('fullscreen-iframe');
    if (iframe) {
      const setIframeSize = () => {
        // Force full viewport size
        iframe.style.width = '100vw';
        iframe.style.height = '100vh';
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.margin = '0';
        iframe.style.padding = '0';
        
        // Force Google Drive container to full size
        const container = iframe.contentDocument?.querySelector('.ndfHFb-c4YZDc');
        if (container) {
          container.style.width = '100vw';
          container.style.height = '100vh';
          container.style.margin = '0';
          container.style.padding = '0';
          container.style.position = 'fixed';
          container.style.top = '0';
          container.style.left = '0';
        }
      };
      
      // Set size immediately
      setIframeSize();
      
      // And repeatedly check and fix sizing for the first few seconds
      const checkInterval = setInterval(setIframeSize, 100);
      setTimeout(() => clearInterval(checkInterval), 2000);
      
      // Also handle resize events
      window.addEventListener('resize', setIframeSize);
      return () => {
        window.removeEventListener('resize', setIframeSize);
        clearInterval(checkInterval);
      };
    }
  };



  if (!subject) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Subject not found</h1>
          <p className="text-gray-300 mb-8">The subject you're looking for doesn't exist or is not available.</p>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg transition-all"
          >
            Go Back Home
          </button>
        </div>
      </Layout>
    );
  }

  const IconComponent = iconComponents[subject.icon] || BookOpen;

  return (
    <Layout>
      <Head>
        <title>{subject.name} - StudyHub</title>
        <meta name="description" content={`Study materials, notes, and resources for ${subject.name}`} />
      </Head>
      
      {/* Resource Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 bg-black w-screen h-screen">
          <div className="w-screen h-screen">
            {/* Simple Close Button */}
            <button 
              onClick={() => setShowDialog(false)}
              className="fixed top-4 right-4 z-[99999] p-2 rounded-full bg-black hover:bg-black/90 transition-all duration-300 cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            {/* Iframe container */}
            <div className="bg-white w-screen h-screen">
              <iframe 
                src={dialogResource.url} 
                id="fullscreen-iframe"
                onLoad={handleIframeLoad}
                title={dialogResource.title}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                allowFullScreen
                style={{
                  width: '100vw',
                  height: '100vh',
                  border: 'none',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                  margin: 0,
                  padding: 0,
                  display: 'block'
                }}
              ></iframe>
            </div>
            
            {/* Removed bottom bar */}
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-6 py-12">
        {/* Subject Header */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{subject.name}</h1>
                <p className="text-gray-300">Semester {subject.semester}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => handleResourceClick('book')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center space-x-2"
              >
                <BookMarked className="w-5 h-5" />
                <span>Gate Academy Book</span>
              </button>
            </div>
          </div>
          
          <p className="mt-6 text-gray-300">{subject.description}</p>
        </div>
        
        {/* Resource Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-white/10">
          <button 
            onClick={() => setActiveTab('notes')}
            className={`px-6 py-3 border-b-2 transition-colors ${activeTab === 'notes' ? 'border-purple-500 text-purple-300' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Notes</span>
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('questionBank')}
            className={`px-6 py-3 border-b-2 transition-colors ${activeTab === 'questionBank' ? 'border-purple-500 text-purple-300' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Question Bank</span>
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('pyq')}
            className={`px-6 py-3 border-b-2 transition-colors ${activeTab === 'pyq' ? 'border-purple-500 text-purple-300' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Previous Year Questions</span>
            </div>
          </button>
        </div>
        
        {/* Notes Tab */}
        {activeTab === 'notes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subject.units.map((unit, index) => (
              <div key={unit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-purple-300">{unit}</h3>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">Comprehensive study notes covering all important topics and concepts.</p>
                
                <div className="space-y-3">
                  <button
                    onClick={() => handleResourceClick('notes', unit)}
                    className="w-full p-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:shadow-lg transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>View Notes</span>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Question Bank Tab */}
        {activeTab === 'questionBank' && (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Question Bank</h3>
              </div>
              
              <p className="text-gray-300 mb-8">
                A comprehensive collection of important questions and problems to help you master the subject.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Questions</h4>
                  <p className="text-gray-400 mb-4">Collection of important questions organized by unit and topic.</p>
                  <button
                    onClick={() => handleResourceClick('qbank')}
                    className="w-full p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Search className="w-5 h-5" />
                    <span>View Questions</span>
                  </button>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Solutions</h4>
                  <p className="text-gray-400 mb-4">Step-by-step solutions to all questions in the question bank.</p>
                  <button
                    onClick={() => handleResourceClick('qbank-solutions')}
                    className="w-full p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>View Solutions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Previous Year Questions Tab */}
        {activeTab === 'pyq' && (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Previous Year Question Papers</h3>
              </div>
              
              <p className="text-gray-300 mb-8">
                Collection of past examination papers to help you understand the exam pattern and prepare effectively.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* April-May Exams */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-purple-300 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    April-May Examinations
                  </h4>
                  
                  <div className="space-y-3">
                    {['2024', '2023', '2022', '2021', '2020'].map(year => (
                      <button
                        key={year}
                        onClick={() => handleResourceClick('pyq', null, 'April-May', year)}
                        className="w-full p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <FileText className="w-5 h-5" />
                          <span>{year} Question Paper</span>
                        </div>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Nov-Dec Exams */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-purple-300 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Nov-Dec Examinations
                  </h4>
                  
                  <div className="space-y-3">
                    {['2024', '2023', '2022', '2021', '2020'].map(year => (
                      <button
                        key={year}
                        onClick={() => handleResourceClick('pyq', null, 'Nov-Dec', year)}
                        className="w-full p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <FileText className="w-5 h-5" />
                          <span>{year} Question Paper</span>
                        </div>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
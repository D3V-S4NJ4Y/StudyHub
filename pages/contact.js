import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Mail, MapPin, Phone, Send, CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showMessage, setShowMessage] = React.useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const formRef = React.useRef();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_jnk750k',
      'template_u28w93d',
      formRef.current,
      'jSUH8siaG_essbr4x'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error.text);
      alert('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };
  return (
    <Layout>
      <Head>
        <title>Contact Us - StudyHub</title>
        <meta name="description" content="Get in touch with the StudyHub team for any questions or feedback." />
      </Head>
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header with enhanced styling */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-purple-300 flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient text-shadow-lg">Contact Us</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Reach out to our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="frosted-card p-8 border border-white/10 relative overflow-hidden group">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h2 className="text-2xl font-bold mb-6 text-gradient relative z-10">Send a Message</h2>
              
              {showMessage && (
                <div className="mb-6 p-5 bg-green-500/10 border border-green-500/30 rounded-xl relative z-10 animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-green-300 font-medium">Thank you for your message! An email has been sent to Sanjay.</p>
                  </div>
                </div>
              )}
              
              <form ref={formRef} className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-purple-300 transition-colors">Your Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name" 
                        name="user_name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full glass-effect rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                        placeholder="John Doe"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl border border-white/10 group-focus-within:border-purple-500/50 pointer-events-none transition-colors"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-purple-300 transition-colors">Email Address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        name="user_email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full glass-effect rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                        placeholder="john@example.com"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl border border-white/10 group-focus-within:border-purple-500/50 pointer-events-none transition-colors"></div>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-purple-300 transition-colors">Subject</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full glass-effect rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="How can we help you?"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl border border-white/10 group-focus-within:border-purple-500/50 pointer-events-none transition-colors"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-purple-300 transition-colors">Message</label>
                  <div className="relative">
                    <textarea 
                      id="message" 
                      name="message"
                      rows="6" 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full glass-effect rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl border border-white/10 group-focus-within:border-purple-500/50 pointer-events-none transition-colors"></div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 gradient-button rounded-xl hover:shadow-neon transition-all flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-lg font-medium">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span className="text-lg font-medium">Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="frosted-card p-8 border border-white/10 relative overflow-hidden group">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Profile Section */}
                <div className="flex flex-col items-center mb-8 relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
                    <img 
                      src="/img/sanjay.png" 
                      alt="Sanjay Kumar" 
                      className="relative w-32 h-32 rounded-full border-2 border-purple-500 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">Sanjay Kumar</h3>
                  <p className="text-white/60 text-sm mb-4">Full Stack Developer & Engineering Student</p>
                </div>

                {/* About Section */}
                <div className="mb-8 relative z-10">
                  <p className="text-white/80 leading-relaxed">
                    I'm passionate about creating educational resources that help engineering students excel in their studies. 
                    With a background in computer science and web development, I've built StudyHub to provide high-quality 
                    study materials for all engineering disciplines.
                  </p>
                </div>

                {/* Contact Information Section */}
                <div className="space-y-6 mb-8 relative z-10">
                  <div className="flex items-start space-x-5 hover-card p-4 rounded-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-neon">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                      <a href="mailto:sanjay.dev925@gmail.com" className="text-white/70 hover:text-purple-300 transition-colors animated-underline">
                        sanjay.dev925@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 hover-card p-4 rounded-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-neon">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">Connect</h3>
                      <div className="flex flex-wrap gap-3">
                        <a href="https://github.com/d3vpr0x/" target="_blank" rel="noopener noreferrer" className="p-3 glass-effect-hover rounded-xl transition-all hover:scale-110 flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/sanjay127/" target="_blank" rel="noopener noreferrer" className="p-3 glass-effect-hover rounded-xl transition-all hover:scale-110 flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          <span className="text-sm">LinkedIn</span>
                        </a>
                        <a href="https://x.com/sanjay_kumar_ch" target="_blank" rel="noopener noreferrer" className="p-3 glass-effect-hover rounded-xl transition-all hover:scale-110 flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                          <span className="text-sm">Twitter</span>
                        </a>
                        <a href="https://www.instagram.com/officialsanjay101/" target="_blank" rel="noopener noreferrer" className="p-3 glass-effect-hover rounded-xl transition-all hover:scale-110 flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 hover-card p-4 rounded-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-neon">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
                      <p className="text-white/70">
                        Raipur<br />
                        Chhattisgarh<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connect Button */}
                <div className="flex justify-center relative z-10">
                  <a 
                    href="https://portfolio-seven-bay-53.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gradient-button px-6 py-3 rounded-xl inline-flex items-center space-x-2 group"
                  >
                    <span>See Portfolio</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
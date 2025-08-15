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
          
          <div className="max-w-2xl mx-auto">
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
            

          </div>
        </div>
      </div>
    </Layout>
  );
}
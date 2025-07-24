import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { BookOpen, FileText, Search, Video, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Resources() {
  return (
    <Layout>
      <Head>
        <title>Resources - StudyHub</title>
        <meta name="description" content="Access our comprehensive collection of engineering study resources." />
      </Head>
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Resources</h1>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center mb-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white">All Resources</h2>
            <p className="text-gray-400 mt-2 max-w-2xl">Access all study materials organized by semester and subject</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/semesters" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center space-x-2">
              <span>Browse by Semester</span>
            </Link>
            <Link href="/" className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors inline-flex items-center justify-center space-x-2">
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
        
        {/* Request Resources */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Can't find what you're looking for?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you need specific study materials that aren't available here, let us know and we'll try to add them to our collection.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center space-x-2">
            <span>Request Resources</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}